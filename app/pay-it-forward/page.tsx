import React from "react";
import PayHero from "./PayHero";
import PayCTA from "./PayCTA";
import AboutPay from "./AboutPay";
import PaySolutions from "./PaySolutions";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

const page = () => {
  return (
    <>
      <Header />
      <PayHero />
      <AboutPay />
      <PaySolutions />
      <PayCTA />
      <Footer />
    </>
  );
};

export default page;
