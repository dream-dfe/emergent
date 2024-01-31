"use client";

import Image from "next/image";
import React from "react";
import Container from "../../components/common/Container";
import { programsData } from "@/lib/data";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ProgramsList = () => {
  return (
    <Container>
      <div className="mx-auto max-w-screen-sm text-center my-8 lg:mb-16">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
          Programs
        </h2>
        <p className="font-light text-gray-500 lg:mb-16 sm:text-xl ">
          {" "}
          Emergent Academy serves as a dynamic technology hub dedicated to
          uplifting and economically empowering disadvantaged youth and learners
          residing in low-income communities. With a track record spanning over
          five years, our academy has continually offered a range of impactful
          programs
        </p>
      </div>
      {programsData.map((program) => (
        <section
          className="grid grid-cols-1 md:grid-cols-2  gap-4 py-4"
          key={program.title}
        >
          <div className="flex items-center justify-center">
            <Image
              src={program.imageSrc}
              width={1280}
              height={768}
              alt="accelerator"
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col ">
            <h2 className="mb-4 text-xl tracking-tight font-extrabold text-slate-800 ">
              {program.title}
            </h2>
            <p className="text-gray-500">{program.descr}</p>
            <p className="my-4">
              {" "}
              Application Status:{" "}
              <span className=" text-gray-900 font-semibold">
                {" "}
                {program.status}
              </span>{" "}
            </p>
            <Link href={program.url} target="_blank">
              <Button>Learn More & Apply</Button>
            </Link>
          </div>
        </section>
      ))}
    </Container>
  );
};

export default ProgramsList;
