
import Link from "next/link";
import Image from "next/image";
import { headerLinks } from "@/lib/links";

const Footer = () => {
  const Year = new Date().getFullYear();
  return (
    <>
      <footer className=" w-full p-4 bg-slate-200 md:p-8 lg:p-10 ">
        <div className="mx-auto max-w-screen-xl text-center">
          <div className="flex justify-center items-center ">
            <Link href="/" className="outline-none">
            <span className="self-center text-2xl font-bold text-purple-900 whitespace-nowrap ">Emergent Academy</span>
            </Link>
          </div>

          <p className="my-6 text-gray-500 ">
           A New narrative for marginalized Youth
          </p>
          <div className="flex flex-wrap space-x-5 justify-center items-center mb-6 ">
            {headerLinks.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                className=" text-slate-600 font-semibold"
              >
                {link.title}
              </Link>
            ))}
          </div>
          <span className="text-sm text-gray-500 sm:text-center ">
            © {Year} <span className="hover:underline">Dream Factory Foundation™</span>.
            All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;