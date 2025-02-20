import { Link } from "@inertiajs/react";
import React from "react";

function Pagination({links, onPageChange}) {
    return (
        <div className="join rounded-md">
            {links.map((link) =>
                link.url ? (
                    <Link
                        key={link.label}
                        href={link.url}
                        className={`join-item rounded-md btn btn-md ${
                            link.active
                                ? "bg-blue-500 text-white"
                                : "text-gray-500"
                        }`}
                    >
                        {link.label
                            .replace("&laquo;", "")
                            .replace("&raquo;", "")
                            .replace("Previous", "Prev")
                            .trim()}
                    </Link>
                ) : (
                    <span
                        key={link.label}
                        href={link.url}
                        className="text-slate-300 h-10 bg-black"
                    ></span>
                )
            )}
        </div>
    );
}

export default Pagination;
