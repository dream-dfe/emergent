import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-[url(/hero1.png)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-gradient-to-r     from-main-yellow/80 to-white/50  lg:from-main-yellow/80 "></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
            We create a new narrative for
            <strong className="block font-extrabold text-main-purple">
              Marginalized Youth
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            Particularly young women who live in low-income township and rural
            communities
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Link
              href="/programs"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-main-purple shadow  sm:w-auto"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
