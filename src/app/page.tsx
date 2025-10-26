"use client";

import { useState, useRef, useMemo, useEffect, ChangeEvent } from "react";
import HorizontalLine from "./components/HorizontalLine";

import Link from "next/link";
import Carousel from "./components/Carousel";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";

const initialImageUrls = Array(5).fill(
  "https://images.unsplash.com/photo-1707396171864-83b65a1edfcb?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=880"
);

const itemsPerSlide = 3;

const Page = () => {
  const [imageUrls, setImageUrls] = useState(initialImageUrls);
  const [currentSlide, setCurrentSlide] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    return () => {
      imageUrls.forEach((url) => {
        if (url.startsWith("blob:")) URL.revokeObjectURL(url);
      });
    };
  }, [imageUrls]);

  const slides = useMemo(
    () =>
      Array.from(
        { length: Math.ceil(imageUrls.length / itemsPerSlide) },
        (_, i) =>
          imageUrls.slice(i * itemsPerSlide, i * itemsPerSlide + itemsPerSlide)
      ),
    [imageUrls]
  );

  const maxSlides = slides.length;

  const handleNext = () =>
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlides - 1));
  const handlePrev = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

  /** 📂 Trigger hidden file input */
  const handleTriggerFileInput = () => fileInputRef.current?.click();

  /** 🖼️ Add new image to gallery */
  const handleAddImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file?.type.startsWith("image/")) return;

    const newImageUrl = URL.createObjectURL(file);
    setImageUrls((prev) => [...prev, newImageUrl]);
    e.target.value = "";
  };

  return (
    <>
      {/* Hidden File Input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleAddImage}
        accept="image/*"
        style={{ display: "none" }}
      />

      <div className="relative h-screen w-screen">
        <div className="h-full w-full bg-black px-23 py-15 flex items-center jusitfy-center">
          <div className="w-full h-full bg-linear-to-b from-[#272b30] to-[#1b1d21] pt-23 pb-25 pl-8 pr-15 rounded-3xl flex gap-15 items-center">
            {/* Left Section */}
            <div className="h-full bg-[#565758] p-5 flex-[1.1] rounded-3xl border border-[#96bee6]" />

            {/* Right Section */}
            <div className="h-full bg-transparent flex-1 flex flex-col justify-center items-center gap-5 pr-5">
              {/* Box 1 */}
              <Box1 />
              <HorizontalLine />
              {/* Box 2 */}
              <Box2
                handleTriggerFileInput={handleTriggerFileInput}
                handlePrev={handlePrev}
                handleNext={handleNext}
                currentSlide={currentSlide}
                maxSlides={maxSlides}
                slides={slides}
                itemsPerSlide={itemsPerSlide}
              />
              <HorizontalLine />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
