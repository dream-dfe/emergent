"use client";

import Image from "next/image";
import React from "react";
import DiscloseDetails from "./DiscloseDetails";
import Container from "../components/common/Container";
import { programsData } from "@/lib/data";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";

const ProgramsList = () => {
  return (
    <Container>
      {programsData.map((program) => (
        <section
          className="overflow-hidden  py-20  sm:grid sm:grid-cols-2"
          key={program.title}
        >
          <div className="mx-auto max-w-xl text-center md:text-start">
            <h2 className="text-2xl font-bold text-main-purple md:text-3xl">
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
                    <GoDotFill className="mr-2 shrink-0 text-green-600" />
                   <p className="flex space-x-2 items-center"> <strong>{key}:</strong> <span>{value} </span>  </p> 
                  </li>
                </ul>
              ))}
            </div>
          </div>

          <div className="hidden mt-4 md:block">
            <Image
              src="/programs/business.png"
              width={4036}
              height={1461}
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
