
import { LecturesList } from "@/lib/data";
import { lectureType } from "@/types";
import LectureCard from "./VoicesCard";
import Container from "@/components/common/Container";

const EmergentVoices = () => {
  return (
    <>
      <section className="pt-24 bg-white">
        <div className="px-12 mx-auto max-w-7xl">
          <div className="w-full mx-auto text-center  md:w-11/12 xl:w-9/12 ">
            <h1 className="mb-8 text-2xl inline-flex items-center font-extrabold leading-none tracking-normal text-slate-800 md:text-6xl md:tracking-tight">
              <span>Emergent </span>{" "}
              <span className="block w-full py-2 pl-3 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-slate-600 to-purple-600 ">
                {" "}
                Voices
              </span>
            </h1>
            <p className="px-0 mb-8 text-lg text-slate-600 md:text-xl lg:px-24">
              We invite you to take time to watch these lecture and be inspired
              to align yourself to be on the right path in Life.
            </p>
          </div>
        </div>
      </section>
      <Container>
        <div className="my-24 space-y-5">
          <div className=" grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3  ">
            {LecturesList.map((lecture) => (
              <LectureCard key={lecture.id} lecture={lecture as lectureType} />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default EmergentVoices;
