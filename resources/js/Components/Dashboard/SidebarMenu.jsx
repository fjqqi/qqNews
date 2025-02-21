import { HeartIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";


export const SidebarMenu = ({ icon, name, href, hasSubmenu , subMenuOnclick, isSubmenu}) => {
    const capitalizeFirstLetter = (str) => str[0].toUpperCase() + str.slice(1);
    const { url } = usePage();
    const [isActive, setIsActive] = useState(false);
   
    useEffect(() => {
        // Normalize URLs to ensure they match
        const currentUrl = url.split('?')[0].replace(/\/$/, ''); // Remove trailing slash and ignore query params
        const menuHref = href ? `/${href}` : `/${name}`;
        const normalizedMenuHref = menuHref.replace(/\/$/, ''); // Remove trailing slash
    
        setIsActive(currentUrl === normalizedMenuHref);
    }, [url, href, name]);


    return (
        <>
            <div className="">
                <div className={`${isActive && 'bg-gray-800 text-white hover:bg-gray-600'} flex hover:bg-gray-300 duration-300 items-center px-4 py-4 justify-between`}>
                    <div className="flex items-center">
                        {icon}
                        <Link
                            href={href ? `/${href}` : `/${name}`}
                            className="text-base ml-4"
                        >
                            {capitalizeFirstLetter(name)}
                        </Link>
                    </div>

                    {hasSubmenu && (
                        <div 
                        className=""
                            onClick={subMenuOnclick}
                        >
               
                           <ChevronDownIcon className={`${isSubmenu && '-rotate-180'} duration-300  size-4`} />
                           </div>

                    )}
                </div>

                <div className={` ${isSubmenu ? 'max-h-96 duration-500' : 'max-h-0 duration-300'} overflow-hidden`}>
            
                    <Link className="text-sm hover:font-bold duration-200 items-center ml-6 flex py-2">
                        <div className="h-1.5 w-1.5 mx-3 bg-red-400 rounded-full"></div>
                        Haha
                    </Link>
                </div>
            </div>
        </>
    );
};
