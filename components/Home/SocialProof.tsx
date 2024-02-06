const SocialProof = () => {
  return (
    <section className="bg-white ">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl  text-slate-600 font-bold">
                678
              </dt>
              <dd className="font-light ">
                total youth businesses supported since 2018
              </dd>
            </div>
          </div>

          <div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl  text-slate-600 font-bold">
                80%
              </dt>
              <dd className="font-light ">survival rate</dd>
            </div>
          </div>

          <div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl  text-slate-600 font-bold">
                40+
              </dt>
              <dd className="font-light ">
                businesses enrolled in the Business Accelerator Program annually
              </dd>
            </div>
          </div>

          <div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl text-slate-600 font-bold">
                3000
              </dt>
              <dd className="font-light ">
                businesses trained on digital marketing
              </dd>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
