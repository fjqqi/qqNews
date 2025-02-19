import ApplicationLogo from "@/Components/ApplicationLogo";
import { Footer } from "@/Components/Footer";
import { Navbar } from "@/Components/Navbar";
import NavLink from "@/Components/NavLink";
import Sidebar from "@/Components/Sidebar";
import { Link, usePage } from "@inertiajs/react";
import { motion } from "motion/react";

import { useEffect, useState } from "react";

export default function GuestLayout({ children, categories }) {
    const [theme, setTheme] = useState("light");
    useEffect(() => {
        // Check localStorage for a saved theme
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        setIsDarkModeOn(savedTheme === "dark");
        document.documentElement.setAttribute("data-theme", savedTheme);
    }, []);

    const capitalizeFirstLetter = (str) => str[0].toUpperCase() + str.slice(1);
    const { url } = usePage();
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

    //Sidebar Function
    const [isSidebar, setIsSidebar] = useState(false);
    function toggleSidebar() {
        setIsSidebar(!isSidebar);
    }

    return (
        <>
            <div className={`${
                            isSidebar && "max-h-screen overflow-hidden "
                        } `}>
                <div
                    className={` ${isSidebar ? "ml-0" : "-ml-72"} duration-500`}
                >
                    <Sidebar categories={categories} />
                </div>

                {/* <div className={`fixed inset-0 bg-black z-30 bg-opacity-30 ${isSidebar ? 'block' : 'hidden'}`}></div> */}

                <div
                    className={`${
                        isSidebar ? "ml-72 md:ml-0 min-h-screen" : "ml-0"
                    } duration-500`}
                >
                    <Navbar
                        isDarkModeOn={isDarkModeOn}
                        toggleSwitch={toggleSwitch}
                        categories={categories}
                        toggleSidebar={toggleSidebar}
                        isSidebar={isSidebar}
                    />
                    <div
                        className={`${
                            isDarkModeOn ? "bg-gray-950 " : "bg-slate-100"
                        } min-h-screen px-5 pt-5 pb-5   duration-500 md:px-24 min-w-[100vw] overflow-hidden`}
                    >
                        <div className=""> {children}</div>
                    </div>
                    {!isSidebar && <Footer />}
                </div>
            </div>
        </>
    );
}
