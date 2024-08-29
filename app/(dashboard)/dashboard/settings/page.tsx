import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function Settings() {
  const { sessionClaims } = auth();

  const allowedRoles = ["admin", "manager"];

  if (!allowedRoles.includes(sessionClaims?.metadata.role)) {
    redirect("/");
  }
  return <div>Settings</div>;
}
