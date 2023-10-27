import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="pt-24 bg-white">
    <div className="px-12 mx-auto max-w-7xl">
        <div className="w-full mx-auto text-center  md:w-11/12 xl:w-9/12 ">
            <h1 className="mb-8 text-2xl inline-flex items-center font-extrabold leading-none tracking-normal text-slate-800 md:text-6xl md:tracking-tight">
                <span>Emergent </span> <span className="block w-full py-2 pl-3 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-slate-600 to-purple-600 ">  Academy</span> 
            </h1>
            <p className="px-0 mb-8 text-lg text-slate-600 md:text-xl lg:px-24">
            An entrepreneurship and technology hub dedicated to training and supporting disadvantaged youth and women residing in low-income communities towards economic independence and sustainable livelihoods. 
            </p>
            
         
        </div>
    </div>
</section>
  );
};

export default Hero;
