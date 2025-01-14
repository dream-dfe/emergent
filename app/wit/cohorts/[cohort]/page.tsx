import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
      <div className="container mx-auto space-y-8 px-4 py-8">
        <Card className="w-full border-none">
          <CardHeader>
            <CardTitle className="text-center text-3xl font-bold text-slate-600 sm:text-4xl md:text-5xl">
              Standard Chartered Women in Tech Accelerator Programme
            </CardTitle>
          </CardHeader>
        </Card>
      </div>
      <CohortUserGrid />
      <WomenInTechAccelerator />
    </>
  );
}
