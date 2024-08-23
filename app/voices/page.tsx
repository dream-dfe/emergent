

import { VoiceType } from "@/types";
import VoiceCard from "./VoicesCard";
import Container from "@/components/common/Container";
import { VoicesList } from "@/lib/data";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const EmergentVoices = () => {
  return (
    <>
    <Header/>
      <section className="pt-24 bg-white">
        <div className="px-12 mx-auto ">
          <div className="w-full mx-auto text-center  md:w-11/12 xl:w-9/12 ">
            <h1 className="mb-8 text-2xl inline-flex items-center font-extrabold leading-none tracking-normal text-slate-800 md:text-6xl md:tracking-tight">
              <span>Emergent </span>{" "}
              <span className="block w-full py-2 pl-3 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-slate-600 to-purple-600 ">
                {" "}
                Voices
              </span>
            </h1>
            <p className="px-0 mb-8 text-lg text-slate-600 md:text-xl lg:px-24">
            At Dream Factory we are determined to make entrepreneurship a viable pathway for youth and women in low-income communities. Together with passionate business leaders through mentorship and the power of personal testimony we share practical lessons, context appropriate and practice-based knowledge to accelerate the Emerging businesses in our community. 
            </p>
            <p className="px-0 mb-8 text-lg text-slate-600 md:text-xl lg:px-24">
            What often stands between those who are successful and those who have not yet obtained notable success - is knowledge. How can you know if you haven&apos;t been told? Emergent Voices is about building a knowledge sharing community that is changing the narrative of disempowered communities.
               </p>
          </div>
        </div>
      </section>
      <Container>
        <div className="my-24 space-y-5">
          <div className=" grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3  ">
            {VoicesList.map((voice) => (
              <VoiceCard key={voice.id} voice={voice as VoiceType} />
            ))}
          </div>
        </div>
      </Container>
     <Footer/>
    </>
  );
};

export default EmergentVoices;
