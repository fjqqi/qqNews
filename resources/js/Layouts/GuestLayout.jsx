import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import { motion } from "motion/react"

export default function GuestLayout({ children }) {
    return (
        <>
            <div className="flex flex-col">
                <div className="navbar bg-white md:px-24 md:py-5">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost lg:hidden"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                            >
                                <li>
                                    <a>Item 1</a>
                                </li>
                                <li>
                                    <a>Parent</a>
                                    <ul className="p-2">
                                        <li>
                                            <a>Submenu 1</a>
                                        </li>
                                        <li>
                                            <a>Submenu 2</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a>Item 3</a>
                                </li>
                            </ul>
                        </div>
                        <motion.div
                         whileHover={{ scale: 1.1 }}
                         whileTap={{ scale: 0.95 }}
                         onHoverStart={() => console.log('hover started!')}
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
                                <a>Item 1</a>
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
                    <div className="navbar-end">
                        <div className="form-control">
                            <input
                                type="text"
                                placeholder="Search"
                                className="input input-bordered w-24 md:w-auto"
                            />
                        </div>
                    </div>

        
                </div>

                <div className="bg-gray-500 text-white py-2  px-3 font-bold">
                <ul className="flex gap-10 w-full justify-center">
    {Array.from({ length: 10 }).map((_, i) => (
        <li className="" key={i}><Link>Item {i + 1}</Link></li>
    ))}
</ul>

                </div>
            </div>
            <div className="min-h-screen px-5 pt-5 bg-slate-100 md:px-24 min-w-full">
                {children}
            </div>
        </>
    );
}
