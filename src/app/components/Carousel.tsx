"use client";

import Image from "next/image";

interface CarouselProps {
  currentSlide: number;
  slides: string[][];
  itemsPerSlide: number;
}

const Carousel = ({ currentSlide, slides, itemsPerSlide }: CarouselProps) => {
  return (
    <div className="py-4 px-4 rounded-3xl overflow-hidden flex-1">
      <div
        className="flex h-full transition-all duration-500 "
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className=" shrink-0 w-full h-full flex gap-5 relative bg-cover bg-center bg-no-repeat"
          >
            {[...Array(itemsPerSlide)].map((_, itemIndex) => {
              const imageUrl = slide[itemIndex];

              if (!imageUrl) {
                return <div key={itemIndex} className="w-[180px] h-[170px]" />;
              }
              return (
                <Image
                  key={itemIndex}
                  src={imageUrl}
                  alt="Some Image"
                  width={180}
                  height={170}
                  className="customHover rounded-3xl grayscale  "
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
