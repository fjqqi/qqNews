import { Link } from "@inertiajs/react";
import React from "react";

export const HeadlineCard = ({ headline }) => {
    return (
        <Link
            href={route("news.show", {id: headline.id})}
        >
            <div className="relative grid headline-items  headline  md:h-[32rem] h-[18rem] max-w-lg md:min-w-[56rem] flex-col items-end justify overflow-hidden rounded-lg bg-white">
                <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center">
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
                </div>
                <div className="relative   px-5 md:px-12 py-4 md:py-12 ">
                    <h2 className=" md:text-3xl text-xl mb-2 font-medium text-white md:mb-5">
                        {headline.title}
                    </h2>
                    <div className="text-slate-300 flex justify-between">
                        <h5 className=" md:text-xl font-semibold">{headline.user.name}</h5>
                        {/* <p>{headline.created_at}</p> */}
                    </div>
                </div>
            </div>
        </Link>
    );
};
