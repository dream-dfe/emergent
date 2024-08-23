import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import WitHero from "./WitHero";
import AboutWit from "./AboutWit";
import OtherDetailsWit from "./OtherDetailsWit";
import PoweredByWit from "./PoweredByWit";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export default function WIT() {
  return (
    <>
      <Header />
      <WitHero />
      <section className="mx-auto my-8 max-w-screen-xl px-4">
        <h2 className="my-8 bg-clip-text text-center text-4xl font-bold leading-tight md:text-6xl">
          <span className="text-[#0473ea]">Standard Chartered </span>
          <span className="text-[#38D200]">Women in Tech </span>{" "}
          <span className="text-[#525355]"> Accelerator Programme</span>
        </h2>
        <Separator className="my-4" />
        <AboutWit />
        <Separator className="my-4" />
        <OtherDetailsWit />
        <div className="my-8">
          <Button
            asChild
            className="min-w-48 rounded-full bg-[#38D200] hover:bg-[#0473ea]"
          >
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSd49LC589BOM-PR7LmkpiuGTN1ellYd-vbbNbM0OQJSwDStUw/viewform"
              className="text-4xl"
            >
              APPLY NOW{" "}
            </Link>
          </Button>{" "}
        </div>
        <PoweredByWit />
      </section>
      <Footer />
    </>
  );
}
