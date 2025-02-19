import { NewsListCard } from "@/Components/NewsListCard";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link } from "@inertiajs/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { HeadlineCard } from "@/Components/Homepage/HeadlineCard";
import Chevron from "@/Components/Chevron";

export default function Home({ news, categories, headlines }) {
    console.log(headlines);

    return (
        <>
            <GuestLayout categories={categories}>
                <Head title="Home" />
                {/* <button className="btn">Featured News</button> */}
                <div className="flex md:flex-row flex-col gap-5 w-full">
                    <div className="headline  md:h-[32rem] h-[18rem] max-w-lg md:min-w-[56rem] flex">
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            spaceBetween={10}
                            navigation={{
                                nextEl: ".custom-next", // Custom class for next button
                                prevEl: ".custom-prev", // Custom class for previous button
                            }}
                            slidesPerView={1}
                            autoplay={{
                                delay: 3000, // 3 seconds delay between slides
                                disableOnInteraction: false, // Continue autoplay after user interactions
                            }}
                            loop={true}
                            // onSlideChange={() => console.log("slide change")}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            {headlines.map((headline, i) => {
                                return (
                                    <SwiperSlide key={i}>
                                        <HeadlineCard headline={headline} />
                                    </SwiperSlide>
                                );
                            })}

                            <div className="custom-next absolute top-1/2 right-1  opacity-5 hover:opacity-60 duration-300 transform -translate-y-1/2 h-8 w-8 text-white rounded-full md:w-16 md:h-16 flex items-center justify-center z-10 cursor-pointer">
                               <Chevron arrow='right' size='2'/>

                            </div>
                            <div className="custom-prev absolute top-1/2 left-1 opacity-5 hover:opacity-60 duration-300 transform -translate-y-1/2 h-8 w-8 text-white rounded-full md:w-16 md:h-16 flex items-center justify-center z-10 cursor-pointer">
                                <Chevron arrow='left'/>
                            </div>
                        </Swiper>
                    </div>

                    <div className="featured card bg-base-100 rounded-lg flex-grow p-4 max-w-full  flex flex-col gap-6 ">
                        <NewsListCard news={news.data} />
                    </div>
                </div>
            </GuestLayout>
        </>
    );
}
