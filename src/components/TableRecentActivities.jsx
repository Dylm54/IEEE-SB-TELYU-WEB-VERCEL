import React from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Button,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Chip,
    User,
    Pagination,
    Tooltip,
    Modal, ModalContent, ModalHeader, ModalBody, ModalFooter,
    useDisclosure
} from "@nextui-org/react";
import { PlusIcon } from "./PlusIcon";
import { ChevronDownIcon } from "./ChevronDownIcon";
import { capitalize } from "./utils";
import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeleteIcon";
import { useState, useEffect } from "react";
import axios from "axios";

const columns = [
    { name: "ID", uid: "id", sortable: true },
    { name: "TITLE", uid: "title", sortable: true },
    { name: "DATE", uid: "tanggal" },
    { name: "ACTIONS", uid: "actions" },
];

const INITIAL_VISIBLE_COLUMNS = ["id", "title", "tanggal", "actions"];

export default function TableRecentActivities() {
    const token = document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1]
    const [filterValue, setFilterValue] = React.useState("");
    const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
    const [visibleColumns, setVisibleColumns] = React.useState(new Set(INITIAL_VISIBLE_COLUMNS));
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [sortDescriptor, setSortDescriptor] = React.useState({
        column: "age",
        direction: "ascending",
    });
    const [page, setPage] = React.useState(1);
    const [idToDelete, setIdToDelete] = useState()
    const [allData, setAllData] = useState([]);

    const hasSearchFilter = Boolean(filterValue);

    useEffect(() => {
        const getAllNews = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/activities`);
                const data = response.data;
                setAllData(data);
            } catch (err) {
                console.log(err);
            }
        };
        getAllNews();
    }, []);

    const headerColumns = React.useMemo(() => {
        if (visibleColumns === "all") return columns;

        return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
    }, [visibleColumns]);

    const filteredItems = React.useMemo(() => {
        let filteredUsers = allData;

        if (hasSearchFilter) {
            filteredUsers = filteredUsers.filter((user) =>
                user.title.toLowerCase().includes(filterValue.toLowerCase()),
            );
        }

        return filteredUsers;
    }, [allData, filterValue]);

    const pages = Math.ceil(filteredItems.length / rowsPerPage);

    const items = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return filteredItems.slice(start, end);
    }, [page, filteredItems, rowsPerPage]);

    const sortedItems = React.useMemo(() => {
        return [...items].sort((a, b) => {
            const first = a[sortDescriptor.column];
            const second = b[sortDescriptor.column];
            const cmp = first < second ? -1 : first > second ? 1 : 0;

            return sortDescriptor.direction === "descending" ? -cmp : cmp;
        });
    }, [sortDescriptor, items]);

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const renderCell = React.useCallback((user, columnKey) => {
        const cellValue = user[columnKey];
        switch (columnKey) {
            case "title":
                return (
                    <User
                        avatarProps={{ radius: "lg", src: `${import.meta.env.VITE_API_URL}/uploads/${user.gambar}` }}
                        description={user.email}
                        name={cellValue}
                    >
                        {user.email}
                    </User>
                );
            case "tanggal":
                return (
                    <p>{user.tanggal}</p>
                )
            case "actions":
                return (
                    <div className="relative flex items-center gap-2">
                        <a href={`#/EditRecentActivity/${user.id}`}>
                            <Button isIconOnly variant="light">
                                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                    <EditIcon />
                                </span>
                            </Button>
                        </a>

                        <Button value={user.id} isIconOnly onClick={() => handleDelete(user.id)} variant="light">
                            <span className="text-lg text-danger cursor-pointer active:opacity-50">
                                <DeleteIcon />
                            </span>
                        </Button>
                    </div>
                );
            default:
                return cellValue;
        }
    }, []);

    const handleDelete = (id) => {
        setIdToDelete(id);
        onOpen();
    };

    const handleConfirmDelete = async (id) => {
        console.log(id)
        try {
            await axios.delete(`${import.meta.env.VITE_API_URL}/activities/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setAllData((prevData) => prevData.filter((item) => item.id !== idToDelete));
            onOpenChange();
            toast.success('Activity has been deleted!')
        } catch (err) {
            console.log(err)
        }
    }
    const onRowsPerPageChange = React.useCallback((e) => {
        setRowsPerPage(Number(e.target.value));
        setPage(1);
    }, []);

    const onSearchChange = React.useCallback((value) => {
        if (value) {
            setFilterValue(value);
            setPage(1);
        } else {
            setFilterValue("");
        }
    }, []);

    const topContent = React.useMemo(() => {
        return (
            <div className="flex flex-col gap-4">
                <div className="block sm:hidden text-3xl font-semibold">Recent Activities</div>
                <div className="flex justify-between gap-3 items-center">
                    <div className="hidden sm:block sm:text-4xl text-2xl font-semibold">Recent Activities</div>
                    <div className="flex gap-3">

                        <a href="#/AddRecentActivity">
                            <Button color="primary" className="py-[0.5rem] px-[1.25rem]" endContent={<PlusIcon />}>
                                Add New
                            </Button>
                        </a>

                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-default-400 text-small">Total {allData?.length} activities</span>
                    <label className="flex items-center text-default-400 text-small">
                        Rows per page:
                        <select
                            className="bg-transparent outline-none text-default-400 text-small"
                            onChange={onRowsPerPageChange}
                        >
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                        </select>
                    </label>
                </div>
            </div>
        );
    }, [
        filterValue,
        visibleColumns,
        onRowsPerPageChange,
        allData.length,
        onSearchChange,
        hasSearchFilter,
    ]);

    const bottomContent = React.useMemo(() => {
        return (
            <div className="py-2 px-2 flex justify-center items-center">
                <Pagination
                    isCompact
                    showControls
                    showShadow
                    color="primary"
                    page={page}
                    total={pages}
                    onChange={setPage}
                />
            </div>
        );
    }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

    return (
        <>
            <Table
                aria-label="News Table"
                isHeaderSticky
                bottomContent={bottomContent}
                bottomContentPlacement="outside"
                selectedKeys={selectedKeys}
                sortDescriptor={sortDescriptor}
                topContent={topContent}
                topContentPlacement="outside"
                selectionMode="single"
                onSelectionChange={setSelectedKeys}
                onSortChange={setSortDescriptor}
            >
                <TableHeader columns={headerColumns}>
                    {(column) => (
                        <TableColumn
                            key={column.uid}
                            align={column.uid === "actions" ? "start" : "start"}
                            allowsSorting={column.sortable}
                        >
                            {column.name}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody emptyContent={"No users found"} items={sortedItems}>
                    {(item) => (
                        <TableRow key={item.id}>
                            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Delete Activity</ModalHeader>
                            <ModalBody>
                                <p>Are you sure you want to delete this achievement?</p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose} className="py-[0.5rem] px-[1.25rem]">
                                    Close
                                </Button>
                                <Button color="primary" onPress={() => handleConfirmDelete(idToDelete)} className="py-[0.5rem] px-[1.25rem]">
                                    Confirm
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>

    );
}
