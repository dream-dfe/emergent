import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { BsPaypal } from "react-icons/bs";
import Image from "next/image";
import { headerLinks } from "@/lib/links";

const Header = () => {
  return (
    <header className="grid grid-cols-3 bg-white py-5 px-4 md:px-12 items-center sticky top-0 z-10 shadow-sm ">
      {/* Left Area  */}
      <div className="flex items-center gap-x-8  ">
        <Link href={`/`} className="p-2 ">
          <Image src={`/logo.png`} width={195} height={30} alt="logo" />
        </Link>
      </div>

      <div className="hidden md:flex justify-center space-x-8">
        {headerLinks.map((link, index) => (
          <Link key={index} href={link.url} className=" text-lg font-semibold">
            {link.title}
          </Link>
        ))}
      </div>

      {/* Right Area */}

      <div className="flex col-span-2 md:col-span-1 items-center justify-end space-x-4">
        <Link
          href="/"
          className="hidden md:flex relative items-center p-2 bg-main-red rounded-md text-white hover:bg-main-yellow "
        >
          <span className=" font-bold ">Sponsor</span>
          <BsPaypal size={18} />
        </Link>
        <button className="md:hidden">
          <HiMenu size={28} />
        </button>
      </div>
    </header>
  );
};

export default Header;
