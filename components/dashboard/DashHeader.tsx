import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function DashHeader() {
  const user = await currentUser();

  return (
    <div className="sticky top-0 z-40">
      <div className="flex items-center justify-between">
        <div className=" ">
          <h4 className="font-semibold text-slate-600">
            Welcome {user?.fullName} !
          </h4>
        </div>

        <div className="flex items-center justify-end space-x-4">
          <Link href="/user-profile" className="font-semibold text-slate-600">
            Profile
          </Link>

          <div className="ml-auto">
            <UserButton />
          </div>
        </div>
      </div>
    </div>
  );
}
