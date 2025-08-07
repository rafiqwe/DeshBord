"use client";

import { Button } from "@/components/ui/button";import {
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown} from "lucide-react";

export type Payment = {
  id: string;
  amount: number;
  username: string;
  email: string;
  status: "pending" | "processing" | "success" | "failed";
};

export const columns: ColumnDef<Payment>[] = [
//   {
//     id: "select",
//     header: ({ table }) => (
//       <Checkbox
//         onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
//         checked={
//           table.getIsAllPageRowsSelected() ||
//           (table.getIsSomePageRowsSelected() && "indeterminate")
//         }
//       />
//     ),
//     cell: ({ row }) => (
//       <Checkbox
//         onCheckedChange={(value) => row.toggleSelected(!!value)}
//         checked={row.getIsSelected()}
//       />
//     ),
//   },
  {
    accessorKey: "username",
    header: "User",
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },

];