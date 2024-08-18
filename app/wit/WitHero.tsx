import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function WitHero() {
  return (
    <section className="relative flex h-[60vh] w-full flex-col items-start justify-start md:items-center md:justify-center">
      <div className="absolute -z-10 h-full w-full overflow-hidden">
        <Image
          src="/img/wit-banner.jpg"
          className="h-full w-full object-cover"
          width={1280}
          height={853}
          alt="hero-img"
        />
      </div>
      <div className="absolute bottom-8 left-12">
        {" "}
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
    </section>
  );
}
