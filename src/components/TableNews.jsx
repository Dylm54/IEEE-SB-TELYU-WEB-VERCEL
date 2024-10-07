import React, { useState, useEffect, useMemo, useCallback } from "react";
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
    useDisclosure,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from "@nextui-org/react";
import axios from "axios";
import { PlusIcon } from "./PlusIcon";
import { ChevronDownIcon } from "./ChevronDownIcon";
import { capitalize } from "./utils";
import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeleteIcon";
import { Toaster, toast } from 'sonner'

const columns = [
    { name: "ID", uid: "id", sortable: true },
    { name: "TITLE", uid: "title", sortable: true },
    { name: "DATE", uid: "date", sortable: true },
    { name: "CATEGORY", uid: "kategori", sortable: true },
    { name: "ACTIONS", uid: "actions" },
];

const categoryOptions = [
    { name: "News", uid: "News" },
    { name: "Event", uid: "Event" },
];

const categoryColorMap = {
    News: "success",
    Event: "warning",
};

const INITIAL_VISIBLE_COLUMNS = ["id", "title", "date", "kategori", "actions"];

export default function TableNews() {
    const token = document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1]
    const [filterValue, setFilterValue] = useState("");
    const [selectedKeys, setSelectedKeys] = useState(new Set([]));
    const [visibleColumns, setVisibleColumns] = useState(new Set(INITIAL_VISIBLE_COLUMNS));
    const [categoryFilter, setCategoryFilter] = useState("all");
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [sortDescriptor, setSortDescriptor] = useState({
        column: "age",
        direction: "ascending",
    });
    const [page, setPage] = useState(1);
    const [idToDelete, setIdToDelete] = useState();
    const [allData, setAllData] = useState([]);

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    useEffect(() => {
        const getAllNews = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/news`);
                const data = response.data;
                setAllData(data);
            } catch (err) {
                console.log(err);
            }
        };
        getAllNews();
    }, []);

    const headerColumns = useMemo(() => {
        if (visibleColumns === "all") return columns;

        return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
    }, [visibleColumns]);

    const filteredItems = useMemo(() => {
        let filteredUsers = allData;

        if (filterValue) {
            filteredUsers = filteredUsers.filter((user) =>
                user.title.toLowerCase().includes(filterValue.toLowerCase()),
            );
        }
        if (categoryFilter !== "all" && Array.from(categoryFilter).length !== categoryOptions.length) {
            filteredUsers = filteredUsers.filter((user) =>
                Array.from(categoryFilter).includes(user.kategori),
            );
        }

        return filteredUsers;
    }, [allData, filterValue, categoryFilter]);

    const pages = Math.ceil(filteredItems.length / rowsPerPage);

    const items = useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        return filteredItems.slice(start, end);
    }, [page, filteredItems, rowsPerPage]);

    const sortedItems = useMemo(() => {
        return [...items].sort((a, b) => {
            const first = a[sortDescriptor.column];
            const second = b[sortDescriptor.column];
            const cmp = first < second ? -1 : first > second ? 1 : 0;
            return sortDescriptor.direction === "descending" ? -cmp : cmp;
        });
    }, [sortDescriptor, items]);

    const renderCell = useCallback((user, columnKey) => {
        const cellValue = user[columnKey];
        switch (columnKey) {
            case "title":
                return (
                    <User
                        avatarProps={{ radius: "lg", src: `${import.meta.env.VITE_API_URL}/uploads/${user.thumbnail}` }}
                        description={user.email}
                        name={cellValue}
                    >
                        {user.email}
                    </User>
                );
            case "kategori":
                return (
                    <Chip className="capitalize" color={categoryColorMap[user.kategori]} size="sm" variant="flat">
                        {cellValue}
                    </Chip>
                );
            case "actions":
                return (
                    <div className="relative flex items-center gap-2">
                        <a href={`#/EditNews/${user.id}`}>
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
            await axios.delete(`${import.meta.env.VITE_API_URL}/news/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setAllData((prevData) => prevData.filter((item) => item.id !== idToDelete));
            onOpenChange();
            toast.success('News has been deleted!')
        } catch(err) {
            console.log(err)
        }
    }



    const onNextPage = useCallback(() => {
        if (page < pages) {
            setPage(page + 1);
        }
    }, [page, pages]);

    const onPreviousPage = useCallback(() => {
        if (page > 1) {
            setPage(page - 1);
        }
    }, [page]);

    const onRowsPerPageChange = useCallback((e) => {
        setRowsPerPage(Number(e.target.value));
        setPage(1);
    }, []);

    const onSearchChange = useCallback((value) => {
        if (value) {
            setFilterValue(value);
            setPage(1);
        } else {
            setFilterValue("");
        }
    }, []);

    const onClear = useCallback(() => {
        setFilterValue("");
        setPage(1);
    }, []);

    const topContent = useMemo(() => {
        return (
            <div className="flex flex-col gap-4">
                <div className="block sm:hidden text-3xl font-semibold">News</div>
                <div className="flex justify-between gap-3 items-center">
                    <div className="hidden sm:block sm:text-4xl text-2xl font-semibold">News</div>
                    <div className="flex gap-3">
                        <Dropdown>
                            <DropdownTrigger className="hidden sm:flex">
                                <Button endContent={<ChevronDownIcon className="text-small" />} className="px-[1.25rem]" variant="flat">
                                    Category
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu
                                disallowEmptySelection
                                aria-label="Table Columns"
                                closeOnSelect={false}
                                selectedKeys={categoryFilter}
                                selectionMode="multiple"
                                onSelectionChange={setCategoryFilter}
                            >
                                {categoryOptions.map((category) => (
                                    <DropdownItem key={category.uid} className="capitalize">
                                        {capitalize(category.name)}
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
                        <a href="#/AddNews">
                            <Button color="primary" endContent={<PlusIcon />} className="py-[0.5rem] px-[1.25rem]">
                                Add New
                            </Button>
                        </a>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-default-400 text-small">Total {allData.length} news items</span>
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
        categoryFilter,
        visibleColumns,
        onRowsPerPageChange,
        allData.length,
        onSearchChange,
    ]);

    const bottomContent = useMemo(() => {
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
    }, [selectedKeys, items.length, page, pages]);

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
                            align={column.uid === "actions" ? "center" : "start"}
                            allowsSorting={column.sortable}
                        >
                            {column.name}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody emptyContent={"No news items found"} items={sortedItems}>
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
                            <ModalHeader className="flex flex-col gap-1">Delete News</ModalHeader>
                            <ModalBody>
                                <p>Are you sure you want to delete this news item?</p>
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
