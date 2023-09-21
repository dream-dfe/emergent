import Link from "next/link";
import React from "react";
import { BsPaypal } from "react-icons/bs";

const CTA = () => {
  return (
    <section className="bg-gray-50">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Help us make a difference
          </h2>
        </div>

        <div className="mx-auto mt-8 max-w-sm">
        <Link
          href="/"
          className="flex relative items-center p-2 space-x-4 justify-center bg-main-red rounded-md text-white hover:bg-main-yellow "
        >
          <span className=" font-bold ">Sponsor</span>
          <BsPaypal size={18} />
        </Link>

                  </div>
      </div>
    </section>
  );
};

export default CTA;
