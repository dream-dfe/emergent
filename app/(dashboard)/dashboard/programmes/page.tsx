import { db } from "@/db/drizzle";
import { programmes } from "@/db/schema";
import ProgramCard from "./ProgramCard";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const getData = async () => {
  const data = await db.select().from(programmes);
  return data;
};

export default async function Programmes() {
  const { sessionClaims } = auth();

  const allowedRoles = ["admin", "manager"];

  if (!allowedRoles.includes(sessionClaims?.metadata.role)) {
    redirect("/");
  }
  const programmes = await getData();

  return (
    <>
      <div className="container my-4 flex items-center justify-between">
        <h1 className="text-2xl"> Programmes </h1>
        <Button asChild>
          <Link href="/dashboard/programmes/add">Add new Programme</Link>
        </Button>
      </div>
      <div className="my-4 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {programmes.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </div>
    </>
  );
}
