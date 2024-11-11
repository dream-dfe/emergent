import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import CustomUserBtn from "../common/custom-user-btn";

export default async function DashHeader() {
  const user = await currentUser();
  const userRole = user?.publicMetadata.role as string;

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
            <CustomUserBtn role={userRole} />
          </div>
        </div>
      </div>
    </div>
  );
}
