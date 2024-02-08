import { ProgramsData } from "./data";

export async function getProgrammeDataById(id: string) {
  const programdata = ProgramsData.find((item) => item.id === id);
  return programdata || null;
}

export async function getProgrammesDataByStatus(status: string) {
  const programsdata = ProgramsData.filter((item) => item.status === status);
  return programsdata || [];
}
