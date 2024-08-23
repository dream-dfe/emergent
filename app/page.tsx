import Header from "@/components/common/Header";
import Achievements from "../components/Home/Achievements";
import Hero from "../components/Home/Hero";
import ImpactStories from "../components/Home/ImpactStories";
import OurPartners from "../components/Home/OurPartners";
import OurStory from "../components/Home/OurStory";
import SocialProof from "../components/Home/SocialProof";
import CTA from "../components/common/CTA";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <Hero />
      <OurStory />
      <ImpactStories />
      <SocialProof />
      <OurPartners />
      <Achievements />
      <CTA />
      <Footer />
    </>
  );
}
