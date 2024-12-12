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
              Standard Chartered Women in Tech Accelerator Programme: First
              Cohort
            </CardTitle>
            <CardDescription className="text-center text-xl sm:text-2xl">
              Supporting 20 Botswana's Women Entrepreneurs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-lg">
              Showcasing our TOP 20 of the Women in Tech Accelerator Programme
              2024! The very first beneficiaries of this program in Botswana!.
              An opportunity to grow and scale women-led businesses through
              leveraging the power of technology towards greater social and
              environmental impact.
            </p>
          </CardContent>
        </Card>
      </div>
      <CohortUserGrid />
      <WomenInTechAccelerator />
    </>
  );
}
