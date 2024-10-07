import { Navbar } from "@nextui-org/react";
import { NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import IEEEblack from "../../src/assets/IEEE-Black.png";
import { Toaster } from 'sonner'

export default function PublishingNav() {
    return (
        <>
            <Toaster richColors position="top-center" />
            <Navbar isBordered shouldHideOnScroll maxWidth="full" className={`px-[20px] sm:px-[calc(20px+70*(100vw-576px)/1024)] 2xl:px-[90px] 2xl:h-[100px] md:h-[calc(60px+40*(100vw-576px)/1024)] h-[60px] transition-all fixed`}>
                <NavbarBrand>
                    <a href="/DashboardNews">
                        <img src={IEEEblack} className="h-[37px] lg:h-[45px]" alt="" />
                    </a>
                </NavbarBrand>

                <NavbarContent justify="end">
                    <NavbarItem>
                        <div className="right-side flex gap-3">
                            <a href="/DashboardNews">
                                <Button color="default" radius="full">
                                    Cancel
                                </Button>
                            </a>

                            <Button color="primary" radius="full">
                                Publish
                            </Button>
                        </div>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </>

    );
}