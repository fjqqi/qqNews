import { Link } from "@inertiajs/react";
import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { SidebarMenu } from "./SidebarMenu";

const Sidebar = ({ categories }) => {
    const [isDropdownMenu, setIsDropdownMenu] = useState(false);
    const togleDropdown = () => {
        setIsDropdownMenu((prev) => !prev);
    };
    // console.log(isDropdownMenu);
    console.log(categories);
    return (
        <div className="absolute w-72 md:hidden min-h-screen p-4 bg-base-200 shadow-lg z-40">
            <div className="w-full flex items-center justify-center border-b-2 border-base-300 pb-4">
                <h1 className="font-bold text-xl">Menu</h1>
            </div>

            <ul className="w-full flex flex-col gap-3  py-4">
                <li>
                    <SidebarMenu name="Home" />
                </li>
                <li>
                    <SidebarMenu
                        name="category"
                        hasSubmenu={true}
                        subMenuContent={categories}
                    />
                </li>

                <li>
                    <SidebarMenu name="Home" hasSubmenu={true} />
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
