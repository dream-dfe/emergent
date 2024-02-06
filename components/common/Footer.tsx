

import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Year = new Date().getFullYear();
const Footer = () => {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
    <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
      <div className="sm:col-span-2">
      <Image src="/img/dflogo.png" width={50} height={50} alt="logo" />
      <h4 className="text-xs font-semibold text-violet-900">Emergent Academy</h4>
        <div className="mt-6 lg:max-w-sm">
          <p className="text-sm text-gray-800">
          Emergent Academy is an entrepreneurial ecosystem that supports youth
            entrepreneurs to conceptualize, build and scale sustainable
            businesses
          </p>
         
        </div>
      </div>
      <div className="space-y-2 text-sm">
        <p className="text-base font-bold tracking-wide text-gray-900">
          Contacts
        </p>
        <div className="flex">
          <p className="mr-1 text-gray-800">Phone:</p>
          <a
            href="tel:27677867838"
            aria-label="Our phone"
            title="Our phone"
            className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
           +27 67 786 7838
          </a>
        </div>
        <div className="flex">
          <p className="mr-1 text-gray-800">Email:</p>
          <a
            href="mailto:info@lorem.mail"
            aria-label="Our email"
            title="Our email"
            className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            dreams@factoryfoundation.org
          </a>
        </div>
        <div className="flex">
          <p className="mr-1 text-gray-800">Address:</p>
          <a
            href="http://www.dreamfactoryfoundation.org/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Our address"
            title="Our address"
            className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            370B Main Rd, Observatory, Cape Town, 7925
          </a>
        </div>
      </div>
      <div>
        <span className="text-base font-bold tracking-wide text-gray-900">
          Socials
        </span>
        <div className="flex items-center mt-1 space-x-3">
          <Link
            href="https://www.linkedin.com/company/dreamfactoryfoundation"
            className="text-violet-950 transition-colors duration-300 hover:text-deep-purple-accent-400"
            target="_blank"
          >
           <FaLinkedin size={24} />
          </Link>
          
          <Link
            href="https://www.facebook.com/dreamfactoryfoundation/"
            className="text-violet-950 transition-colors duration-300 hover:text-deep-purple-accent-400"
            target="_blank"

          >
          <FaFacebook size={24} />
          </Link>
          <Link
            href="https://www.youtube.com/@dreamfactoryfoundation6760"
            className="text-violet-950 transition-colors duration-300 hover:text-deep-purple-accent-400"
            target="_blank"

          >
          <FaYoutube  size={24}/>
          </Link>
        </div>
        <p className="mt-4 text-sm text-gray-500">
         Follow us for current updates
        </p>
      </div>
    </div>
    <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
      <p className="text-sm text-gray-600">
        © Copyright {Year} Dream Factory Foundation. All rights reserved.
      </p>
      <Link
            href="https://github.com/de-mawo"
            className="text-violet-950 transition-colors duration-300 hover:text-deep-purple-accent-400"
            target="_blank"

          >
         Designed with 💜 by De Mawo
          </Link>
    </div>
  </div>
  );
};

export default Footer;