'use client'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { Icon } from "./IconComponent";
import Link from "next/link";
import { ourworkLinks } from "@/lib/links";



export default function HeaderPopOver() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-semibold text-base text-slate-600">
            What we do
          </NavigationMenuTrigger>
          <NavigationMenuContent >
            <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {ourworkLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-violet-100 focus:outline-none "
                >
                  <div className="ml-4">
                    <p className="text-sm font-bold ">
                      {item.name}:
                    </p>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className=" p-4">
              <a
                href="##"
                className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-violet-100  "
              >
                <span className="flex items-center">
                  <span className="text-sm font-medium text-gray-500">
                    Emergent Academy
                  </span>
                </span>
                <span className="block text-sm text-gray-400">
                  ... an entrepreneurial ecosystem that supports youth
                </span>
              </a>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}