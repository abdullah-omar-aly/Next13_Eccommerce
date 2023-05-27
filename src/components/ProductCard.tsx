import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { HeartIcon } from '@heroicons/react/24/outline';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from 'next/image';
const ProductCard = () => {
    return (
        <div>
            <div className='rounded-2xl overflow-hidden h-full w-full relative'  >
                <button className='absolute right-3 top-3 z-20 text-white' >
                    <HeartIcon className="h-[30px] w-[30px] bg-semi-transparent rounded-full p-1" />
                </button>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true
                    }}
                    // navigation={true}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper h-full w-full"
                >
                    <SwiperSlide>
                        <div className='h-80 w-full'>
                            {/* <Image src={} /> */}
                            <img className='w-full h-full object-cover' src="https://eg-rv.homzmart.net/mageplaza/bannerslider/banner/image/s/l/slider_dt-en_copy_4_23_.jpg" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-80 w-full'>
                            {/* <Image src={} /> */}
                            <img className='w-full h-full object-cover' src="https://eg-rv.homzmart.net/mageplaza/bannerslider/banner/image/s/l/slider_dt-en_copy_4_23_.jpg" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-80 w-full'>
                            {/* <Image src={} /> */}
                            <img className='w-full h-full object-cover' src="https://eg-rv.homzmart.net/mageplaza/bannerslider/banner/image/s/l/slider_dt-en_copy_4_23_.jpg" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-80 w-full'>
                            {/* <Image src={} /> */}
                            <img className='w-full h-full object-cover' src="https://eg-rv.homzmart.net/mageplaza/bannerslider/banner/image/s/l/slider_dt-en_copy_4_23_.jpg" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-80 w-full'>
                            {/* <Image src={} /> */}
                            <img className='w-full h-full object-cover' src="https://eg-rv.homzmart.net/mageplaza/bannerslider/banner/image/s/l/slider_dt-en_copy_4_23_.jpg" />
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
            <div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default ProductCard