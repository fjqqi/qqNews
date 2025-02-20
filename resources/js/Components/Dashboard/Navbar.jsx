import { Bars3Icon } from "@heroicons/react/24/solid";
import { Link } from "@inertiajs/react";
import React from "react";

export const Navbar = ({ user }) => {
    const capitalizeFirstLetter = (str) => str[0].toUpperCase() + str.slice(1);

    return (
        <div className="navbar bg-base-100 px-8">
            <div className="flex-1">
            <Bars3Icon className="size-8 mr-2 md:hidden block"/>
                <Link className="font-bold text-xl">daisyUI</Link>
            </div>
            <div className="flex-none">
                <p className="mr-3">{capitalizeFirstLetter(user.name)}</p>
                <div className="dropdown dropdown-end">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        <li>
                            <a className="justify-between" href="/profile">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li>
                            <a>Settings</a>
                        </li>
                        <li>
                            <a>Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
