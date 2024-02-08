"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const OurResourcesPopOver = () => {
  return (
    <NavigationMenu className="">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-semibold text-base text-slate-600">
            Our Resources
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex flex-col w-[200px] space-y-4 p-4  ">
              <Link
                href="/voices"
                className="-m-3 flex items-center rounded-lg p-2  hover:bg-violet-100 focus:outline-none "
              >
               Emergent Voices
              </Link>
              <Link
                href="/courses"
                className="-m-3 flex items-center rounded-lg p-2  hover:bg-violet-100 focus:outline-none "
              >
                Emergent Courses
              </Link>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default OurResourcesPopOver;
