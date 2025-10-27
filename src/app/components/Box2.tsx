"use client";

import React from "react";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";
import { PiQuestion } from "react-icons/pi";
import { BsFillGrid3X2GapFill } from "react-icons/bs";
import Carousel from "./Carousel";

interface Box2Props {
  handleTriggerFileInput: () => void;
  slides: string[][];
}

const Box2 = ({ handleTriggerFileInput, slides }: Box2Props) => {
  return (
    <div className="h-full w-full overflow-hidden bg-[#363c43] rounded-3xl shadow-[5px_4px_10px_rgba(0,0,0,0.6)] flex ">
      {/* Icons */}
      <div className="h-[55%] flex flex-col items-start justify-between pt-4 pl-2">
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

      {/* Options Container */}
      <div className="p-3 h-full w-full overflow-hidden ">
        {/* Top row: Gallery + buttons */}
        <div className="w-full flex items-center gap-10 xl:gap-20 justify-center md:justify-between">
          {/* Top Buttons */}
          <div className="customLayoutFixBox2 shadow-[inset_0px_0px_10px_rgba(0,0,0,0.7)] bg-neutral-900  px-4 py-2 xl:px-9 2xl:px-11 xl:py-4 2xl:py-5  rounded-3xl w-fit text-[10px] lg:text-[12px] 2xl:text-xl">
            <h1>Gallery</h1>
          </div>
          {/* plus, and arrowsss ->> */}
          <div className="flex gap-2 lg:gap-5 items-center">
            <button
              onClick={handleTriggerFileInput}
              className="bg-[rgb(64,70,77)] shadow-[inset_1px_1px_5px_rgba(255,255,255,0.3),-3px_-2px_10px_rgba(255,255,255,0.3),3px_6px_8px_rgba(0,0,0,0.8)] p-2 xl:px-4 xl:py-3 rounded-full xl:font-semibold text-[10px] xl:text-[12px] 2xl:text-lg flex items-center justify-center gap-2"
            >
              <span className="lg:hidden w-3 h-3 flex items-center justify-center rounded-full text-sm font-bold">
                +
              </span>
              <span className="hidden lg:inline customLayoutFixBox2">+ ADD IMAGE</span>
            </button>

            <div className="flex gap-2 xl:gap-3 items-center">
              <button className="custom-prev">
                <HiArrowSmallLeft className=" bg-zinc-800 rounded-full size-8 xl:size-10 2xl:size-12 p-2 shadow-[inset_1px_3px_10px_rgba(255,255,255,0.1),-5px_-6px_8px_#3D4854,6px_6px_14px_#22272C] text-[#6F787C]" />
              </button>
              <button className="custom-next">
                <HiArrowSmallRight className="bg-zinc-800 rounded-full size-8 xl:size-10 2xl:size-12 p-2 shadow-[inset_1px_3px_10px_rgba(255,255,255,0.1),-5px_-6px_8px_#3D4854,6px_6px_14px_#22272C] text-[#6F787C]" />
              </button>
            </div>
          </div>
        </div>

        <Carousel slides={slides} />
      </div>
    </div>
  );
};

export default Box2;
