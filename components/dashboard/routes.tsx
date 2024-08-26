"use client";

import { HiOutlineHome, HiOutlineUserGroup } from "react-icons/hi2";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { LuLayoutGrid } from "react-icons/lu";

export const AdminRoutes = [
  {
    title: "Home",
    href: "/",
    icon: IoHomeOutline,
  },
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LuLayoutGrid,
  },
  {
    title: "Users",
    href: "/dashboard/users",
    icon: HiOutlineUserGroup,
  },

  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: IoSettingsOutline,
  },
];

export const UserRoutes = [{ title: "Home", href: "/", icon: HiOutlineHome }];
