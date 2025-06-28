'use client';

import CityCard from "../components/CityCard";
import { cities } from "../data/cities.mock";
import { Swiper, SwiperSlide } from "swiper/react";

export default function CitiesSection() {
    return (
        <section id="Cities" className="flex flex-col gap-[30px] mt-[100px]">
            <div className="w-full max-w-[1130px] mx-auto flex items-center justify-between">
                <h2 className="font-bold text-[32px] leading-[48px] text-nowrap">
                    You Can Choose <br />
                    Our Favorite Cities
                </h2>
                <a
                    href="#"
                    className="rounded-full py-3 px-5 bg-white font-bold"
                >
                    Explore All City
                </a>
            </div>
            <Swiper
                spaceBetween={20}
                slidesOffsetAfter={128}
                slidesOffsetBefore={128}
                slidesPerView="auto"
                direction="horizontal"
                className="w-full"
            >
                {cities.map((city) => (
                    <SwiperSlide key={city.id} className="!w-[230px] shrink-0">
                        <CityCard city={city} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section >
    );
}