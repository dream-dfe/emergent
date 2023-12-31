"use client";

import Image from "next/image";
import React from "react";
import Container from "../components/common/Container";
import { programsData } from "@/lib/data";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";

const ProgramsList = () => {
  return (
    <Container>
        <div className="mx-auto max-w-screen-sm text-center my-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">Programs</h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl "> Emergent Academy serves as a dynamic technology hub dedicated to uplifting and economically empowering disadvantaged youth and learners residing in low-income communities. With a track record spanning over five years, our academy has continually offered a range of impactful programs</p>
      </div> 
      {programsData.map((program) => (
        <section
          className="overflow-hidden  py-20  sm:grid sm:grid-cols-2"
          key={program.title}
        >
          <div className="mx-auto max-w-xl text-center md:text-start">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 ">
              {program.title}
            </h2>

            <p className=" text-gray-500 md:mt-4 md:block">{program.descr}</p>

            <div className=" mt-4 md:block ">
              {program.curriculum.map((curr, index) => (
                <ul
                  className="max-w-md space-y-3 text-gray-700 list-inside "
                  key={index}
                >
                  <li className="flex items-center">
                    <BsFillCheckCircleFill className="mr-2 shrink-0 text-main-red" />
                    <span>{curr}</span>
                  </li>
                </ul>
              ))}
            </div>
            <div className=" mt-4 md:block ">
              {Object.entries(program.details).map(([key, value], index) => (
                <ul
                  className=" space-y-3 text-gray-700 list-inside "
                  key={index}
                >
                  <li className="flex  items-center">
                    <GoDotFill className="mr-2 shrink-0 text-slate-600" />
                   <p className="flex space-x-2 items-center"> <strong>{key}:</strong> <span>{value} </span>  </p> 
                  </li>
                </ul>
              ))}
            </div>
          </div>

          <div className="hidden mt-4 md:block">
            <Image
              src={program.imageSrc}
              width={2000}
              height={1500}
              alt="accelerator"
              className="mb-3  max-w-lg h-56 w-full object-cover sm:h-full rounded-lg"
            />
          </div>
        </section>
      ))}
    </Container>
  );
};

export default ProgramsList;
