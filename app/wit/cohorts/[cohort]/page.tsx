import { CohortUserGrid } from "./cohort-user-grid";
import WomenInTechAccelerator from "./women-in-tech-accelerator";

export default async function CohortPage({
  params,
}: {
  params: Promise<{ cohort: string }>;
}) {
  const slug = (await params).cohort;
  return (
    <>
      <WomenInTechAccelerator />
      <CohortUserGrid />
    </>
  );
}
