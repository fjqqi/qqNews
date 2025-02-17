import { Link } from "@inertiajs/react";
import { formatDistanceToNow } from "date-fns";
import React from "react";

const isNews = (news) => {
    return news.map((data, i) => {
        return (
            <div key={i}>
                <div className=" flex">
                    <div>
                        <img
                            // src={data.image}
                            className="bg-red-50 w-[10rem] h-[6rem] rounded-md"
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

                        <div className="flex gap-5 items-center text-xs md:text-sm">
                            <div className="flex items-center gap-2">
                                <img
                                    // src={data.image}
                                    alt=""
                                    className="md:h-6 md:w-6 h-4 w-4 rounded-full bg-yellow-300"
                                />
                                <p className="">{data.user.name}</p>
                            </div>
                            <p>•</p>
                            <p>{formatDistanceToNow(new Date(data.created_at), { addSuffix: true })}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    });
};

const noNews = () => {
    return<>
        <div>No news to show</div>
    </>
}

export const NewsListCard = ({ news }) => {
    // Check if news array is empty
    return news && news.length > 0 ? isNews(news) : noNews();
};

