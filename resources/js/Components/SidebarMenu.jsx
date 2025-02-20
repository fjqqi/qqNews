import react from "@heroicons/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Link } from "@inertiajs/react";
import { useState } from "react";
const capitalizeFirstLetter = (str) => str[0].toUpperCase() + str.slice(1);

export const SidebarMenu = ({ name, hasSubmenu, subMenuContent }) => {
    const [isDropdownMenu, setIsDropdownMenu] = useState(false);
    const togleDropdown = () => {
        setIsDropdownMenu((prev) => !prev);
    };
    return (
        <>
            <div
                href="#"
                className="text-base flex items-center cursor-pointer justify-between pb-2 border-b-2 border-b-base-300"
                onClick={togleDropdown}
            >
                {!hasSubmenu && (
                    <Link href={`/${name}`}  className="font-semibold hover:underline ">
                    {capitalizeFirstLetter(name)}
                </Link>
                )}
                {hasSubmenu && subMenuContent && (
                   <>
                    <span className="font-semibold hover:underline ">
                    {capitalizeFirstLetter(name)}
                </span>
                
                    <ChevronDownIcon
                        className={`size-4 duration-300 ${
                            isDropdownMenu && "-rotate-180"
                        }`}
                    /></>
                )}
            </div>

            <div
                className={`overflow-hidden transition-[max-height] ease-out ${
                    isDropdownMenu
                        ? "max-h-96 opacity-100 duration-500"
                        : "max-h-0 duration-300"
                }`}
            >
                {(subMenuContent || []).map((menu, i) => (
                    <div className="mt-1 px-2" key={i}>
                        <Link className="hover:font-bold" href={route('category.show', {id: menu.id})}>
                            {capitalizeFirstLetter(menu.name)}
                        </Link>
                    </div>
                ))}
            </div>

            {/* {isDropdownMenu && (
                <div className="block overflow-hidden py-1 pl-2 ">
                    {subMenuContent.map((menu, i) => (
                        <div className="mt-1 " key={i}>
                            <Link className="hover:font-bold">
                            {capitalizeFirstLetter(menu.name)}
                            </Link>
                        </div>
                    ))}
                </div>
            )} */}
        </>
    );
};
