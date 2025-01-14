import { cn } from "@/lib/utils";
import { VideoType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function VideoCard({ video }: { video: VideoType }) {
  return (
    <Link
      className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg"
      href={`/courses/${video.slug}?id=${video.id}&title=${video.title}&videoId=${video.videoId}&description=${video.description}&banner=${video.banner}`}
    >
      <div className="aspect-video w-full overflow-hidden">
        <Image
          src={video.banner}
          alt={video.title}
          width={1280}
          height={720}
          className={cn(
            "h-full w-full object-cover transition-all group-hover:scale-105",
          )}
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-gray-900">{video.title}</h3>
        <p className="mb-4 line-clamp-2 text-sm text-gray-500">{video.description}</p>
        <div className="mt-auto flex flex-wrap gap-2">
          {video.hashtags && video.hashtags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              #{tag}
            </Badge>
          ))}
        </div>
      </div>
    </Link>
  );
}

