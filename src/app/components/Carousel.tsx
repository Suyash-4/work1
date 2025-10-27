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
    <div className="customLayoutFixCarouselMainProperty w-full h-full md:py-10 lg:py-1 xl:py-4 greaterThanXL:py-10 2xl:py-5 overflow-hidden ">
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
            className="flex justify-center items-center h-full py-6 xl:py-3 "
          >
            <Image
              src={imageUrl}
              alt={`Slide ${index}`}
              width={170}
              height={180}
              className="customLayoutFixCarousel rounded-3xl grayscale object-cover md:w-25 md:h-25 lg:w-30 lg:h-30 2xl:w-40 2xl:h-40 customHover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
