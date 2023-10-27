"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu } from "react-icons/hi";
import { BsPaypal } from "react-icons/bs";
import { headerLinks } from "@/lib/links";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="grid grid-cols-3 bg-white py-5 px-4 md:px-12 items-center sticky top-0 z-10 shadow-sm ">
      {/* Left Area  */}
      <div className="flex items-center gap-x-8  ">
        <Link href={`/`} className="p-2 ">
          <span className="self-center text-2xl font-bold text-purple-900 whitespace-nowrap ">
            Emergent Academy
          </span>
        </Link>
      </div>

      <div className="hidden lg:flex justify-center space-x-8">
        {headerLinks.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            className=" text-lg whitespace-nowrap font-semibold"
          >
            {link.title}
          </Link>
        ))}
      </div>

      {/* Right Area */}

      <div className="flex col-span-2 lg:col-span-1 items-center justify-end space-x-4">
        <Link
          href="/"
          className={`hidden lg:inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center  rounded-lg
           
           border text-gray-600 border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 `}
        >
          <span className=" font-bold ">Sponsor</span>
          <BsPaypal size={18} />
        </Link>
        <button className="lg:hidden">
          <HiMenu size={28} />
        </button>
      </div>
    </header>
  );
};

export default Header;
