import React from "react";

const SocialProof = () => {
  return (
    <section className="bg-white ">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl text-main-purple font-bold">120+</dt>
              <dd className="font-light ">
                young women trained every year
              </dd>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl  text-main-purple font-bold">40+</dt>
              <dd className="font-light ">
                startups enrolled in the business accelerator 
              </dd>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl  text-main-purple font-bold">1200+</dt>
              <dd className="font-light ">
                Dodigi entrepreneurs supported 
              </dd>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
