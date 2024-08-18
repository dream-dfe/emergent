import ProgrammesComponent from "@/components/common/ProgrammesComponent";
import { getProgrammesDataByStatus } from "@/lib/fetchData";
import { ProgramDataType } from "@/types";


export default async function OpenApplicationsPage() {

  const programData = await getProgrammesDataByStatus('Open');

  return (
    <>
    <div className="text-center py-12 bg-violet-600">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white ">
        Open Applications
      </h2>
    </div>

    <ProgrammesComponent data={programData as ProgramDataType[]} />
    
  </>
  )
}

