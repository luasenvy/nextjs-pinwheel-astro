"use client";

import { parseInline } from "marked";
import Image from "next/image";
import React, { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import LoginBannerImage from "@/public/images/login-banner-bg.png";
import SignupCarouselImg1Image from "@/public/images/signup-carousel-img-1.png";

interface SigninSliderProps {
  title: string;
}

export default function SigninSlider({ title }: SigninSliderProps) {
  SwiperCore.use([Pagination]);

  const [swiper, setSwiper] = useState<SwiperType>();
  const paginationRef = useRef(null);

  return (
    <div className="auth-banner bg-gradient flex flex-col items-center justify-center py-16 lg:col-6 lg:block">
      <Image className="absolute left-0 top-0 h-full w-full" src={LoginBannerImage} alt="" />
      <div className="w-full text-center">
        {title.split("\\n").map((text, i) => (
          <h2 key={i} className="h3 text-white">
            {parseInline(text) as string}
          </h2>
        ))}

        <div className="auth-banner-carousel">
          <Swiper
            pagination={{
              type: "bullets",
              el: paginationRef.current,
              clickable: true,
              dynamicBullets: true,
            }}
            onSwiper={(swiper) => setSwiper(swiper)}
            // loop={true}
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
          >
            <SwiperSlide key={"feature-" + 0}>
              <Image
                width={667}
                height={557}
                className="mx-auto"
                src={SignupCarouselImg1Image}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide key={"feature-" + 1}>
              <Image
                width={667}
                height={557}
                className="mx-auto"
                src={SignupCarouselImg1Image}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide key={"feature-" + 2}>
              <Image
                width={667}
                height={557}
                className="mx-auto"
                src={SignupCarouselImg1Image}
                alt=""
              />
            </SwiperSlide>
          </Swiper>

          <div className="relative flex justify-center">
            <div className="pagination" style={{ width: "100%" }} ref={paginationRef}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
