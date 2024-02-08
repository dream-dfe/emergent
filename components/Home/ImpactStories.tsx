"use client";


import { ImpactStoriesData } from "@/lib/data";
import ImpactStoryCard from "./ImpactStoryCard";


const ImpactStories = () => {
  return (
    <>
      <div className="flex justify-center items-center my-8">
        <h2 className=" font-sans text-3xl font-bold tracking-tight text-slate-600 sm:text-4xl sm:leading-none">
          Impact Stories
        </h2>
      </div>
      
        <div className=" grid grid-cols-1 gap-4 mx-4 justify-center md:grid-cols-3  lg:grid-cols-4  ">
          {ImpactStoriesData.map((story) => (
            <ImpactStoryCard story={story} key={story.id} />
          ))}
        </div>
     
    </>
  );
};

export default ImpactStories;
