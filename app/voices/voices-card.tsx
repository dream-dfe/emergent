import { cn } from "@/lib/utils";
import { VoiceType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

type VoiceCardProps = {
  voice: VoiceType;
};

const VoiceCard = ({ voice }: VoiceCardProps) => {
  return (
    <Link
      className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg"
      href={`/voices/${voice.slug}?id=${voice.id}`}
    >
      <div className="aspect-video w-full overflow-hidden">
        <Image
          src={voice.img || "/placeholder.svg"}
          alt={voice.title}
          width={1280}
          height={720}
          className={cn(
            "h-full w-full object-cover transition-all group-hover:scale-105",
          )}
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-2 line-clamp-1 text-lg font-semibold text-gray-900">{voice.title}</h3>
        <p className="mb-4 line-clamp-2 text-sm text-gray-500">{voice.facilitator}</p>
        <div className="mt-auto flex flex-wrap gap-2">
          {voice.hashtags && voice.hashtags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              #{tag}
            </Badge>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default VoiceCard;

