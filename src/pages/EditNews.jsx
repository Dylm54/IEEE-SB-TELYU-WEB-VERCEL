import React from 'react'
import placeholderThumbnail from '../assets/placeholderThumbnail.png'
import { useState, useEffect } from 'react'
import EditorJS from '@editorjs/editorjs';
import { tools } from '../components/toolsComponent';
import { Select, SelectItem, Button } from "@nextui-org/react";
import { Navbar } from "@nextui-org/react";
import { NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import IEEEblack from "../../src/assets/IEEE-Black.png";
import { Toaster, toast } from 'sonner'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function EditNews() {
    const token = document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1]
    const { id } = useParams()
    const [tempImage, setTempImage] = useState()
    const [formEditor, setFormEditor] = useState()
    const [newImage, setNewImage] = useState()
    const [author, setAuthor] = useState('')
    const [category, setCategory] = useState('')
    const [title, setTitle] = useState('')
    const [link, setLink] = useState('')
    const [existingData, setExistingData] = useState()


    useEffect(() => {
        const getExistingData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/news/${id}`)
                const data = await response.data
                setExistingData(data)
                setTitle(data.title)
                setLink(data.link)
                setAuthor(data.nama_penulis)
                setCategory(data.kategori)

            } catch (err) {
                console.log(err)
            }
        }
        getExistingData()
        
    }, [])

    useEffect(() => {
        if (existingData) {
            setFormEditor(new EditorJS({
            holder: "textEditor",
            data: existingData.isi_konten,
            tools: tools,
            placeholder: "Tell your awesome news..."
        }))
        }
        
    }, [existingData])

    const handleThumbnailUpload = (e) => {
        const image = e.target.files[0]
        setNewImage(image)
        setTempImage(URL.createObjectURL(image))
    }

    const handleTitleKeyDown = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault()
        }
    }

    const handleTitleChange = (e) => {
        const input = e.target;
        input.style.height = "auto";
        input.style.height = input.scrollHeight + "px";
        setTitle(input.value)
    }

    const handlePublish = async (e) => {

        if (!title) {
            return toast.error("Write the news title to publish it")
        }

        if (!category) {
            return toast.error("Choose the news category to publish it")
        }

        if (formEditor) {
            formEditor.save().then(data => {
                if (!data.blocks.length) {
                    return toast.error('Write something in your news to publish it')
                }
            })
                .catch(err => {
                    console.log(err)
                })
        }

        if (!author) {
            return toast.error("Write the news author to publish it")
        }

        const published = `${dates} ${monthsName[month]} ${year}`
        // formEditor.save().then(data => {
        //     console.log({
        //         date: published,
        //         title: title,
        //         thumbnail: newImage,
        //         kategori: category,
        //         nama_penulis: author,
        //         link: link,
        //         isi_konten: data
        //     })
        //     formData.append("isi_konten", data.blocks)
        // })
        // // window.location.href = "/DashboardNews"
        // e.preventDefault()

        const formData = new FormData()
        formData.append("title", title)
        formData.append("kategori", category)
        if (newImage) {
            formData.append("thumbnail", newImage)
        }
        const data = await formEditor.save();
        formData.append("isi_konten", JSON.stringify(data));
        formData.append("nama_penulis", author)
        formData.append("link", link)
        formData.append("date", published)

        try {
            const response = await axios.put(`${import.meta.env.VITE_API_URL}/news/${id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            console.log("Data berhasil dikirim:", response.data);
            toast.success('Successfully updated the news!')
            window.location.href = "#/DashboardNews"
        } catch (error) {
            console.error("Error saat mengirim data:", error);
        }

    }

    const monthsName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const currentDate = new Date()
    const dates = currentDate.getDate()
    const month = currentDate.getMonth()
    const year = currentDate.getFullYear()



    return (
        <>
            <div>
                <Toaster richColors position="top-center" />
                <Navbar isBordered shouldHideOnScroll maxWidth="full" className={`px-[20px] sm:px-[calc(20px+70*(100vw-576px)/1024)] 2xl:px-[90px] 2xl:h-[100px] md:h-[calc(60px+40*(100vw-576px)/1024)] h-[60px] transition-all fixed`}>
                    <NavbarBrand>
                        <a href="/">
                            <img src={IEEEblack} className="h-[37px] lg:h-[45px]" alt="" />
                        </a>
                    </NavbarBrand>

                    <NavbarContent justify="end">
                        <NavbarItem>
                            <div className="right-side flex gap-3">
                                <a href="#/DashboardNews">
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
                <section className='2xl:pt-240px sm:pt-[calc((60px+(6000vw-34560px)/1024)*2)] pt-[120px] 2xl:pb-[3.75vw] sm:pb-[calc(30px + 30*(100vw-576px)/1024)] pb-[30px]'>
                    <div className='2xl:max-w-[69.5vw] sm:max-w-[calc(932px+(20px+(7000vw-40320px)/1024)*2)] max-w-[972px] m-auto 2xl:px-[90px] sm:px-[calc(20px+70*(100vw-576px)/1024)] px-[20px]'>
                        <textarea
                            autoFocus
                            placeholder='Title'
                            value={title}
                            className='outline-none resize-none 2xl:text-[3.5vw] sm:text-[calc(30px+26*(100vw-576px)/1024)] text-[30px] 2xl:mt-[48px] 2xl:mb-[48px] sm:mt-[calc(16px+32*(100vw-576px)/1024)] sm:mb-[calc(8px+24*(100vw-576px)/1024)] mt-[16px] mb-[8px] leading-[1.4] font-semibold overflow-hidden h-full w-full placeholder:opacity-40 placeholder:text-[#707684]'
                            onKeyDown={handleTitleKeyDown}
                            onChange={handleTitleChange}
                        ></textarea>
                        <Select
                            variant="flat"
                            label="Category"
                            labelPlacement='inside'
                            placeholder="Select a category"
                            value={existingData?.kategori}
                            className="max-w-xs"
                            onChange={e => setCategory(e.target.value)}
                        >
                            <SelectItem key="News" value="News">
                                News
                            </SelectItem>
                            <SelectItem key="Event" value="Event">
                                Event
                            </SelectItem>
                        </Select>
                    </div>
                </section>
                <section className='2xl:pb-[3.75vw] sm:pb-[calc(24px+36*(100vw-576px)/1024)] pb-[24px]'>
                    <div className='2xl:px-[90px] sm:px-[calc(20px+70*(100vw-576px)/1024)] px-[20px]'>
                        <div className='bg-white border-4 border-grey hover:opacity-80 aspect-[1.75176] 2xl:rounded-[32px] sm:rounded-[calc(16px+16*(100vw-576px)/1024)] rounded-[16px] overflow-hidden relative flex items-center'>
                            <div className='2xl:rounded-[32px] sm:rounded-[calc(16px+16*(100vw-576px)/1024)] rounded-[16px] relative w-full bg-clip-padding h-full overflow-hidden'>
                                <label htmlFor='uploadThumbnail' className='w-full h-full relative flex items-center'>
                                    <img
                                        src={tempImage ? tempImage : `${import.meta.env.VITE_API_URL}/uploads/${existingData?.thumbnail}`}
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
                </section>
                <section className='2xl:py-[3.75vw] sm:py-[calc(24px+36*(100vw-576px)/1024)] py-[24px]'>
                    <div className='2xl:max-w-[69.5vw] sm:max-w-[calc(932px+(20px+(7000vw-40320px)/1024)*2)] max-w-[972px] m-auto 2xl:px-[90px] sm:px-[calc(20px+70*(100vw-576px)/1024)] px-[20px]'>
                        <div id='textEditor' className='font-gelasio'></div>
                        <div className='2xl:h-[2vw] sm:h-[calc(16px+16*(100vw-576px)/1024)] h-[1rem]'></div>
                        <div className='flex w-full flex-row gap-2'>
                            <div className='lg:leading-[1.75] 2xl:text-[1.125vw] lg:text-[18px] leading-[1.5] font-semibold'>Author: </div>
                            <input type="text" value={author} onChange={e => setAuthor(e.target.value)} className='w-full outline-none lg:!leading-[1.75] 2xl:text-[1.125vw] lg:text-[18px] !leading-[1.5]' />
                        </div>
                        <div className='2xl:h-[2vw] sm:h-[calc(16px+16*(100vw-576px)/1024)] h-[1rem]'></div>
                        <div className='flex w-full flex-row gap-2'>
                            <div className='lg:leading-[1.75] 2xl:text-[1.125vw] lg:text-[18px] leading-[1.5] font-semibold'>Link: </div>
                            <input type="text" value={link} onChange={e => setLink(e.target.value)} className='w-full outline-none lg:!leading-[1.75] 2xl:text-[1.125vw] lg:text-[18px] !leading-[1.5]' />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default EditNews
