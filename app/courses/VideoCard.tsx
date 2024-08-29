import { cn } from "@/lib/utils";
import { VideoType } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function VideoCard({ video }: { video: VideoType }) {
  return (
    <Link
      className="group relative flex flex-col rounded-md border border-violet-300 p-1"
      href={`/courses/${video.slug}?id=${video.id}&title=${video.title}&url=${video.url}&description=${video.description}&banner=${video.banner}`}
    >
      <div className="max-h-40 max-w-md overflow-hidden rounded-md">
        <Image
          src={video.banner}
          alt={""}
          width={1280}
          height={853}
          className={cn(
            "aspect-square w-auto object-cover transition-all hover:scale-105",
          )}
        />
      </div>
      <div className="mt-2 flex items-center justify-between text-xs md:text-base">
        <p className="line-clamp-1 font-semibold">{video.title}</p>
      </div>
      <div className="absolute inset-0 hidden cursor-pointer items-center justify-center rounded-md bg-violet-100 bg-opacity-75 transition-all hover:bg-opacity-50 group-hover:flex"></div>
    </Link>
  );
}
