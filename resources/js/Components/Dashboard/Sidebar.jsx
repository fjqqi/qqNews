import {
    HeartIcon,
    AdjustmentsVerticalIcon,
    UserIcon,
    NewspaperIcon,
} from "@heroicons/react/24/outline";
import { Link, usePage } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import { SidebarMenu } from "./SidebarMenu";
import { motion } from "motion/react";

export const Sidebar = () => {
    const [isSubmenu, setIsSubmenu] = useState(false);
    const { url } = usePage();
    console.log(url);

    //DarkMode Config
    const [theme, setTheme] = useState("light");
    useEffect(() => {
        // Check localStorage for a saved theme
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        setIsDarkModeOn(savedTheme === "dark");
        document.documentElement.setAttribute("data-theme", savedTheme);
    }, []);

    const capitalizeFirstLetter = (str) => str[0].toUpperCase() + str.slice(1);

    // console.log(url);

    //Dark Mode Function
    const [isDarkModeOn, setIsDarkModeOn] = useState(false);
    function toggleSwitch() {
        const newTheme = isDarkModeOn ? "light" : "dark";
        setIsDarkModeOn(!isDarkModeOn);
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    }

    const toggleSubmenu = () => {
        setIsSubmenu((prevState) => !prevState); // Toggle the state
    };
    console.log(isSubmenu);
    return (
        <>
            <div className="md:-ml-0 -ml-80 w-72 bg-base-300 text-base-content flex flex-col ">
                <div className="w-full justify-center items-center flex py-4">
                    <Link href="/" className="text-2xl  font-bold">
                        qqNews
                    </Link>
                </div>
                <div className="px-5">
                    <div className=" border-base-200  border-b-2  w-full"></div>
                </div>
                <div className="menyu cursor-pointer">
                    <SidebarMenu
                        name="dashboard"
                        href="dashboard"
                        hasSubmenu={true}
                        subMenuOnclick={toggleSubmenu}
                        icon={<HeartIcon className="size-5" />}
                        isSubmenu={isSubmenu}
                        isActive={true}
                    />
                    <SidebarMenu
                        name="profile"
                        icon={<UserIcon className="size-5" />}
                    />
                    <SidebarMenu
                        name="posts"
                        icon={<NewspaperIcon className="size-5" />}
                    />
                </div>
                <div className="p-4 flex items-center justify-between">
                    Dark Mode
                    <div className="">
                        <button
                            className={`${
                                isDarkModeOn
                                    ? "justify-end bg-white"
                                    : "justify-start bg-black"
                            } flex duration-300 items-center   rounded-full px-1 md:px-1 toggle-container h-6 w-10 md:w-10 md:h-6`}
                            onClick={toggleSwitch}
                        >
                            <motion.div
                                className="toggle-handle w-4 h-4 md:w-4 md:h-4 bg-red-400 rounded-full"
                                layout
                                transition={{
                                    // type: "spring",
                                    visualDuration: 0.5,
                                    bounce: 0.2,
                                }}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
