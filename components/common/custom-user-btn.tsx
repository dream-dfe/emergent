"use client";

import { UserButton } from "@clerk/nextjs";
import { LayoutDashboard } from "lucide-react";

export default function CustomUserBtn({ role }: { role: string }) {
  const isAdmin = role === "admin" || role === "manager";
  return (
    <UserButton>
      {isAdmin && (
        <UserButton.MenuItems>
          <UserButton.Link
            label="Dashboard"
            labelIcon={<LayoutDashboard className="h-4 w-4" />}
            href="/dashboard"
          />
        </UserButton.MenuItems>
      )}
    </UserButton>
  );
}
