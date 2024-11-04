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
import { auth } from "@clerk/nextjs/server";
import { Button } from "../ui/button";
import { UserButton } from "@clerk/nextjs";
import { OurCommunityPopOver } from "./our-community-popover";

const SideDrawer = () => {
  const { userId } = auth();
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
          <OurCommunityPopOver />
          <OurResourcesPopOver />
          {/* <Link href="/about" className="text-lg font-semibold text-slate-600">
            About
          </Link> */}
        </div>
        <div className="mt-5 flex flex-col items-center space-y-3">
          {!userId && (
            <div className="flex flex-col items-center space-y-3">
              <Button asChild variant="ghost">
                <Link href="/sign-in" className="font-semibold">
                  Sign In
                </Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="/sign-up" className="font-semibold">
                  Sign Up
                </Link>
              </Button>
            </div>
          )}
          {userId && (
            <Button asChild variant="ghost">
              <Link href="/user-profile" className="font-semibold">
                Profile
              </Link>
            </Button>
          )}
          <div className="">
            <UserButton />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default SideDrawer;
