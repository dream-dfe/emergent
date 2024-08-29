import { getUsers } from "@/actions/user-actions";
import { DataTable } from "@/components/dashboard/DataTable";
import { userColumns } from "@/components/dashboard/user-columns";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Users() {
  const users = await getUsers();

  const { sessionClaims } = auth();

  const allowedRoles = ["admin", "manager"];

  if (!allowedRoles.includes(sessionClaims?.metadata.role)) {
    redirect("/");
  }

  return (
    <>
      <DataTable search="email" columns={userColumns} data={users} />
    </>
  );
}
