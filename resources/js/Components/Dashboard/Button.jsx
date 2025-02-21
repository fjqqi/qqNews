import { Link, usePage } from "@inertiajs/react";
import React from "react";

export const Button = ({text, link, icon}) => {
    const {url} = usePage()
    console.log(url)
    return (
        <Link className="ps-3 flex items-center" href={`${link ? link : url }`}>

            <button className="h-full bg-teal-800 hover:bg-base-content duration-300 flex items-center justify-center rounded-lg text-sm text-white px-3">
            {icon && (
                <>
                    {icon}
                </>
            )}

                <span className={icon && 'ml-2'}>
                {text}
                </span>
            </button>
        </Link>
    );
};
