import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ProgramesType } from "@/types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import Image from "next/image";
import EditProgram from "./EditProgram";

export default function ProgramCard({ program }: { program: ProgramesType }) {
  dayjs.extend(relativeTime);
  const timeago = dayjs().from(dayjs(program.updatedAt));
  return (
    <div className="flex flex-col rounded-md border border-violet-400 bg-white p-2">
      <div className="relative max-h-48 max-w-md overflow-hidden rounded-md">
        <Image
          src={program.bannerUrl as string}
          alt=""
          width={1280}
          height={853}
          className={cn(
            "-z-10 aspect-square h-full w-full object-cover transition-all hover:scale-105",
          )}
        />
      </div>

      <div className="">
        <h3 className="text-lg my-3 line-clamp-1">{program.title}</h3>

        <div className="capitalize space-x-2">
          <strong>Group:</strong>
          <Badge variant="outline">{program.group}</Badge>
        </div>

        <div className="capitalize space-x-2">
          <strong>Status:</strong>
          <Badge variant="outline">{program.status}</Badge>
        </div>
        <div className="flex justify-end">
          <EditProgram program={program} />
        </div>
        <div className="flex justify-end text-xs text-muted-foreground">
          <span>Last modified:</span> {timeago}
        </div>
      </div>
    </div>
  );
}
