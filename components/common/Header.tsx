import Image from "next/image";
import Link from "next/link";
import SideDrawer from "./SideDrawer";
import OurResourcesPopOver from "./OurResourcesPopOver";
// import CurrentBanner from "../Home/CurrentBanner";
import { currentUser, User } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import WhatWeDoPopOver from "./WhatWeDoPopOver";
import { Button } from "../ui/button";
import { OurCommunityPopOver } from "./our-community-popover";
import CustomUserBtn from "./custom-user-btn";

const Header = async () => {
  const user = await currentUser();

  const userRole = user?.publicMetadata.role as string;

  return (
    <header className="sticky top-0 z-40">
      {/* <CurrentBanner /> */}
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
          <Link href="/wit" className="font-semibold text-slate-600">
            WiT
          </Link>
          <OurCommunityPopOver user={user as User} />
          <OurResourcesPopOver />
          <Link
            href="/contact"
            className="line-clamp-1 whitespace-nowrap font-semibold text-slate-600"
          >
            Contact Us
          </Link>
        </div>

        <div className="flex items-center justify-end space-x-4">
          {!user && (
            <div className="flex space-x-3">
              <Button asChild variant="secondary">
                <Link href="/sign-in" className="font-semibold">
                  Sign In
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/sign-up" className="font-semibold">
                  Sign Up
                </Link>
              </Button>
            </div>
          )}
          {user && (
            <Link href="/user-profile" className="font-semibold text-slate-600">
              Profile
            </Link>
          )}
          <div className="ml-auto">
            <CustomUserBtn role={userRole} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
