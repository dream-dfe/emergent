

import Image from "next/image";


const Year = new Date().getFullYear();
const Footer = () => {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
    <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
      <div className="sm:col-span-2">
      <Image src="/img/emergent-logob.png" width={50} height={50} alt="logo" />
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
          <a
            href="https://www.linkedin.com/company/dreamfactoryfoundation"
            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          
          <a
            href="https://www.facebook.com/dreamfactoryfoundation/"
            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
              <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
            </svg>
          </a>
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
      
    </div>
  </div>
  );
};

export default Footer;