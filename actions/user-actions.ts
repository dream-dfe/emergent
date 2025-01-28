"use server";

import { checkRole } from "@/lib/checkRoles";
import { AuthUser } from "@/types";
import { clerkClient } from "@clerk/nextjs/server";

export async function setRole(formData: FormData) {
  // Check that the user trying to set the role is an admin
  if (!checkRole("admin")) {
    return { message: "Not Authorized" };
  }

  try {
    const res = await (
      await clerkClient()
    ).users.updateUser(formData.get("id") as string, {
      publicMetadata: { role: formData.get("role") },
    });

    return { message: res.publicMetadata };
  } catch (err) {
    return { message: err };
  }
}

export async function getUsers(): Promise<AuthUser[]> {
  if (!checkRole("admin")) {
    console.error("Unauthorized: User is not an admin.");
    throw new Error("Unauthorized");
  }

  try {
    const res = await (await clerkClient()).users.getUserList();

    if (!res || !res.data) {
      throw new Error("Clerk API response is invalid.");
    }

    const filteredUsers: AuthUser[] = res.data.map((user: any) => ({
      id: user.id,
      banned: user.banned,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      imageUrl: user.imageUrl,
      hasImage: user.hasImage,
      lastSignInAt: user.lastSignInAt,
      firstName: user.firstName,
      lastName: user.lastName,
      publicMetadata: user.publicMetadata || {},
      emailAddresses: user.emailAddresses.map(
        (email: { emailAddress: string }) => email.emailAddress,
      ),
      phoneNumbers: user.phoneNumbers.map((phone: any) => phone.number),
      lastActiveAt: user.lastActiveAt,
    }));

    return filteredUsers;
  } catch (err) {
    console.error("Error in getUsers:", err);
    throw new Error("Error fetching users.");
  }
}
