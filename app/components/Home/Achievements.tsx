const Achievements = () => {
  return (
    <section className="py-16">
      <div className="flex justify-center items-center my-12">
        <h2 className=" font-sans text-3xl font-bold tracking-tight text-slate-600 sm:text-4xl sm:leading-none">
          Awards and Recognitions
        </h2>
      </div>
      <div className="container">
        <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
          <div className="flex flex-row-reverse md:contents">
            <div className="bg-violet-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
             
              <p className="leading-tight text-justify">
              USAID Young Women Transform Prize (2019)
              </p>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-violet-800 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-violet-500 shadow"></div>
            </div>
          </div>

          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-violet-800 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-violet-500 shadow"></div>
            </div>
            <div className="bg-violet-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
             
              <p className="leading-tight text-justify">
              Google.org Impact Challenge Accelerator: Women and Girls (2022)
              </p>
            </div>
          </div>

          <div className="flex flex-row-reverse md:contents">
            <div className="bg-violet-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
              
              <p className="leading-tight text-justify">
              Facebook Community Leadership Fellowship (2019)
              </p>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-violet-800 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-violet-500 shadow"></div>
            </div>
          </div>

          {/* <div className="flex flex-row-reverse md:contents">
            <div className="bg-violet-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
              <h3 className="font-semibold text-lg mb-1">Lorem ipsum</h3>
              <p className="leading-tight text-justify">
              South Africa Women Entrepreneurs Climate Change Awards (2021)
              </p>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-violet-800 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-violet-500 shadow"></div>
            </div>
          </div> */}

          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-violet-800 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-violet-500 shadow"></div>
            </div>
            <div className="bg-violet-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
            
              <p className="leading-tight text-justify">
              South Africa Women Entrepreneurs Climate Change Awards (2021)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
