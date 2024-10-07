import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import IEEEblack from "../../src/assets/IEEE-Black.png";
import { useState } from "react";

export default function DashboardNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        {
            name: "News",
            url: "/DashboardNews",
        },
        {
            name: "Achievements",
            url: "/DashboardAchievements"
        },
        {
            name: "Recent Activity",
            url: "/DashboardRecentActivities",
        },
    ];

    return (
        <Navbar isBordered shouldHideOnScroll maxWidth="full" onMenuOpenChange={setIsMenuOpen} className="w-full flex lg:hidden !px-6">
            <NavbarBrand>
                    <a href="/">
                        <img src={IEEEblack} className="h-[37px] lg:h-[45px]" alt="" />
                    </a>
                </NavbarBrand>
            <NavbarContent className="!justify-end">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="lg:hidden"
                />
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color="foreground"
                            className="w-full"
                            href={item.url}
                            size="lg"
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
                <NavbarMenuItem>
                <Link
                            color="danger"
                            className="w-full"
                            href="#"
                            size="lg"
                        >
                            Logout
                        </Link>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
}
