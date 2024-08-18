import Image from "next/image";
import { cn } from "@/lib/utils";

export default function PoweredByWit() {
  return (
    <div className="my-12">
      <h3 className="my-4 text-xl font-semibold">Powered By:</h3>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="max-h-48 max-w-md overflow-hidden rounded-md">
          <Image
            src="/img/partners/futuremakers.png"
            alt=""
            width={1280}
            height={853}
            className={cn(
              "-z-10 aspect-square h-full w-full object-cover transition-all hover:scale-105",
            )}
          />
        </div>
        <div className="max-h-48 max-w-md overflow-hidden rounded-md">
          <Image
            src="/img/dflogo.png"
            alt=""
            width={1280}
            height={853}
            className={cn(
              "-z-10 aspect-square h-full w-full object-cover transition-all hover:scale-105",
            )}
          />
        </div>
        <div className="max-h-48 max-w-md overflow-hidden rounded-md">
          <Image
            src="/img/partners/standard.png"
            alt=""
            width={1280}
            height={853}
            className={cn(
              "-z-10 aspect-square h-full w-full object-cover transition-all hover:scale-105",
            )}
          />
        </div>
      </div>
    </div>
  );
}
