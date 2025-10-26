import React from "react";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";
import { PiQuestion } from "react-icons/pi";
import { BsFillGrid3X2GapFill } from "react-icons/bs";
import Link from "next/link";
import Carousel from "./Carousel";

const Box2 = (props) => {
  const handleTriggerFileInput = props.handleTriggerFileInput;
  const handlePrev = props.handlePrev;
  const handleNext = props.handleNext;
  const currentSlide = props.currentSlide;
  const maxSlides = props.maxSlides;
  const slides = props.slides;
  const itemsPerSlide = props.itemsPerSlide;
  return (
    <>
      <div className="h-1/2 w-full bg-[#363c43] rounded-3xl shadow-[5px_4px_10px_rgba(0,0,0,0.6)] relative flex">
        {/* Icons */}
        <div className="h-[60%] flex flex-col items-start justify-between pt-4 pl-2">
          <div className="text-3xl hover:cursor-pointer">
            <PiQuestion className="fill-[url(#grad)] text-transparent" />
            <svg width="0" height="0">
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a1a1aa" />
                  <stop offset="100%" stopColor="#3f3f46" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="text-3xl rotate-90 hover:cursor-pointer">
            <BsFillGrid3X2GapFill className="text-zinc-600" />
          </div>
        </div>

        {/* Gallery  */}
        <div className="p-3 w-full">
          {/* Header */}
          <div className="w-full flex items-center justify-between">
            <div className="shadow-[inset_0px_0px_10px_rgba(0,0,0,0.7)] bg-neutral-900 px-9 py-4 rounded-3xl w-fit text-lg">
              <h1>Gallery</h1>
            </div>

            <div className="flex gap-5">
              <button
                onClick={handleTriggerFileInput}
                className="bg-[rgb(64,70,77)] shadow-[inset_1px_1px_5px_rgba(255,255,255,0.3),-3px_-2px_10px_rgba(255,255,255,0.3),3px_3px_8px_rgba(0,0,0,0.8)] px-4 py-2 rounded-full font-semibold text-sm"
              >
                + ADD IMAGE
              </button>

              <div className="flex gap-3">
                <button onClick={handlePrev} disabled={currentSlide === 0}>
                  <HiArrowSmallLeft className="bg-zinc-800 rounded-full size-12 p-2 shadow-[inset_1px_3px_10px_rgba(255,255,255,0.1),-5px_-6px_8px_#3D4854,6px_6px_14px_#22272C] text-[#6F787C]" />
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentSlide === maxSlides - 1 || maxSlides === 0}
                >
                  <HiArrowSmallRight className="bg-zinc-800 rounded-full size-12 p-2 shadow-[inset_1px_3px_10px_rgba(255,255,255,0.1),-5px_-6px_8px_#3D4854,6px_6px_14px_#22272C] text-[#6F787C]" />
                </button>
              </div>
            </div>
          </div>

          <Carousel
            currentSlide={currentSlide}
            slides={slides}
            itemsPerSlide={itemsPerSlide}
          />
        </div>
      </div>
    </>
  );
};

export default Box2;
