import { VoiceType } from "@/types";
import Container from "@/components/common/Container";
import { VoicesList } from "@/lib/data";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import VoiceCard from "./voices-card";

const EmergentVoicesPage = () => {
  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-white to-gray-100">
        <section className="py-16 md:py-24">
          <Container>
            <div className="mx-auto text-center md:w-11/12 xl:w-9/12">
              <h1 className="mb-8 text-4xl font-extrabold leading-tight text-gray-900 md:text-6xl">
                Emergent{" "}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Voices
                </span>
              </h1>
              <p className="mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
                At Dream Factory, we are determined to make entrepreneurship a viable pathway for youth and women in low-income communities. Through mentorship and personal testimony, we share practical, context-appropriate knowledge to accelerate emerging businesses in our community.
              </p>
              <p className="mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
                What often stands between those who are successful and those who have not yet obtained notable success is knowledge. Emergent Voices is about building a knowledge-sharing community that is changing the narrative of disempowered communities.
              </p>
            </div>
          </Container>
        </section>
        <section className="py-16">
          <Container>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {VoicesList.map((voice) => (
                <div key={voice.id}>
                  <VoiceCard voice={voice as VoiceType} />
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default EmergentVoicesPage;

