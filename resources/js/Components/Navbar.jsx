import { Link, usePage } from "@inertiajs/react";
import { motion } from "motion/react";
export const Navbar = ({
    isDarkModeOn,
    toggleSwitch,
    categories,
    toggleSidebar,
    isSidebar,
}) => {
    const capitalizeFirstLetter = (str) => str[0].toUpperCase() + str.slice(1);
    const { url } = usePage();

    return (
        <div className={``}>
            <div
                className={`${isDarkModeOn ? "bg-gray-900" : "bg-white"} ${
                    isSidebar ? "" : ""
                } navbar md:px-24 md:py-5`}
            >
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            className={`btn z-50 btn-ghost lg:hidden ${
                                isSidebar ? "" : ""
                            }`}
                            onClick={toggleSidebar}
                        >
                            <motion.svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`h-6 w-6 duration-500 z-50 ${
                                    isSidebar ? "text-red-500" : ""
                                }`}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                {/* Top line */}
                                <motion.path
                                    animate={{
                                        d: isSidebar
                                            ? "M6 6L18 18" // Diagonal line for "X"
                                            : "M4 6h16", // Horizontal line for hamburger
                                    }}
                                    transition={{ duration: 0.2 }}
                                />
                                {/* Middle line */}
                                <motion.path
                                    animate={{
                                        opacity: isSidebar ? 0 : 1, // Hide middle line when sidebar is open
                                    }}
                                    d="M4 12h16"
                                    transition={{ duration: 0.2 }}
                                />
                                {/* Bottom line */}
                                <motion.path
                                    animate={{
                                        d: isSidebar
                                            ? "M6 18L18 6" // Diagonal line for "X"
                                            : "M4 18h16", // Horizontal line for hamburger
                                    }}
                                    transition={{ duration: 0.2 }}
                                />
                            </motion.svg>
                        </div>
                        <ul tabIndex={0}></ul>
                    </div>

                    <div className={`${isSidebar && 'hidden md:flex'} block duration-300`}>
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
                    className={`${
                        isSidebar && "opacity-0 md:opacity-100 duration-300"
                    } navbar-end`}
                >
                    <div className="form-control hidden md:flex">
                        <input
                            type="text"
                            placeholder="Search"
                            className="input input-bordered w-24 md:w-auto mr-4"
                        />
                    </div>

                    <div className="">
                        <button
                            className={`${
                                isDarkModeOn
                                    ? "justify-end bg-white"
                                    : "justify-start bg-black"
                            } flex duration-300 items-center   rounded-full px-1 md:px-2 toggle-container h-6 w-10 md:w-16 md:h-8`}
                            onClick={toggleSwitch}
                        >
                            <motion.div
                                className="toggle-handle w-4 h-4 md:w-5 md:h-5 bg-red-400 rounded-full"
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
    );
};
