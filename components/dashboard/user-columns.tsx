"use client";

import dayjs from "dayjs";
import { ColumnDef } from "@tanstack/react-table";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Checkbox } from "../ui/checkbox";
import { AuthUser } from "@/types";
import EditUserRole from "./EditUserRole";

export const userColumns: ColumnDef<AuthUser>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value: any) =>
          table.toggleAllPageRowsSelected(!!value)
        }
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "imageUrl",
    header: "Image",
    cell: ({ row }) => {
      const { imageUrl } = row.original;
      return (
        <Avatar>
          <AvatarImage src={imageUrl as string} alt="avatar" />
          <AvatarFallback>U </AvatarFallback>
        </Avatar>
      );
    },
  },
  {
    accessorKey: "firstName",
    header: "Name",
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
  },
  {
    header: "Email",
    cell: ({ row }) => {
      const { emailAddresses } = row.original;
      const email = emailAddresses[0] as unknown as string;
      return <div>{email}</div>;
    },
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {
      const { publicMetadata } = row.original;

      return <div>{publicMetadata.role}</div>;
    },
  },
  {
    accessorKey: "id",
    header: "Edit Role",
    cell: ({ row }) => {
      const { id, publicMetadata, firstName } = row.original;

      const role = publicMetadata?.role;

      return <EditUserRole id={id} role={role} name={firstName} />;
    },
  },
  {
    accessorKey: "createdAt",
    header: "Registered",
    cell: ({ row }) => {
      const { createdAt } = row.original;
      const displayDate = dayjs(createdAt).format("DD-MM-YYYY : HH:mm:ss");
      return <div>{displayDate}</div>;
    },
  },
  {
    accessorKey: "updatedAt",
    header: "Updated",
    cell: ({ row }) => {
      const { updatedAt } = row.original;
      const displayDate = dayjs(updatedAt).format("DD-MM-YYYY : HH:mm:ss");
      return <div>{displayDate}</div>;
    },
  },
];
