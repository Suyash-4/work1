import { PiQuestion } from "react-icons/pi";
import { BsFillGrid3X2GapFill } from "react-icons/bs";
import Link from "next/link";

const Box1 = () => {
  return (
    <>
      <div className="h-full w-full bg-[#363c43] rounded-3xl shadow-[5px_4px_10px_rgba(0,0,0,0.6)] flex">
        {/* Icons */}
        <div className="h-[55%] flex flex-col items-start justify-between pt-4 pl-2">
          {/* Gradient Question Icon */}
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
          {/* Grid Icon */}
          <div className="text-3xl rotate-90 hover:cursor-pointer">
            <BsFillGrid3X2GapFill className="text-zinc-600" />
          </div>
        </div>

        {/* Content */}
        <div className="py-5 pr-3 pl-2 w-full flex flex-col items-center gap-4 xl:gap-5">
          {/* Tabs */}
          <div className="p-2 flex xl:gap-3 xl:p-3 bg-neutral-900 w-full rounded-3xl text-[#A3ADB2]  font-bold ">
            {["About Me", "Experience", "Recommended"].map((tab) => (
              <Link
                key={tab}
                href="#"
                className="flex-1 gap-10 z-2 p-3 rounded-2xl text-[10px] lg:text-sm xl:text-lg flex justify-center
              hover:text-white focus:text-white
              transition-all duration-400 ease-in-out
            focus:bg-neutral-800 hover:bg-linear-to-r hover:from-neutral-900 hover:to-neutral-800 
              focus:shadow-[0px_-25px_100px_7px_#37415199,0px_15px_50px_15px_#000000]"
              >
                {tab}
              </Link>
            ))}
          </div>

          {/* About Content  */}
          <div
            className="h-full xl:h-40 w-full px-5 overflow-auto flex flex-col gap-5 text-sm xl:text-lg 
                    [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent
                    [&::-webkit-scrollbar-thumb]:bg-gray-400 [&::-webkit-scrollbar-thumb]:rounded-full
                    text-[#969696] text-justify"
          >
            <p>
              Hello! I'm Scott, a passionate and creative software engineer with
              a knack for building beautiful and functional web applications.
              With a background in computer science and a love for clean code, I
              enjoy turning complex problems into simple, elegant solutions.
            </p>
            <p>
              In my free time, I love playing games, listening to pop music, and
              going out for walks — activities that keep me calm during busy
              work hours.
            </p>
            <p>
              Over the years, I've worked on projects from dynamic SPAs to
              scalable backends, focusing on modular architecture, reusable
              components, and performance optimization.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Box1;
