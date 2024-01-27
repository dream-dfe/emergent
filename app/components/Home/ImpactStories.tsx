'use client'

import Image from "next/image";
import {
  Dialog,
  DialogContent,

  DialogTrigger,
} from "@/components/ui/dialog";
import { ImpactStoriesData } from "@/lib/data";
import ImpactStoryCard from "./ImpactStoryCard";
import Container from "../common/Container";

const ImpactStories = () => {
  return (
    <>
      <div className="flex justify-center items-center my-8">
        <h2 className=" font-sans text-3xl font-bold tracking-tight text-slate-600 sm:text-4xl sm:leading-none">
          Impact Stories
        </h2>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4  ">
        {  ImpactStoriesData.map((story) => (
          <ImpactStoryCard story={story} key={story.id} />
        ))
        
        }
      </div>
     
    </>
  );
};

export default ImpactStories;
