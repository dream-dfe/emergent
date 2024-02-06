const OurStory = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-screen-sm sm:text-center sm:mx-auto">
        <a
          href="/"
          aria-label="View"
          className="inline-block mb-5 rounded-full sm:mx-auto"
        >
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <svg
              className="w-12 h-12 text-violet-500"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
        </a>
        {/* <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-slate-600 sm:text-4xl sm:leading-none">
            Our Story
          </h2> */}
        <p className="text-base text-gray-700 md:text-lg sm:px-4">
          Emergent Academy is an entrepreneurial ecosystem that supports youth
          entrepreneurs to conceptualize, build and scale sustainable businesses.
        </p>
        {/* <p className="text-base text-gray-700 md:text-lg sm:px-4">
          Emergent Academy serves as a dynamic technology hub dedicated to
          uplifting and economically empowering disadvantaged youth and learners
          residing in low-income communities. With a track record spanning over
          five years, our academy has continually offered a range of impactful
          programs.
        </p> */}
        <hr className="w-full my-8 border-gray-300" />
      </div>
    </div>
  );
};

export default OurStory;
