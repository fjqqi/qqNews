import { NewsListCard } from "@/Components/NewsListCard";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link } from "@inertiajs/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

import { HeadlineCard } from "@/Components/Homepage/HeadlineCard";

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
                    modules={[Autoplay]} 
                    spaceBetween={10}
                    slidesPerView={1} autoplay={{
                        delay: 3000, // 3 seconds delay between slides
                        disableOnInteraction: false, // Continue autoplay after user interactions
                      }}
                      loop={true}
                      
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {headlines.map((headline, i) => {
                        return(
                            <SwiperSlide>
                            <HeadlineCard headline={headline}/>
                        </SwiperSlide>
                        )
                    })}
                    
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
