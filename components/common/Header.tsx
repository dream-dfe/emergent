

import Image from "next/image";
import Link from "next/link";
import HeaderPopOver from "./HeaderPopOver";
import SideDrawer from "./SideDrawer";
import OurResourcesPopOver from "./OurResourcesPopOver";


const Header = () => {
 
  return (
    <header className="sticky top-0 z-40 bg-white grid grid-cols-2  lg:grid-cols-3 p-8 items-center">
      {/* Left Area  */}
      <div className="flex items-center  ">
        <Link href={`/`} className="p-2 flex flex-col items-center">
          <Image src='/img/dflogo.png' width={50} height={50} alt="logo" />
          <h4 className="text-xs font-semibold text-violet-900">Emergent Academy</h4>
        </Link>
      </div>
      <div className="hidden lg:flex  items-center space-x-4">
        <Link href="/" className="font-semibold  text-slate-600">
          Home
        </Link>
        <HeaderPopOver />
        <Link href="/wit" className="font-semibold whitespace-nowrap text-slate-600">
         WiT
        </Link>
        <Link href="/community" className="font-semibold  whitespace-nowrap text-slate-600">
          Our Community
        </Link>
       <OurResourcesPopOver/>
        <Link href="/contact" className="font-semibold whitespace-nowrap text-slate-600">
          Contact Us
        </Link>
      </div>

      <div className="flex lg:hidden  justify-end">
        <SideDrawer />
      </div>
    </header>
  );
};

export default Header;