import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link } from "@inertiajs/react";

export default function Home({ news }) {
    console.log(news.data);

    return (
        <>
            <GuestLayout>
                <Head title="Home" />
                {/* <button className="btn">Featured News</button> */}

                <div className="flex md:flex-row flex-col gap-5 w-full">

                    <div className="hotline  flex">
                        <div class="relative grid md:h-[32rem] h-[18rem] max-w-lg md:max-w-[56rem] flex-col items-end justify-center overflow-hidden rounded-lg bg-white">
                            <div class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center">
                                <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
                            </div>
                            <div class="relative  p-6 px-6 py-12 md:px-12">
                                <h2 class=" text-3xl font-medium text-white mb-5">
                                    How we design and code open-source projects? Lorem ipsum dolor sit amet consectetur adipisicing elit. Id obcaecati, molestiae, quae deleniti expedita sequi voluptatibus fugiat esse illo, 
                                </h2>
                                <div className="text-slate-300 flex justify-between">
                                    <h5 class=" text-xl font-semibold">
                                        Lewis Daniel
                                    </h5>
                                    <p>5 Minutes Ago</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="featured bg-white rounded-lg flex-grow p-2 ">
                        <p className="w-full">nsns</p>

                    </div>

                </div>
            </GuestLayout>
        </>
    );
}
