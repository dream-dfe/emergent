import { UserGrid } from "./twenty-four";
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
      <UserGrid/>
    </>
  );
}
