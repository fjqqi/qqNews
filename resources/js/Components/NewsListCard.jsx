import { Link } from "@inertiajs/react";
import { formatDistanceToNow } from "date-fns";
import React from "react";

const isNews = (news) => {
    return news.map((data, i) => {
        return (
            <div key={i}>
                <div className=" flex">
                    <div className="flex-shrink-0">
                        <img
                            src={data.image}
                            className="bg-red-50 w-28 h-20 md:w-[8rem] md:h-[6rem] rounded-md object-cover"
                            alt=""
                        />
                    </div>

                    <div className="max-w-full ml-4 flex flex-col justify-between pb-2">
                        <Link
                            href={`/news/${data.id}`}
                            className="font-semibold text-sm md:text-md"
                        >
                            {data.title}
                        </Link>

                        <div className="flex flex-col md:flex-row gap-1 md:mt-0 mt-2 md:gap-5 md:items-center text-xs md:text-sm">
                            <div className="flex items-center gap-2  md:mt-0">
                                <div className="flex-shrink-0">
                                <img
                                    // src={data.image}
                                    alt=""
                                    className="md:h-6 md:w-6 h-4 w-4 rounded-full bg-yellow-300"
                                />
                                </div>
                                <p className="">{data.user.name}</p>
                            </div>

                            <p className="hidden md:flex">•</p>
                            <p className="md:mt-0 ">
                                {formatDistanceToNow(
                                    new Date(data.created_at),
                                    { addSuffix: true }
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    });
};

const noNews = () => {
    return (
        <>
            <div>No news to show</div>
        </>
    );
};

export const NewsListCard = ({ news }) => {
    // Check if news array is empty
    return news && news.length > 0 ? isNews(news) : noNews();
};
