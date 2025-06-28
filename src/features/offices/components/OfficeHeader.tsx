'use client';

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";


export default function OfficeHeader({ thumbnails }: { thumbnails: string[] }) {
    return (
        <section id="Gallery" className="-mb-[50px]">
            <Swiper
                direction="horizontal"
                className="w-full">

                <div className="swiper-wrapper">

                    {thumbnails.map((image, index) =>
                        <SwiperSlide key={index} className="!w-fit">
                            <div className="w-[700px] h-[550px] overflow-hidden">
                                <Image
                                    width={1920}
                                    height={1080}
                                    src={image}
                                    className="w-full h-full object-cover"
                                    alt="thumbnail"
                                />
                            </div>
                        </SwiperSlide>
                    )}

                </div>
            </Swiper>
        </section>
    );
}