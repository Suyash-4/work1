"use client";

import { useState, useRef, useMemo, useEffect, ChangeEvent } from "react";
import HorizontalLine from "./components/HorizontalLine";
import { PiQuestion } from "react-icons/pi";
import { HiArrowSmallLeft } from "react-icons/hi2";
import { HiArrowSmallRight } from "react-icons/hi2";
import { BsFillGrid3X2GapFill } from "react-icons/bs";
import Link from "next/link.js";
import Carousel from "./components/Carousel";

const initialImageUrls = [
  "https://images.unsplash.com/photo-1707396171864-83b65a1edfcb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880",
  "https://images.unsplash.com/photo-1707396171864-83b65a1edfcb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880",
  "https://images.unsplash.com/photo-1707396171864-83b65a1edfcb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880",
  "https://images.unsplash.com/photo-1707396171864-83b65a1edfcb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880",
  "https://images.unsplash.com/photo-1707396171864-83b65a1edfcb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880",
];

const itemsPerSlide = 3;

const page = () => {
  const [imageUrls, setImageUrls] = useState(initialImageUrls);
  const [currentSlide, setCurrentSlide] = useState(0);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const imageUrlsRef = useRef(imageUrls);
  useEffect(() => {
    imageUrlsRef.current = imageUrls;
  }, [imageUrls]);

  useEffect(() => {
    return () => {
      imageUrlsRef.current.forEach((url) => {
        if (url.startsWith("blob:")) {
          URL.revokeObjectURL(url);
        }
      });
    };
  }, []);

  const slides: Array<string[]> = useMemo(() => {
    const newSlides = [];
    for (let i = 0; i < imageUrls.length; i += itemsPerSlide) {
      newSlides.push(imageUrls.slice(i, i + itemsPerSlide));
    }
    return newSlides;
  }, [imageUrls]);

  const maxSlides = slides.length;

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1 < maxSlides ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  };

  // 7. Handlers for adding the image
  const handleTriggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleAddImage = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file && file.type.startsWith("image/")) {
      // Create a temporary local URL for the file
      const newImageUrl = URL.createObjectURL(file);
      // Add the new URL to our state
      setImageUrls((prevUrls) => [...prevUrls, newImageUrl]);
    }

    // Clear the input value to allow selecting the same file again
    if (event.target) {
      event.target.value = "";
    }
  };

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleAddImage}
        style={{ display: "none" }}
        accept="image/*"
      />

      <div className="relative h-screen w-screen">
        <div className="h-full w-full bg-black px-23 py-15 flex items-center jusitfy-center">
          <div className="w-full h-full bg-linear-to-b from-[#272b30] to-[#1b1d21] pt-23 pb-25 pl-8 pr-15 rounded-3xl flex gap-15 items-center">
            <div className="h-full bg-[#565758] p-5 flex-[1.1] rounded-3xl border border-[#96bee6]"></div>
            <div className="h-full bg-transparent flex-1 flex flex-col justify-center items-center gap-5 pr-5">
              {/* Box 1  */}
              <div className="h-1/2 w-full bg-[#363c43] rounded-3xl shadow-[5px_4px_10px_rgba(0,0,0,0.6)] relative flex">
                {/* Icons */}
                <div className="h-[60%] flex flex-col items-start justify-between pt-4 pl-2">
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
                  <div className=" text-3xl rotate-90 hover:cursor-pointer">
                    <BsFillGrid3X2GapFill className="text-zinc-600" />
                  </div>
                </div>
                {/* COntent */}
                <div className="p-3 w-full flex flex-col justify-center items-center gap-2">
                  <div className="p-2 flex gap-3 bg-neutral-900 w-full rounded-3xl text-[#A3ADB2] text-lg font-bold ">
                    <Link
                      href="#"
                      className="flex-1 p-3 z-2 focus:bg-neutral-800 hover:bg-linear-to-r hover:from-neutral-800 hover:to-neutral-800 rounded-2xl flex justify-center 
                                            focus:shadow-[0px_-25px_100px_7px_#37415199,0px_15px_50px_15px_#000000]"
                    >
                      About Me
                    </Link>
                    <Link
                      href="#"
                      className="flex-1 p-3 z-2 focus:bg-neutral-800 hover:bg-linear-to-r hover:from-neutral-800 hover:to-neutral-800 rounded-2xl flex justify-center 
                                            focus:shadow-[0px_-25px_100px_7px_#37415199,0px_15px_50px_15px_#000000]"
                    >
                      Experience
                    </Link>
                    <Link
                      href="#"
                      className="flex-1 p-3 z-2 focus:bg-neutral-800 hover:bg-linear-to-r hover:from-neutral-800 hover:to-neutral-800 rounded-2xl flex justify-center 
                                            focus:shadow-[0px_-25px_100px_7px_#37415199,0px_15px_50px_15px_#000000]"
                    >
                      Recommended
                    </Link>
                  </div>
                  <div
                    className="h-37 w-full py-2 px-5 overflow-auto flex flex-col gap-5 text-lg [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent
                                    [&::-webkit-scrollbar-thumb]:bg-gray-400
                                      [&::-webkit-scrollbar-thumb]:rounded-full text-[#969696] text-justify "
                  >
                    <p>
                      Hello! I'm Scott, a passionate and creative software
                      engineer with a knack for building beautiful and
                      functional web applications. With a background in computer
                      science and a love for clean code, I enjoy turning complex
                      problems into simple, elegant solutions. When I'm not
                      coding, you can find me exploring new technologies,
                      contributing to open-source projects, or enjoying a good
                      cup of coffee.
                    </p>
                    <p>
                      In my free time other than my work, I also love to play
                      video games, listen to pop music and go out for a walk,
                      these extra activities always help me to keep a calm mind
                      during all the rush hour of the work.
                    </p>
                    <p>
                      Over the years, I've worked on a variety of projects
                      ranging from dynamic single-page applications to scalable
                      backend systems. My approach emphasizes modular
                      architecture, reusable components, and performance
                      optimization. I believe that great software isn't just
                      functional—it should also be intuitive and delightful to
                      use. Whether it's refining UI transitions or streamlining
                      API calls, I strive to create experiences that feel
                      seamless and responsive. I'm always eager to learn from
                      fellow developers, share insights, and push the boundaries
                      of what's possible with modern web technologies.
                    </p>
                  </div>
                </div>
              </div>
              <HorizontalLine />

              {/* Box 2 */}
              <div className="h-1/2 w-full bg-[#363c43] rounded-3xl shadow-[5px_4px_10px_rgba(0,0,0,0.6)] relative flex">
                {/* Icons */}
                <div className="h-[60%] flex flex-col items-start justify-between pt-4 pl-2">
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
                  <div className=" text-3xl rotate-90 hover:cursor-pointer">
                    <BsFillGrid3X2GapFill className="text-zinc-600" />
                  </div>
                </div>
                {/* COntent */}
                <div className="p-3 w-full ">
                  {/* Buttons, Navigation, etc.... */}
                  <div className="w-full flex items-center justify-between">
                    <div className="bg-neutral-900 px-9 py-4 rounded-3xl w-fit text-lg ">
                      <h1>Gallery</h1>
                    </div>
                    <div className="flex gap-5 ">
                      <button
                        onClick={handleTriggerFileInput}
                        className="bg-[rgb(64,70,77)] shadow-[inset_1px_1px_5px_rgba(255,255,255,0.3),-3px_-2px_10px_rgba(255,255,255,0.3),3px_3px_8px_rgba(0,0,0,0.8)] px-4 py-2 rounded-full font-semibold text-sm"
                      >
                        + ADD IMAGE
                      </button>
                      <div className="flex gap-3">
                        <button
                          onClick={handlePrev}
                          disabled={currentSlide === 0}
                        >
                          <HiArrowSmallLeft className="bg-zinc-800 rounded-full size-12 p-2 shadow-[inset_1px_3px_10px_rgba(255,255,255,0.1),-5px_-6px_8px_#3D4854,6px_6px_14px_#22272C] text-[#6F787C]" />
                        </button>
                        <button
                          onClick={handleNext}
                          disabled={
                            currentSlide === maxSlides - 1 || maxSlides === 0
                          }
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
              <HorizontalLine />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
