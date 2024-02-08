import { FaYoutube } from "react-icons/fa";
import { lectureType } from "@/types";
import Image from "next/image";
import Link from "next/link";

type lectureCardProps = {
  lecture: lectureType;
};

const LectureCard = ({ lecture }: lectureCardProps) => {
  return (
    <div className="relative group ">
      <div className=" max-h-40 rounded-md  overflow-hidden relative">
        <Image
          src={lecture.img}
          alt={""}
          width={640}
          height={420}
          className=" w-full object-cover transition-all hover:scale-105 aspect-square"
        />
        <div className="hidden absolute inset-0 items-center justify-center bg-slate-200 bg-opacity-75 hover:bg-opacity-50 transition-all group-hover:flex">
          <Link
            className="text-rose-500 "
            href={`/lectures/${lecture.slug}?id=${lecture.id}&module=${lecture.module}&img=${lecture.img}&lecture=${lecture.lecture}&url=${lecture.url}&facilitator=${lecture.facilitator}`}
          >
            <FaYoutube size={40} />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-between mt-2 ">
        <p className="">{lecture.title}</p>
        <span className="">{lecture.lecture}</span>
      </div>
      <div className="flex items-center justify-between text-xs">
        <p className=" font-semibold">Module: {lecture.module}</p>
        <p className=" font-semibold">Facilitator: {lecture.facilitator}</p>
      </div>
    </div>
  );
};

export default LectureCard;
