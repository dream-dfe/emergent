import Image from "next/image";
import Link from "next/link";
import SideDrawer from "./SideDrawer";
import OurResourcesPopOver from "./OurResourcesPopOver";
import CurrentBanner from "../Home/CurrentBanner";
import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import WhatWeDoPopOver from "./WhatWeDoPopOver";

const Header = () => {
  const { userId } = auth();
  return (
    <header className="sticky top-0 z-40">
      <CurrentBanner />
      <div className="grid grid-cols-2 bg-white p-8 lg:grid-cols-4">
        {/* Left Area  */}
        <div className="flex items-center">
          <Link href={`/`} className="hidden flex-col items-center p-2 lg:flex">
            <Image src="/img/dflogo.png" width={50} height={50} alt="logo" />
            <h4 className="text-xs font-semibold text-violet-900">
              Emergent Academy
            </h4>
          </Link>
          <div className="lg:hidden">
            <SideDrawer />
          </div>
        </div>
        <div className="col-span-2 hidden items-center space-x-4 lg:flex">
          <Link href="/" className="font-semibold text-slate-600">
            Home
          </Link>
          <WhatWeDoPopOver />
          <Link
            href="/wit"
            className="font-semibold  text-slate-600"
          >
            WiT
          </Link>
          <Link
            href="/community"
            className="whitespace-nowrap font-semibold text-slate-600 line-clamp-1"
          >
            Our Community
          </Link>
          <OurResourcesPopOver />
          <Link
            href="/contact"
            className="whitespace-nowrap font-semibold text-slate-600 line-clamp-1"
          >
            Contact Us
          </Link>
        </div>

        <div className="flex items-center justify-end space-x-4">
          {!userId && (
            <>
              <Link href="/sign-in" className="font-semibold text-slate-600">Sign In</Link>
              <Link href="/sign-up" className="font-semibold text-slate-600">Sign Up</Link>
            </>
          )}
          {userId && (
            <Link href="/user-profile" className="font-semibold text-slate-600">
              Profile
            </Link>
          )}
          <div className="ml-auto">
            <UserButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
