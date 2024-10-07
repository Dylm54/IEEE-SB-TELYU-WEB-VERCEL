import React, { useState, useEffect } from 'react';
import { Toaster, toast } from 'sonner';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Input, Select, SelectItem } from '@nextui-org/react';
import IEEEblack from "../../src/assets/IEEE-Black.png";
import { Button } from '@nextui-org/react';
import placeholderThumbnail from '../assets/placeholderThumbnail.png';
import axios from 'axios';
import { format, parse } from 'date-fns';
import { useParams } from 'react-router-dom';

function EditRecentActivity() {
    const token = document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1];
    const { id } = useParams()
    const [tempImage, setTempImage] = useState();
    const [newImage, setNewImage] = useState();
    const [title, setTitle] = useState('');
    const [date, setDate] = useState(''); // Default date is empty
    const [formattedDate, setFormattedDate] = useState(''); // Default formatted date is empty
    const [existingData, setExistingData] = useState()

    useEffect(() => {
        const getExistingData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/activities/${id}`)
                const data = await response.data
                setExistingData(data)
                setTitle(data.title)
                setFormattedDate(data.tanggal)

            } catch (err) {
                console.log(err)
            }
        }
        getExistingData()
        
    }, [])

    const handleThumbnailUpload = (e) => {
        const image = e.target.files[0];
        setNewImage(image);
        setTempImage(URL.createObjectURL(image));
    };

    const handleDateChange = (e) => {
        const newDate = e.target.value;
        setDate(newDate);
        setFormattedDate(format(parse(newDate, 'yyyy-MM-dd', new Date()), 'dd MMMM yyyy'));
    };

    const handlePublish = async (e) => {

        if (!title) {
            return toast.error("Write the activity title to publish it");
        }

        if (!formattedDate) {
            return toast.error("Write the activity date to publish it");
        }

        const formData = new FormData();
        formData.append("title", title);
        formData.append("tanggal", formattedDate);
        if (newImage) {
            formData.append("gambar", newImage);
        }
        

        try {
            const response = await axios.put(`${import.meta.env.VITE_API_URL}/activities/${id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            console.log("Data berhasil dikirim:", response.data);
            toast.success('Successfully updated the activity!');
            window.location.href = "#/DashboardRecentActivities";
        } catch (error) {
            console.error("Error saat mengirim data:", error);
        }
    };


    return (
        <>
            <Toaster richColors position="top-center" />
            <Navbar isBordered shouldHideOnScroll maxWidth="full" className={`px-[20px] sm:px-[calc(20px+70*(100vw-576px)/1024)] 2xl:px-[90px] 2xl:h-[100px] md:h-[calc(60px+40*(100vw-576px)/1024)] h-[60px] transition-all fixed`}>
                <NavbarBrand>
                    <a href="#/DashboardNews">
                        <img src={IEEEblack} className="h-[37px] lg:h-[45px]" alt="" />
                    </a>
                </NavbarBrand>

                <NavbarContent justify="end">
                    <NavbarItem>
                        <div className="right-side flex gap-3">
                            <a href="#/DashboardRecentActivities">
                                <Button color="default" radius="full" className="py-[0.5rem] px-[1.25rem]">
                                    Cancel
                                </Button>
                            </a>

                            <Button color="primary" radius="full" onClick={handlePublish} className="py-[0.5rem] px-[1.25rem]">
                                Update
                            </Button>
                        </div>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
            <section className='bg-[#F8F8F8] 2xl:pt-[240px] sm:pt-[calc((60px+(6000vw-34560px)/1024)*2)] pt-[120px] 2xl:pb-[3.75vw] sm:pb-[calc(30px+30*(100vw-576px)/1024)] pb-[30px]'>
                <div className='w-full flex justify-center items-center h-full'>
                    <div className='bg-white w-[90%] md:w-[50%] py-[32px] px-[32px] h-full rounded-[16px] border-2 border-solid border-gray flex flex-col gap-[24px] justify-center items-center'>
                        <h1 className='font-semibold text-3xl'>Recent Activity</h1>
                        <Input type='text' value={title} onChange={e => setTitle(e.target.value)} variant="bordered" label="Title" placeholder="Enter title" />
                        <Input type='date' value={date} onChange={handleDateChange} variant="bordered" label="Date" placeholder="Enter date" />
                        <p className="text-default-500 text-sm">Selected date: {formattedDate || "--"}</p>
                        <div className='bg-white border-4 border-grey hover:opacity-80 aspect-auto 2xl:rounded-[32px] sm:rounded-[calc(16px+16*(100vw-576px)/1024)] rounded-[16px] overflow-hidden relative flex items-center'>
                            <div className='2xl:rounded-[32px] sm:rounded-[calc(16px+16*(100vw-576px)/1024)] rounded-[16px] relative w-full bg-clip-padding h-full overflow-hidden'>
                                <label htmlFor='uploadThumbnail' className='w-full h-full relative flex items-center'>
                                    <img
                                        src={tempImage ? tempImage : `${import.meta.env.VITE_API_URL}/uploads/${existingData?.gambar}`}
                                        alt="thumbnail"
                                        className='w-full object-cover h-full overflow-clip hover:cursor-pointer'
                                    />
                                    <input
                                        id="uploadThumbnail"
                                        type="file"
                                        accept=".jpg, .jpeg, .png"
                                        hidden
                                        onChange={handleThumbnailUpload}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default EditRecentActivity;
