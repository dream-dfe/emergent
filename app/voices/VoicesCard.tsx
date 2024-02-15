import { FaYoutube } from "react-icons/fa";
import { VoiceType } from "@/types";
import Image from "next/image";
import Link from "next/link";


type VoiceCardProps = {
  voice: VoiceType;
};

const VoiceCard = ({ voice }: VoiceCardProps) => {
  return (
    <div className="relative p-3 group shadow-md rounded-md">
      <div className="max-h-60  rounded-md  overflow-hidden relative">
        <Image
          src={voice.img}
          alt={""}
          width={8250}
          height={4250}
          className=" w-full object-cover transition-all hover:scale-105 aspect-square"
        />
        <div className="hidden absolute inset-0 items-center justify-center bg-slate-200 bg-opacity-75 hover:bg-opacity-50 transition-all group-hover:flex">
          <Link
            className="text-rose-500 "
            href={`/voices/${voice.slug}?id=${voice.id}`}
          >
            <FaYoutube size={40} />
          </Link>
        </div>
      </div>
     
      
      <div className="flex flex-col items-start justify-start">
      <p className=" text-xl tracking-tight font-extrabold">{voice.title}</p>
      <p className=" font-semibold">{voice.facilitator}</p>
  </div>
    </div>
  );
};

export default VoiceCard;
