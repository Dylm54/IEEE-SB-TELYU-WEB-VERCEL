import "../../src/index.css";
import { Navbar, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from "@nextui-org/react";
import { NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import IEEEblack from "../../src/assets/IEEE-Black.png";
import { React, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";
import { VscHome } from "react-icons/vsc";

export default function WhiteNav() {
    return (
        <Navbar shouldHideOnScroll maxWidth="full" className={`px-[20px] sm:px-[calc(20px+70*(100vw-576px)/1024)] 2xl:px-[90px] 2xl:h-[100px] md:h-[calc(60px+40*(100vw-576px)/1024)] h-[60px] transition-all fixed`}>
            <NavbarBrand>
                <a href="/">
                    <img src={IEEEblack} className="h-[37px] lg:h-[45px]" alt="" />
                </a>
            </NavbarBrand>

            <NavbarContent justify="end">
                <NavbarItem>
                    <div className="right-side hidden sm:flex sm:gap-[20px] lg:gap-[60px]">
                        <Dropdown className="mt-3">
                            <DropdownTrigger>
                                <h2 className="flex items-center text-xs lg:text-sm gap-2 cursor-pointer font-medium">
                                    About Us
                                    <MdKeyboardArrowDown fill={"black"} />
                                </h2>
                            </DropdownTrigger>
                            <DropdownMenu className="w-[340px]" itemClasses={{
                                base: "gap-4",
                            }}>
                                <DropdownItem href="#/Departments" className="no-underline" startContent={<VscHome size={33} fill="#C0A2FE" />} description="Know more about IEEE SB Telkom University by knowing its organization structure and departments.">
                                    <h2 className={`text-xs lg:text-sm text-black font-medium`}>
                                        Departements</h2>
                                </DropdownItem>
                                <DropdownItem href="#/FAQ" className="no-underline" startContent={<FaRegQuestionCircle size={29} fill="#C0A2FE" />} description="Frequently Asked Questions.">
                                    <h2 className={`text-xs lg:text-sm text-black flex flex-row items-center gap-2 font-medium`}>
                                        FAQ</h2>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <a href="#/News/All" className="text-xs lg:text-sm font-medium no-underline">News</a>
                        <a href="#/Achievements" className="text-xs lg:text-sm font-medium no-underline">Achievements</a>
                        <a href="https://www.ieee.org/membership/join/index.html" target="_blank" className="text-xs lg:text-sm font-medium no-underline">Membership</a>
                    </div>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end" className="flex sm:hidden">
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarMenu className={`flex flex-col text-left gap-[50px] text-black py-[40px] navHeightVar`}>
                <div className="flex flex-col gap-[1.5rem]">
                    <NavbarMenuItem>
                        <a href="/" className="text-[28px] font-[590] no-underline flex w-full pb-[3px]">Home</a>
                    </NavbarMenuItem>
                    <NavbarMenuItem>
                        <a href="#/News/All" className="text-[28px] font-[590] no-underline flex w-full py-[3px]">News</a>
                    </NavbarMenuItem>
                    <NavbarMenuItem>
                        <a href="#/Departments" className="text-[28px] font-[590] no-underline flex w-full pb-[3px]">Departements</a>
                    </NavbarMenuItem>
                    <NavbarMenuItem>
                        <a href="#/Achievements" className="text-[28px] font-[590] no-underline flex w-full py-[3px]">Achievements</a>
                    </NavbarMenuItem>
                    <NavbarMenuItem>
                        <a href="https://www.ieee.org/membership/join/index.html" target="_blank" className="text-[28px] font-[590] no-underline flex w-full py-[3px]">Membership</a>
                    </NavbarMenuItem>
                    <NavbarMenuItem>
                        <a href="#/FAQ" className="text-[28px] font-[590] no-underline flex w-full py-[3px]">FAQ</a>
                    </NavbarMenuItem>
                </div>
                <div className="gap-[0.5rem] flex flex-col">
                    <span className="opacity-50">Follow us</span>
                    <div>
                        <ul className="gap-[0.5rem] flex flex-col">
                            <li>
                                <a href="https://www.instagram.com/ieeetelkomuniv/" target="_blank" className="flex flex-row items-center gap-2 no-underline">
                                    <FaInstagram />
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="https://www.tiktok.com/@ieeetelkomuniv" target="_blank" className="flex flex-row items-center gap-2 no-underline">
                                    <FaTiktok />
                                    Tiktok
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/ieee-telkom-university-student-branch/mycompany/" target="_blank" className="flex flex-row items-center gap-2 no-underline">
                                    <FaLinkedin />
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </NavbarMenu>
        </Navbar>

    );
}