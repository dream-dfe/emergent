import { cn } from "@/lib/utils";
import Image from "next/image";

type ImpactStoryCardProps = {
  story: {person: string;
  org: string;
  img: string;
  testimony: string;}
};

const ImpactStoryCard = ({ story }: ImpactStoryCardProps) => {
    return (
      <>
        <div className="relative max-w-md max-h-94 rounded-md overflow-hidden">
          <div className="absolute bottom-0 w-full p-3 bg-violet-600 opacity-75 text-white">
            <p className="">{`"${story.testimony}"`}</p>
            <h4 className="font-semibold py-3">{story.person}</h4>
            <h4 className="text-xs">{story.org}</h4>
          </div>
          <Image
            src={story.img}
            alt={""}
            width={1152}
            height={896}
            className={cn(
              "w-full h-full object-cover transition-all hover:scale-105 aspect-square"
            )}
          />
        </div>
      </>
    );
  };

export default ImpactStoryCard;
