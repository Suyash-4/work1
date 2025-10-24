"use client";
import React from "react";
import HorizontalLine from "./components/HorizontalLine";
import { PiQuestion } from "react-icons/pi";
import { BsFillGrid3X2GapFill } from "react-icons/bs";
import Link from "next/link.js";

const page = () => {
  return (
    <>
      <div className="relative h-screen w-screen">
        <div className="h-full w-full bg-black px-23 py-15 flex items-center jusitfy-center">
          <div className="w-full h-full bg-linear-to-b from-[#272b30] to-[#1b1d21] pt-23 pb-25 pl-8 pr-15 rounded-3xl flex gap-15 items-center">
            <div className="h-full bg-[#565758] p-5 flex-[1.1] rounded-3xl border border-[#96bee6]"></div>
            <div className="h-full bg-transparent flex-1 flex flex-col justify-center items-center gap-5 pr-5">
              {/* Box 1 */}
              <div className="h-full w-full bg-[#363c43] rounded-3xl shadow-[5px_4px_10px_rgba(0,0,0,0.6)] relative flex">
                {/* Icons */}
                <div className="flex flex-col items-start pl-2 pt-4 gap-17">
                  {/* question mark */}
                  <div className=" text-3xl hover:cursor-pointer">
                    <PiQuestion className="fill-[url(#grad)] text-transparent" />
                    <svg width="0" height="0">
                      <defs>
                        <linearGradient
                          id="grad"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#a1a1aa" />
                          <stop offset="100%" stopColor="#3f3f46" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  {/* grid */}
                  <div className=" text-3xl rotate-90 hover:cursor-pointer">
                    <BsFillGrid3X2GapFill className="text-zinc-600" />
                  </div>
                </div>
                {/* COntent */}
                <div className="p-3 h-full w-full flex flex-col justify-center items-center gap-3 ">
                  <div className="p-2 flex gap-3 bg-neutral-900 w-full rounded-3xl text-zinc-500 text-xl font-bold ">
                    <Link
                      href="#"
                      className="flex-1 p-3 focus:bg-neutral-800 hover:bg-linear-to-r hover:from-neutral-800 hover:to-neutral-800 rounded-2xl flex justify-center "
                    >
                      About Me
                    </Link>
                    <Link
                      href="#"
                      className="flex-1 p-3 focus:bg-neutral-800 hover:bg-linear-to-r hover:from-neutral-900 hover:to-neutral-800 rounded-2xl flex justify-center "
                    >
                      Experience
                    </Link>
                    <Link
                      href="#"
                      className="flex-1 p-3 focus:bg-neutral-800 hover:bg-linear-to-r hover:from-neutral-900 hover:to-neutral-800 rounded-2xl flex justify-center "
                    >
                      Recommended
                    </Link>
                  </div>
                  {/* Scroll Content*/}
                  <div className="h-full w-full bg-cyan-800 p-3 ">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quo, magnam incidunt. Quasi illo quos a ipsam quisquam
                      omnis quis quas architecto, illum distinctio quidem quam
                      minima officiis ab nihil repudiandae nulla! Minima quas
                      pariatur facilis iure suscipit corporis voluptatem, quam
                      hic architecto accusamus nihil! Obcaecati laborum maxime
                      unde, aspernatur magni consequatur, itaque qui earum
                      fugiat expedita voluptate odit veniam dolore.
                    </p>
                  </div>
                </div>
              </div>
              <HorizontalLine />
              {/* Box 2 */}
              <div className="h-full w-full bg-[#363c43] rounded-3xl shadow-[5px_4px_10px_rgba(0,0,0,0.6)] relative flex">
                {/* Icons */}
                <div className="flex flex-col items-start pl-2 pt-4 gap-17">
                  {/* question mark */}
                  <div className=" text-3xl hover:cursor-pointer">
                    <PiQuestion className="fill-[url(#grad)] text-transparent" />
                    <svg width="0" height="0">
                      <defs>
                        <linearGradient
                          id="grad"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#a1a1aa" />
                          <stop offset="100%" stopColor="#3f3f46" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  {/* grid */}
                  <div className=" text-3xl rotate-90 hover:cursor-pointer">
                    <BsFillGrid3X2GapFill className="text-zinc-600" />
                  </div>
                </div>
                {/* Content */}
                <div></div>
              </div>
              <HorizontalLine />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
