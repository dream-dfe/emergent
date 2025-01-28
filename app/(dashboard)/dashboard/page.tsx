import { getUsers } from "@/actions/user-actions";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

export default async function DashBoard() {
  const { sessionClaims } = await auth();
  if (sessionClaims?.metadata.role !== "admin") {
    redirect("/");
  }

  return <div>DashBoard</div>;
}
