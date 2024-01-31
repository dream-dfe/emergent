import Link from "next/link";
import Container from "../../components/common/Container";

const AboutUs = () => {
  return (
    <Container>
      <div className="py-12 text-center">
        <a
          href="#"
          className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full  hover:bg-gray-200 "
          role="alert"
        >
          
          <span className="text-sm font-medium">#Bethedream</span>
        </a>
        <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl ">
        Giving Unemployed youth,  young women access to sustainable economic opportunities 
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        Our academy has a five-year track record of offering impactful programs. The Emergent Academy Hub project provides various youth programs and services for free, aimed at fostering financial independence and sustainable livelihoods through entrepreneurship, digital literacy, work readiness, financial literacy, personal development, mentorship, coaching, and food security in low-income communities. It takes a holistic, context-sensitive approach, co-designed with youth from these communities.
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center  rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 "
          >
            Learn more
          </a>
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 "
          >
            Watch video
          </a>
        </div>
        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
          <span className="font-semibold text-gray-500 uppercase">
            FEATURED IN
          </span>
          <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
            <Link
              href="https://southafrica.un.org/en/185975-empowering-communities-adapt-changing-climate"
              className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 "
            >UN South Africa</Link>
            <a
              href="#"
              className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 "
            ></a>
            <a
              href="#"
              className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 "
            ></a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
