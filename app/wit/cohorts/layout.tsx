import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import React from "react";

export default function CohortsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>
    <Header/>
    {children}
    <Footer/>
    </div>;
}
