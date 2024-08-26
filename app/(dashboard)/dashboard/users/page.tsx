import { getUsers } from "@/actions/user-actions";
import { DataTable } from "@/components/dashboard/DataTable";
import { userColumns } from "@/components/dashboard/user-columns";

export default async function Users() {
  const users = await getUsers();

  return (
    <>
      <DataTable search="email" columns={userColumns} data={users} />
    </>
  );
}
