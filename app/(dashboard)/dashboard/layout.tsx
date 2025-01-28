import { BreadCrumbItem } from "@/components/dashboard/breadcrumb-item";
import DashHeader from "@/components/dashboard/DashHeader";
import { AdminRoutes } from "@/components/dashboard/routes";
import SideNavBar from "@/components/dashboard/side-nav-bar";
// import { auth } from "@clerk/nextjs/server";
import Image from "next/image";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // auth().protect();
  return (
    <div className="flex min-h-screen">
      <aside className="w-16 p-4 md:block">
        <Image src="/img/dflogo.png" width={50} height={50} alt="logo" />
        <SideNavBar items={AdminRoutes} showTooltip />
      </aside>

      <div className="mx-4 w-full flex-1 py-5 ">
        <DashHeader />
        <BreadCrumbItem />
        {children}
      </div>
    </div>
  );
}
