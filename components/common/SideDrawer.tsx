"use client";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { TiThMenu } from "react-icons/ti";
import Image from "next/image";
import Link from "next/link";
import HeaderPopOver from "./HeaderPopOver";
import OurResourcesPopOver from "./OurResourcesPopOver";

const SideDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger className="p-2  bg-violet-100 rounded-full text-violet-500">
        <TiThMenu size={24} />
      </DrawerTrigger>
      <DrawerContent className="fixed inset-0 h-screen mt-0 w-64 ">
        <DrawerHeader>
          <div className="flex justify-center">
            <Image src="/img/emergent-logob.png" width={50} height={50} alt="logo" />
          </div>
        </DrawerHeader>
        <div className="flex  flex-col items-center mt-4 space-y-5 ">
          <Link href="/" className="font-semibold text-lg text-slate-600">
            Home
          </Link>
          <HeaderPopOver />
          <OurResourcesPopOver/>
          <Link href="/about" className="font-semibold text-lg text-slate-600">
            About
          </Link>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default SideDrawer;
