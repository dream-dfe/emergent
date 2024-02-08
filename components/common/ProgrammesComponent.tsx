import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { ProgramDataType } from "@/types";
import Image from "next/image";
import Link from "next/link";

type Props = {
  data: ProgramDataType[];
};

const ProgrammesComponent = ({ data }: Props) => {

    const appUrl = process.env.NEXT_PUBLIC_APP_URL as string
  return (
    <Container>
      {data?.map((program) => (
        <section
          className="grid grid-cols-1 md:grid-cols-2   gap-4 my-24"
          key={program.title}
        >
          <div className="flex items-center justify-center">
            <Image
              src={program.imageSrc}
              width={1280}
              height={768}
              alt="accelerator"
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col ">
            <h2 className="mb-4 text-xl tracking-tight font-extrabold text-slate-800 ">
              {program.title}
            </h2>
            <p className="text-gray-500">{program.descr}</p>
            <p className="my-4">
              {" "}
              Programme Status:{" "}
              <span className=" text-gray-900 font-semibold">
                {" "}
                {program.status}
              </span>{" "}
            </p>
            {program.url ? (
              <Link href={program.url as string} target="_blank">
                <Button>Learn More & Apply</Button>
              </Link>
            ) : (
              <Link
                href={`${appUrl}/${program.pathUrl}/${program.slug}?id=${program.id}`}
              >
                <Button>{program.btnTitle}</Button>
              </Link>
            )}
          </div>
        </section>
      ))}
    </Container>
  );
};

export default ProgrammesComponent;
