import { NewsListCard } from "@/Components/NewsListCard";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link } from "@inertiajs/react";

export default function Home({ news, categories }) {
    console.log(categories);

    return (
        <>
            <GuestLayout categories={categories}>
                <Head title="Home" />
                {/* <button className="btn">Featured News</button> */}

                <div className="flex md:flex-row flex-col gap-5 w-full">
                    <div className="hotline  flex">
                        <div className="relative grid md:h-[32rem] h-[18rem] max-w-lg md:min-w-[56rem] flex-col items-end justify-center overflow-hidden rounded-lg bg-white">
                            <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center">
                                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
                            </div>
                            <div className="relative  p-6 px-6 py-12 md:px-12">
                                <h2 className=" text-3xl font-medium text-white mb-5">
                                    How we design and code open-source projects?
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Id obcaecati, molestiae,
                                    quae deleniti expedita sequi voluptatibus
                                    fugiat esse illo,
                                </h2>
                                <div className="text-slate-300 flex justify-between">
                                    <h5 className=" text-xl font-semibold">
                                        Lewis Daniel
                                    </h5>
                                    <p>5 Minutes Ago</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="featured bg-white rounded-lg flex-grow p-4 max-w-full  flex flex-col gap-6 ">
                        <NewsListCard news={news.data} />
                    </div>
                </div>
            </GuestLayout>
        </>
    );
}
