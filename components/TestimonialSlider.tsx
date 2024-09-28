import type { StaticImageData } from "next/image";
import Image from "next/image";
import { useRef, useState } from "react";
import { Star } from "react-feather";
import type { Swiper as SwiperType } from "swiper";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export interface SwiperWiper {
  author: string;
  avatar: StaticImageData;
  organization: string;
  rating: string;
  content: string;
}

interface TestimonialSliderProps {
  list: Array<SwiperWiper>;
}

export default function TestimonialSlider({ list }: TestimonialSliderProps) {
  SwiperCore.use([Pagination]);

  const [, setSwiper] = useState<SwiperType>();
  const paginationRef = useRef(null);

  return (
    <div className="reviews-carousel relative">
      <Swiper
        pagination={{
          type: "bullets",
          el: paginationRef.current,
          clickable: true,
          dynamicBullets: true,
        }}
        onSwiper={(swiper) => setSwiper(swiper)}
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        breakpoints={{
          992: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
      >
        {list.map((item, i) => (
          <SwiperSlide key={"feature-" + i}>
            <div className="review">
              <div className="review-author-avatar bg-gradient">
                <Image src={item.avatar} alt="" />
              </div>
              <h4 className="mb-2">{item.author}</h4>
              <p className="mb-4 text-[#666]">{item.organization}</p>
              <p>{item.content}</p>
              <div
                className={`review-rating mt-6 flex items-center justify-center space-x-2.5 ${item.rating}  `}
              >
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="relative flex justify-center">
        <div
          className="swiper-pagination reviews-carousel-pagination !bottom-0"
          style={{ width: "100%" }}
          ref={paginationRef}
        ></div>
      </div>
    </div>
  );
}
