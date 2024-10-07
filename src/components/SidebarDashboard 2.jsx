import React from 'react'
import { Divider, Listbox, ListboxItem, Avatar } from "@nextui-org/react";
import { GoHome, GoHistory } from 'react-icons/go';
import { SiYoutubemusic } from 'react-icons/si';
import { MdOutlineSubscriptions, MdOutlineVideoLibrary, MdOutlineWatchLater } from 'react-icons/md';
import { RiVideoLine } from 'react-icons/ri';
import { BiLike } from 'react-icons/bi';
import { IoIosArrowDown } from 'react-icons/io';
import axios from 'axios';
import { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import IEEEBlack from '../assets/IEEE-Black.png'
import { IoNewspaperOutline } from "react-icons/io5";
import { GiAchievement } from "react-icons/gi";
import { MdHistory } from "react-icons/md";
import { MdLogout } from "react-icons/md";


function SidebarDashboard() {
    const { pathname } = useLocation()

    const handleLogout = () => {
        document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC`
        window.location.href = '#/AdminForJournalists'
      }

    return (
        <div className="h-screen w-0 md:w-[240px] overflow-auto md:pl-2 md:pr-3 px-0 bg-white hidden lg:block">
            <div className="flex flex-col justify-between h-[100%]">
                <div>
                    <div className='flex w-full justify-center'>
                        <img src={IEEEBlack} alt="IEEE-Logo" className='my-7 h-[35px] lg:h-[42px]' />
                    </div>
                    
                    <Listbox>
                        {navigationData.map((data, i) => (
                            <ListboxItem key={i} className={pathname === data.path ? "bg-[#E5E5E5]" : "bg-white"}>
                                <Link to={data.path} className="no-underline">
                                    <div className="flex-row flex items-center gap-3">
                                        {data.icon}
                                        <p className={pathname === data.path ? "font-semibold leading-8" : "font-normal leading-8"}>{data.name}</p>
                                    </div>
                                </Link>
                            </ListboxItem>

                        ))}
                    </Listbox>
                </div>
                <div className='mb-1'>
                <Divider className="mb-1"/>
                    <Listbox>
                        <ListboxItem>
                            <div onClick={handleLogout} className="text-danger flex-row flex items-center justify-center gap-2">
                                <MdLogout size={21}/>
                                <p className="leading-8">Log out</p>
                            </div>
                        </ListboxItem>
                    </Listbox>
                </div>
                {/* <Divider className="mt-2 mb-4" /> */}

            </div>
        </div>
    )
}

export default SidebarDashboard

const navigationData = [
    {
        name: "News",
        path: "/DashboardNews",
        icon: <IoNewspaperOutline size={21} />
    },
    {
        name: "Achievements",
        path: "/DashboardAchievements",
        icon: <GiAchievement size={21} />
    },
    {
        name: "Recent Activities",
        path: "/DashboardRecentActivities",
        icon: <MdHistory size={21} />
    },
]