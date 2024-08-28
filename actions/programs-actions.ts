"use server";

import { db } from "@/db/drizzle";
import { programmes } from "@/db/schema";
import { checkRole } from "@/lib/checkRoles";
import { toSlug } from "@/lib/utils";
import { programmesSchema } from "@/lib/validations";
import { Roles } from "@/types";
import { put } from "@vercel/blob";
import { redirect } from "next/navigation";
import path from "path";

export async function createProgramme(formData: FormData) {
  // Check if the user has the required roles
  if (!["admin", "manager"].some((role) => checkRole(role as Roles))) {
    return { message: "Not Authorized" };
  }

  // Parse form data using the schema
  const values = Object.fromEntries(formData.entries());
  const { title, intro, description, status, banner } =
    programmesSchema.parse(values);

  // Generate slug from the title
  const slug = toSlug(title);

  // Initialize variables
  let bannerUrl: string | undefined;
  let group: string;

  // Upload banner if it exists
  if (banner) {
    const blob = await put(
      `banners/${slug}${path.extname(banner.name)}`,
      banner,
      {
        access: "public",
        addRandomSuffix: false,
      },
    );
    bannerUrl = blob.url;
  }

  // Determine the group based on status
  const statusGroups: Record<string, string> = {
    open: "open-applications",
    active: "active-programmes",
    past: "past-programmes",
  };
  group = statusGroups[status];

  type NewProgramme = typeof programmes.$inferInsert;

  const newProg: NewProgramme = {
    title,
    intro,
    description: description || "",
    slug,
    status,
    bannerUrl,
    group,
  };
  await db.insert(programmes).values(newProg);

  // Redirect to the programmes dashboard
  redirect("/dashboard/programmes");
}
