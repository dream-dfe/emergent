const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center bg-[url('/img/hero-img.png')] bg-cover bg-no-repeat bg-blend-saturation sm:h-[100vh]">
      <div className="absolute inset-0 bg-violet-700 py-8 text-white opacity-50"></div>
      <div className="z-5 relative mx-auto max-w-7xl px-12">
        <div className="mx-auto w-full text-center md:w-11/12 xl:w-9/12">
          <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-slate-200 md:text-6xl md:tracking-tight">
            <span>Empowering </span>{" "}
            <span className="leading-12 block w-full bg-gradient-to-r from-slate-100 to-yellow-500 bg-clip-text py-2 text-transparent lg:inline">
              vulnerable{" "}
            </span>{" "}
            <span>youth</span>
          </h1>
          <p className="mb-8 px-0 text-lg text-slate-200 md:text-xl lg:px-24">
            through entrepreneurship and technology
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
