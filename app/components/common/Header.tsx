

import Image from "next/image";
import Link from "next/link";
import HeaderPopOver from "./HeaderPopOver";
import SideDrawer from "./SideDrawer";


const Header = () => {
 
  return (
    <header className="sticky top-0 z-40 bg-white grid grid-cols-2  lg:grid-cols-3 p-8 items-center">
      {/* Left Area  */}
      <div className="flex items-center gap-x-8  ">
        <Link href={`/`} className="p-2 ">
          <Image src={`/emergent-logob.png`} width={50} height={50} alt="logo" />
        </Link>
      </div>
      <div className="hidden lg:flex  items-center space-x-20">
        <Link href="/" className="font-semibold text-lg text-slate-600">
          Home
        </Link>
        <HeaderPopOver />
        <Link href="/about" className="font-semibold text-lg text-slate-600">
          About
        </Link>
      </div>

      <div className="flex lg:hidden  justify-end">
        <SideDrawer />
      </div>
    </header>
  );
};

export default Header;