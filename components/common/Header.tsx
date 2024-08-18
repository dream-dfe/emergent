import Image from "next/image";
import Link from "next/link";
import HeaderPopOver from "./HeaderPopOver";
import SideDrawer from "./SideDrawer";
import OurResourcesPopOver from "./OurResourcesPopOver";
import CurrentBanner from "../Home/CurrentBanner";

const Header = () => {
  return (
    <header className="sticky top-0 z-40">
      <CurrentBanner />
      <div className="grid grid-cols-2 items-center bg-white p-8 lg:grid-cols-3">
        {/* Left Area  */}
        <div className="flex items-center">
          <Link href={`/`} className="flex flex-col items-center p-2">
            <Image src="/img/dflogo.png" width={50} height={50} alt="logo" />
            <h4 className="text-xs font-semibold text-violet-900">
              Emergent Academy
            </h4>
          </Link>
        </div>
        <div className="hidden items-center space-x-4 lg:flex">
          <Link href="/" className="font-semibold text-slate-600">
            Home
          </Link>
          <HeaderPopOver />
          <Link
            href="/wit"
            className="whitespace-nowrap font-semibold text-slate-600"
          >
            WiT
          </Link>
          <Link
            href="/community"
            className="whitespace-nowrap font-semibold text-slate-600"
          >
            Our Community
          </Link>
          <OurResourcesPopOver />
          <Link
            href="/contact"
            className="whitespace-nowrap font-semibold text-slate-600"
          >
            Contact Us
          </Link>
        </div>

        <div className="flex justify-end lg:hidden">
          <SideDrawer />
        </div>
      </div>
    </header>
  );
};

export default Header;
