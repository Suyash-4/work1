"use client";

import { useState, useRef, useMemo, useEffect, ChangeEvent } from "react";
import HorizontalLine from "./components/HorizontalLine";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";

const initialImageUrls = Array(5).fill(
  "https://images.unsplash.com/photo-1707396171864-83b65a1edfcb?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=880"
);

const Page = () => {
  const [imageUrls, setImageUrls] = useState(initialImageUrls);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleTriggerFileInput = () => fileInputRef.current?.click();

  const itemsPerSlide = 3;

  const slides = useMemo(
    () =>
      Array.from(
        { length: Math.ceil(imageUrls.length / itemsPerSlide) },
        (_, i) =>
          imageUrls.slice(i * itemsPerSlide, i * itemsPerSlide + itemsPerSlide)
      ),
    [imageUrls]
  );

  const handleAddImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file?.type.startsWith("image/")) return;
    const newImageUrl = URL.createObjectURL(file);
    setImageUrls((prev) => [...prev, newImageUrl]);
    e.target.value = "";
  };
  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleAddImage}
        accept="image/*"
        style={{ display: "none" }}
      />

      <div className="relative h-screen w-screen">
        <div className="h-full w-full bg-black px-10 py-10 xl:px-23 xl:py-15 flex items-center justify-center">
          {/* Boxes Container */}
          <div className="relative grid w-full h-full bg-linear-to-b from-[#272b30] to-[#1b1d21] p-10 xl:pt-15 xl:pb-25 xl:pl-8 xl:pr-15 rounded-3xl grid-rows-4 grid-cols-2 xl:grid-cols-4 gap-5 xl:gap-10   ">
            {/* Left Section, TOp Section */}
            <div className="col-span-2 row-span-2 xl:row-span-4 h-full w-full bg-[#565758] p-5 rounded-3xl border border-[#96bee6]" />
            {/* Right Section, Bottom Section  */}
            <div className="col-span-2 row-span-2 xl:row-span-4 h-full w-full flex xl:flex-col justify-center items-center gap-5 ">
              <Box1 />
              <div className="hidden w-full xl:flex justify-center">
                <HorizontalLine />
              </div>
              <Box2
                handleTriggerFileInput={handleTriggerFileInput}
                slides={slides}
              />
              <div className="hidden w-full xl:flex justify-center">
                <HorizontalLine />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
