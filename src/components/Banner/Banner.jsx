import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export const Banner = () => {
    return (
        <div className="m-auto w-[80%]" style={{marginTop: '60px'}}>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                Autoplay
            >
                <SwiperSlide>
                    <div className="relative">
                        <div className="absolute bottom-[20px] right-[200px]">
                            <button className="bg-[#f3ea28] px-16 py-3 rounded-md font-bold hover:bg-gradient-to-r from-cyan-500 to-blue-500 duration-200 ease-in-out">
                                    ĐẶT VÉ NGAY
                                    </button>
                                </div>
                        <img className="w-full h-full " src="public/image/lat-mat-7.webp" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="relative">
                        <div className="absolute bottom-[20px] right-[200px]">
                            <button className="bg-[#f3ea28] px-16 py-3 rounded-md font-bold hover:bg-gradient-to-r from-cyan-500 to-blue-500 duration-200 ease-in-out">
                                    ĐẶT VÉ NGAY
                                    </button>
                                </div>
                        <img className="w-full h-full " src="public/image/1215x365.webp" alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
