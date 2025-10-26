"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface CarouselProps {
  slides: string[][];
}

const Carousel = ({ slides }: CarouselProps) => {
  const flatImages = slides.flat();

  return (
    <div className="w-full h-full py-10 xl:py-6 overflow-hidden ">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        spaceBetween={15}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1440: { slidesPerView: 4 },
        }}
        className="w-full h-full "
      >
        {flatImages.map((imageUrl, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center h-full py-6 xl:py-4 "
          >
            <Image
              src={imageUrl}
              alt={`Slide ${index}`}
              width={170}
              height={180}
              className="rounded-3xl grayscale object-cover w-40 h-40 customHover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
