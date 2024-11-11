import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { TiThMenu } from "react-icons/ti";
import Image from "next/image";
import Link from "next/link";
import WhatWeDoPopOver from "./WhatWeDoPopOver";
import OurResourcesPopOver from "./OurResourcesPopOver";
import { currentUser, User } from "@clerk/nextjs/server";
import { OurCommunityPopOver } from "./our-community-popover";

const SideDrawer = async () => {
  const user = await currentUser();
  // const userRole = user?.publicMetadata.role as string;
  return (
    <Drawer>
      <DrawerTrigger className="rounded-full bg-violet-100 p-2 text-violet-500">
        <TiThMenu size={24} />
      </DrawerTrigger>
      <DrawerContent className="fixed inset-0 mt-0 h-screen w-64">
        <DrawerHeader>
          <div className="flex justify-center">
            <Image src="/img/dflogo.png" width={50} height={50} alt="logo" />
          </div>
        </DrawerHeader>
        <div className="mt-4 flex flex-col items-center space-y-5">
          <Link href="/" className="text-lg font-semibold text-slate-600">
            Home
          </Link>
          <WhatWeDoPopOver />
          <Link
            href="/wit"
            className="whitespace-nowrap font-semibold text-slate-600"
          >
            WiT
          </Link>
          <OurCommunityPopOver user={user as User} />
          <OurResourcesPopOver />
          {/* <Link href="/about" className="text-lg font-semibold text-slate-600">
            About
          </Link> */}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default SideDrawer;
