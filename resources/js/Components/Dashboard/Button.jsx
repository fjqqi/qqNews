import { Link, usePage } from "@inertiajs/react";
import React from "react";

export const Button = ({text, link}) => {
    const {url} = usePage()
    console.log(url)
    return (
        <Link className="ps-3 flex items-center" href={`${link ? link : url } `}>
            <button className="h-full bg-teal-800 rounded-lg text-sm text-white px-3">
                {text}
            </button>
        </Link>
    );
};
