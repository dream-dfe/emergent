import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const OurPrograms = () => {
  return (
    <>
    <div  className="flex justify-center bg-gray-50 py-12">
    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-main-purple ">Our Programs</h2>
    </div>
      <div className="bg-gray-50">
        <div className="py-8 md:py-16  m-auto">
          <div className="space-y-16">
            <div className="space-y-8 md:space-y-0 text-center md:text-left md:space-x-16 md:justify-center md:flex md:items-center ">
              <div className="w-full md:w-1/4 space-y-4">
                <h3 className="font-medium text-2xl text-main-purple">
                  Emergent Women
                </h3>
                <p>
                  Our Emergent Women Program equips young individuals, primarily
                  women aged 18-25, with essential skills in entrepreneurship,
                  personal development, and digital literacy.
                </p>
                <Link
                  href={`/programs`}
                  className="inline-flex items-center space-x-3 p-2 font-semibold rounded-md hover:text-white hover:bg-main-red"
                >
                  <span>Learn More </span> <HiArrowNarrowRight />{" "}
                </Link>
              </div>
              <div className="mx-auto w-1/2 md:w-1/3">
                <Image
                  src={"/women.png"}
                  width={350}
                  height={350}
                  className="rounded-2xl"
                  alt="emergent women"
                />
              </div>
            </div>

            <div className="space-y-8 md:space-y-0 text-center md:text-left md:space-x-16 md:justify-center md:flex md:items-center md:flex-row-reverse">
              <div className="w-full md:w-1/4 space-y-4">
                <h3 className="font-medium text-2xl text-main-purple">
                  Emergent Business Accelerator
                </h3>
                <p>
                  The emergent business accelerator is dedicated to supporting
                  women entrepreneurs in their startup ventures. The program
                  focuses on revenue growth, compliance ...
                </p>
                <Link
                  href={`/programs`}
                  className="inline-flex items-center space-x-3 p-2 font-semibold rounded-md hover:text-white hover:bg-main-red"
                >
                  <span>Learn More </span> <HiArrowNarrowRight />{" "}
                </Link>
              </div>
              <div className="mx-auto w-1/2 md:w-1/3">
                <Image
                  src={"/accelerator.png"}
                  width={350}
                  height={350}
                  className="rounded-2xl"
                  alt="emergent women"
                />
              </div>
            </div>

            <div className="space-y-8 md:space-y-0 text-center md:text-left md:space-x-16 md:justify-center md:flex md:items-center ">
              <div className="w-full md:w-1/4 space-y-4">
                <h3 className="font-medium text-2xl text-main-purple">
                  DoDigi
                </h3>
                <p>
                  The Dodigi Program, a unique initiative within Emergent
                  Academy, targets individuals interested in entrepreneurship or
                  those with business aspirations
                </p>
                <Link
                  href={`/programs`}
                  className="inline-flex items-center space-x-3 p-2 font-semibold rounded-md hover:text-white hover:bg-main-red"
                >
                  <span>Learn More </span> <HiArrowNarrowRight />{" "}
                </Link>
              </div>
              <div className="mx-auto w-1/2 md:w-1/3">
                <Image
                  src={"/dodigi.png"}
                  width={350}
                  height={350}
                  className="rounded-2xl"
                  alt="emergent women"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurPrograms;
