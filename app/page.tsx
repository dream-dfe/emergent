import Hero from "./components/Home/Hero";
import OurPartners from "./components/Home/OurPartners";
import OurPrograms from "./components/Home/OurPrograms";
import SocialProof from "./components/Home/SocialProof";
import CTA from "./components/common/CTA";


export default function Home() {
  return (
    <main className="">
         <Hero/>
         <OurPrograms/>
         <SocialProof/>
         <OurPartners/>
         <CTA/>

    </main>
  )
}
