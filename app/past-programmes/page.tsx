import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import ProgrammesComponent from "@/components/common/ProgrammesComponent";
import {  getProgrammesDataByStatus } from "@/lib/fetchData";
import { ProgramDataType } from "@/types";


export default async function PastProgrammesPage() {

  const programData = await getProgrammesDataByStatus('Past');
  return (
    <>
    <Header/>
      <div className="text-center py-12 bg-violet-600">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white ">
          Past Programmes
        </h2>
      </div>
      <ProgrammesComponent data={programData as ProgramDataType[]} />
      <Footer/>
    </>
  );
};


