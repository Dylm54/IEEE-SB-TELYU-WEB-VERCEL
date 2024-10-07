import React from 'react'
import { Toaster, toast } from 'sonner'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Input, Select, SelectItem } from '@nextui-org/react'
import IEEEblack from "../../src/assets/IEEE-Black.png";
import { Button } from '@nextui-org/react';
import placeholderThumbnail from '../assets/placeholderThumbnail.png'
import { useState } from 'react';
import axios from 'axios';

function AddAchievement() {
    const token = document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1]
    const [tempImage, setTempImage] = useState()
    const [newImage, setNewImage] = useState()
    const [title, setTitle] = useState()
    const [name, setName] = useState()
    const [category, setCategory] = useState()
    const [link, setLink] = useState()

    const handleThumbnailUpload = (e) => {
        const image = e.target.files[0]
        setNewImage(image)
        setTempImage(URL.createObjectURL(image))
    }

    const handlePublish = async (e) => {

        if (!name) {
            return toast.error("Write the person's name to publish it")
        }

        if (!title) {
            return toast.error("Write the achievement title to publish it")
        }

        if (!category) {
            return toast.error("Choose the achievement category to publish it")
        }

        if (!link) {
            return toast.error("Write the achievement link to publish it")
        }

        if (!newImage) {
            return toast.error("Upload the person's image to publish it")
        }

        

        const formData = new FormData()
        formData.append("nama", name)
        formData.append("pencapaian", title)
        formData.append("link", link)
        formData.append("kategori", category)
        formData.append("foto", newImage)
        
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/achievements`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            console.log("Data berhasil dikirim:", response.data);
            toast.success('Successfully published the achievement!')
            window.location.href = "#/DashboardAchievements"
        } catch (error) {
            console.error("Error saat mengirim data:", error);
        }

    }

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
                            <a href="#/DashboardAchievements">
                                <Button color="default" radius="full" className="py-[0.5rem] px-[1.25rem]">
                                    Cancel
                                </Button>
                            </a>

                            <Button color="primary" radius="full" onClick={handlePublish} className="py-[0.5rem] px-[1.25rem]">
                                Publish
                            </Button>
                        </div>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
            <section className='bg-[#F8F8F8] 2xl:pt-[240px] sm:pt-[calc((60px+(6000vw-34560px)/1024)*2)] pt-[120px] 2xl:pb-[3.75vw] sm:pb-[calc(30px+30*(100vw-576px)/1024)] pb-[30px]'>
                <div className='w-full flex justify-center items-center h-full'>
                    <div className='bg-white w-[90%] md:w-[50%] py-[32px] px-[32px] h-full rounded-[16px] border-2 border-solid border-gray flex flex-col gap-[24px] justify-center items-center'>
                        <h1 className='font-semibold text-3xl'>Achievement</h1>
                        <Input type="text" onChange={e => setName(e.target.value)} variant="bordered" label="Name" placeholder="Enter name" />
                        <Input type='text' onChange={e => setTitle(e.target.value)} variant="bordered" label="Title" placeholder="Enter title" />

                        <Select
                            variant="flat"
                            label="Category"
                            labelPlacement='inside'
                            placeholder="Select a category"
                            className="w-full"
                            onChange={e => setCategory(e.target.value)}
                        >
                            <SelectItem key="International" value="International">
                                International
                            </SelectItem>
                            <SelectItem key="National" value="National">
                                National
                            </SelectItem>
                            <SelectItem key="Campus" value="Campus">
                                Campus
                            </SelectItem>
                        </Select>
                        <Input type='text' onChange={e => setLink(e.target.value)} variant="bordered" label="Link" placeholder="Enter link" />
                        <div className='bg-white border-4 border-grey hover:opacity-80 aspect-auto 2xl:rounded-[32px] sm:rounded-[calc(16px+16*(100vw-576px)/1024)] rounded-[16px] overflow-hidden relative flex items-center'>
                            <div className='2xl:rounded-[32px] sm:rounded-[calc(16px+16*(100vw-576px)/1024)] rounded-[16px] relative w-full bg-clip-padding h-full overflow-hidden'>
                                <label htmlFor='uploadThumbnail' className='w-full h-full relative flex items-center'>
                                    <img
                                        src={tempImage ? tempImage : placeholderThumbnail}
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
    )
}

export default AddAchievement