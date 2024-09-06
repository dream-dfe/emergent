import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function WitHero() {
  return (
    <section className="relative flex h-[70vh] md:h-[50vh] w-full flex-col">
      <div className="absolute -z-10 h-full w-full overflow-hidden">
        <Image
          src="/img/wit-banner.jpg"
          className="h-full w-full object-cover"
          width={1280}
          height={853}
          alt="hero-img"
        />
      </div>
      <div className="absolute  ml-5 grid gap-10">
        <h1 className="text-2xl leading-tight md:text-4xl">
          <span className="text-white">Standard Chartered </span> <br />
          <span className="text-[#38D200]">Women in Tech </span> <br />
          <span className="text-white"> Accelerator Programme</span>
        </h1>
        <p className="text-xl md:text-2xl">
          Get Expert Training, Coaching & <br /> Secure Seed Funding for your
          Business!
        </p>
      </div>
      <div className="absolute bottom-8 w-full">
        <div className="mx-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <Button
            asChild
            className="min-w-56 rounded-full bg-[#38D200] hover:bg-[#0473ea]"
          >
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSd49LC589BOM-PR7LmkpiuGTN1ellYd-vbbNbM0OQJSwDStUw/viewform">
              <span className="text-lg md:text-2xl"> APPLY NOW</span>{" "}
            </Link>
          </Button>{" "}
          <h2 className="text-xl text-white md:text-2xl ">
            {" "}
            Deadline for application is 14<sup>th</sup> September 2024
          </h2>
        </div>
      </div>
    </section>
  );
}
