import ApplicationLogo from "@/Components/ApplicationLogo";
import { Footer } from "@/Components/Footer";
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
            {isSidebar && <Sidebar categories={categories} />}

            <div
                className={`flex flex-col z-10  ${
                    isSidebar ? "ml-72 md:ml-0 duration-500" : ""
                }`}
            >
                <div
                    className={`${
                        isDarkModeOn ? "bg-gray-900" : "bg-white"
                    } navbar md:px-24 md:py-5 `}
                >
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div
                                className="btn z-50 btn-ghost lg:hidden"
                                onClick={toggleSidebar}
                            >
                                <motion.svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    {/* Animate the hamburger menu to close icon */}
                                    <motion.path
                                        initial={{
                                            d: "M4 6h16M4 12h16M4 18h16",
                                        }}
                                        animate={{
                                            d: isSidebar
                                                ? "M6 18L18 6M6 6l12 12" // Close icon (X)
                                                : "M4 6h16M4 12h16M4 18h16", // Hamburger menu
                                        }}
                                        transition={{ duration: 0.2 }}
                                    />
                                </motion.svg>
                            </div>
                            <ul tabIndex={0}></ul>
                        </div>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onHoverStart={() => console.log("hover started!")}
                        >
                            <Link
                                href={"/"}
                                className=" text-xl md:text-2xl font-extrabold"
                            >
                                qqNews
                            </Link>
                        </motion.div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <Link
                                    href="/"
                                    className={
                                        url === "/" ? "font-bold underline" : ""
                                    }
                                >
                                    Home
                                </Link>
                            </li>

                            <li className="">
                                <Link
                                    href="/categories"
                                    className={
                                        url === "/categories"
                                            ? "font-bold underline"
                                            : ""
                                    }
                                >
                                    Categories
                                </Link>
                            </li>

                            <li>
                                <details>
                                    <summary>Parent</summary>
                                    <ul className="p-2">
                                        <li>
                                            <a>Submenu 1</a>
                                        </li>
                                        <li>
                                            <a>Submenu 2</a>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <a>Item 3</a>
                            </li>
                        </ul>
                    </div>
                    <div
                        className={`navbar-end   ${
                            isSidebar ? "ml-72 md:ml-0 duration-500" : ""
                        }`}
                    >
                        <div className="form-control hidden md:flex">
                            <input
                                type="text"
                                placeholder="Search"
                                className="input input-bordered w-24 md:w-auto"
                            />
                        </div>

                        <button
                            className={`${
                                isDarkModeOn
                                    ? "justify-end bg-white"
                                    : "justify-start bg-black"
                            } flex duration-300 items-center  rounded-full px-1 md:px-2 toggle-container h-6 w-10 md:w-16 md:h-8  ml-3`}
                            onClick={toggleSwitch}
                        >
                            <motion.div
                                className="toggle-handle w-4 h-4 md:w-5 md:h-5 bg-red-400 rounded-full"
                                layout
                                transition={{
                                    type: "spring",
                                    visualDuration: 0.5,
                                    bounce: 0.2,
                                }}
                            />
                        </button>
                    </div>
                </div>

                <div className="bg-gray-500 text-white py-2 md:flex hidden px-3 font-bold">
                    <ul className="flex gap-10 w-full justify-center">
                        {categories.map((category) => (
                            <Link
                                href={route("category.show", {
                                    id: category.id,
                                })}
                                key={category.id}
                            >
                                {capitalizeFirstLetter(category.name)}
                            </Link>
                        ))}

                        {/* {Array.from({ length: 10 }).map((_, i) => (
                            <p>Test</p>
                        ))} */}
                    </ul>
                </div>
            </div>

            {/* <div className="relative bg-white">
                <div className="absolute px-6">
                    <ul>
                        <li>Home</li>
                        <li>Categories</li>
                    </ul>
                </div>
            </div> */}

            <div
                className={`${isDarkModeOn ? "bg-gray-950 " : "bg-slate-100"} ${
                    isSidebar
                        ? "ml-72 cursor-not-allowed max-h-screen max-w-screen-md overflow-hidden md:ml-0"
                        : ""
                } min-h-screen px-5 pt-5 pb-5  duration-500 md:px-24 min-w-full overflow-hidden`}
            >
                <div> {children}</div>
            </div>

            {!isSidebar && <Footer />}
        </>
    );
}
