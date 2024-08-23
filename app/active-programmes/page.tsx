import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import ProgrammesComponent from "@/components/common/ProgrammesComponent";
import { getProgrammesDataByStatus } from "@/lib/fetchData";
import { ProgramDataType } from "@/types";

export default async function ActiveProgrammesPage() {
  const programData = await getProgrammesDataByStatus("Active");

  return (
    <>
      <Header />
      <div className="bg-violet-600 py-12 text-center">
        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-white">
          Active Programmes
        </h2>
      </div>
      <ProgrammesComponent data={programData as ProgramDataType[]} />
      <Footer />
    </>
  );
}
