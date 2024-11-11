

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { User } from "@clerk/nextjs/server";
import Link from "next/link";

export function OurCommunityPopOver({ user }: { user: User}) {
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
              {user && (
                <Link
                  href="/bookings"
                  className="-m-3 flex items-center rounded-lg p-2 hover:bg-violet-100 focus:outline-none"
                >
                  Book a Mentor
                </Link>
              )}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
