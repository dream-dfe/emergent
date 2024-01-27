'use client'

import Image from "next/image";
import {
  Dialog,
  DialogContent,

  DialogTrigger,
} from "@/components/ui/dialog";

const ImpactStories = () => {
  return (
    <>
      <div className="flex justify-center items-center my-8">
        <h2 className=" font-sans text-3xl font-bold tracking-tight text-slate-600 sm:text-4xl sm:leading-none">
          Impact Stories
        </h2>
      </div>

      <div className="flex justify-center items-center ">
        <Dialog >
          <DialogTrigger className="relative flex justify-center items-center focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 rounded-3xl group">
           
              <Image
                className="rounded-3xl shadow-2xl transition-shadow duration-300 ease-in-out"
                src="/img/df3.png"
                width={1272}
                height={710}
                priority
                alt="video"
              />
              {/* Play icon */}
              <svg
                className="absolute pointer-events-none group-hover:scale-110 transition-transform duration-300 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                width="72"
                height="72"
              >
                <circle
                  className="fill-white"
                  cx="36"
                  cy="36"
                  r="36"
                  fillOpacity=".8"
                />
                <path
                  className="fill-indigo-500 drop-shadow-2xl"
                  d="M44 36a.999.999 0 0 0-.427-.82l-10-7A1 1 0 0 0 32 29V43a.999.999 0 0 0 1.573.82l10-7A.995.995 0 0 0 44 36V36c0 .001 0 .001 0 0Z"
                />
              </svg>
          
          </DialogTrigger>
          <DialogContent>
          <iframe
      src="https://www.youtube.com/embed?v=gfU1iZnjRZM"
      width="100%" height="500px"
      allowFullScreen
    />
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default ImpactStories;
