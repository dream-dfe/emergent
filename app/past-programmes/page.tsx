import type { ProgramDataType } from "@/types";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { getProgrammesDataByStatus } from "@/lib/fetchData";
import ProgrammesComponent from "@/components/common/ProgrammesComponent";
import ProgramsPlaceHolder from "@/components/common/programs-placeholder";

export default async function PastProgrammesPage() {
  const programData = await getProgrammesDataByStatus("Past");

  return (
    <>
      <Header />
      <div className="relative bg-gradient-to-r from-violet-600 to-indigo-600 py-24">
        <div className="container relative mx-auto px-4">
          <h1 className="mb-4 text-center text-4xl font-extrabold text-white md:text-5xl">
            Past Programmes
          </h1>
          <p className="mx-auto max-w-2xl text-center text-xl text-white">
            Explore our successful past initiatives and the impact they&apos;ve made.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        {programData && programData.length > 0 ? (
          <ProgrammesComponent data={programData as ProgramDataType[]} />
        ) : (
          <ProgramsPlaceHolder category="Past"/>
        )}
      </div>
      <Footer />
    </>
  );
}
