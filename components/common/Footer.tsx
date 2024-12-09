import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin, Youtube } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-violet-950 text-white">
      <div className="container mx-auto space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/img/dflogo.png"
                width={50}
                height={50}
                alt="Emergent Academy logo"
                className="h-12 w-12"
              />
              <h4 className="text-lg font-semibold text-white">Emergent Academy</h4>
            </div>
            <p className="max-w-xs text-gray-300">
              Emergent Academy is an entrepreneurial ecosystem that supports
              youth entrepreneurs to conceptualize, build and scale sustainable
              businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
            <div className="space-y-4">
              <h5 className="text-lg font-medium text-white">Quick Links</h5>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/active-programmes"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    Programs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h5 className="text-lg font-medium text-white">Contact Us</h5>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="text-gray-300">Phone:</span>
                  <a
                    href="tel:26772674075"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    +267 72 674 075
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-gray-300">Email:</span>
                  <a
                    href="mailto:bots@dreamfactoryfoundation.org"
                    className="text-gray-300 transition-colors text-sm hover:text-white"
                  >
                    bots@dreamfactoryfoundation.org
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h5 className="text-lg font-medium text-white">Follow Us</h5>
              <div className="flex space-x-4">
                <Link
                  href="https://www.linkedin.com/company/dreamfactoryfoundation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon" className="text-white hover:text-violet-200 hover:bg-violet-900">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link
                  href="https://www.facebook.com/dreamfactoryfoundation/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon" className="text-white hover:text-violet-200 hover:bg-violet-900">
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </Button>
                </Link>
                <Link
                  href="https://www.youtube.com/@dreamfactoryfoundation6760"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon" className="text-white hover:text-violet-200 hover:bg-violet-900">
                    <Youtube className="h-5 w-5" />
                    <span className="sr-only">YouTube</span>
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-gray-300">
                Follow us for current updates
              </p>
            </div>
          </div>
        </div>

        <Separator className="bg-violet-800" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-300">
            © {Year} Dream Factory Foundation. All rights reserved.
          </p>
          <Link
            href="https://github.com/de-mawo"
            className="text-sm text-gray-300 transition-colors hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Designed with 💜 by De Mawo
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

