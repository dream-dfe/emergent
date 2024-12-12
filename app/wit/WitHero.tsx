import Image from "next/image";
import Link from "next/link";

export default function WitHero() {
  return (
    <section className="relative flex min-h-[70vh] w-full flex-col justify-center px-4 py-12 md:min-h-[50vh] lg:px-8">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/img/wit-banner2.jpg"
          className="h-full w-full object-cover"
          fill
          sizes="100vw"
          priority
          alt="Women in Tech banner"
        />
      </div>
      <div className="relative z-10 max-w-4xl">
        <h1 className="mb-6 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
          <span className="text-white">Standard Chartered </span>
          <span className="text-[#38D200]">Women in Tech </span>
          <span className="text-white">Accelerator Programme</span>
        </h1>
        <p className="mb-8 text-xl text-white sm:text-2xl md:text-3xl">
          Get Expert Training, Coaching & Secure Seed Funding for your Business!
        </p>
        <Link
          prefetch
          href="/wit/cohorts/2024"
          className="inline-block rounded-lg bg-[#38D200] px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-[#2FA500] focus:outline-none focus:ring-2 focus:ring-[#38D200] focus:ring-offset-2"
        >
          Meet the 2024 cohort
        </Link>
      </div>
    </section>
  );
}
