import { redirect } from "next/navigation";
import NewProgrammeForm from "./NewProgrammeForm";
import { auth } from "@clerk/nextjs/server";

export default async function AddProgramme() {
  
  const { sessionClaims } = await auth();

  const allowedRoles = ["admin", "manager"];

  if (!allowedRoles.includes(sessionClaims?.metadata.role)) {
    redirect("/");
  }
  
  return (
    <section className="mx-auto max-w-6xl px-5">
      <div className="my-5 text-center">
        <h2 className="text-2xl font-semibold"> Add a new Programme</h2>
      </div>
      <NewProgrammeForm />
    </section>
  );
}
