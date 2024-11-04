"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export function OurCommunityPopOver() {
  return (
    <NavigationMenu className="z-20">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base font-semibold text-slate-600">
            Our Community
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex w-[200px] flex-col space-y-4 p-4">
              <Link
                href="/mentors"
                className="-m-3 flex items-center rounded-lg p-2 hover:bg-violet-100 focus:outline-none"
              >
                Mentors
              </Link>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
