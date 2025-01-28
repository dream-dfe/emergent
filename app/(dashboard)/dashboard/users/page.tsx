export const dynamic = "force-dynamic"; // Disable static generation

import { getUsers } from "@/actions/user-actions";
import { DataTable } from "@/components/dashboard/DataTable";
import { userColumns } from "@/components/dashboard/user-columns";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Users() {
  const { sessionClaims } = await auth();

  const allowedRoles = ["admin", "manager"];
  if (!sessionClaims || !allowedRoles.includes(sessionClaims.metadata?.role)) {
    console.error("Unauthorized access attempt.");
    redirect("/");
  }

  try {
    const users = await getUsers();
    return (
      <>
        <DataTable search="email" columns={userColumns} data={users} />
      </>
    );
  } catch (err) {
    console.error("Error fetching users:", err);
    return <p>Failed to load users. Please try again later.</p>;
  }
}
