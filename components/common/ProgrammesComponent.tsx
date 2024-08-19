import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { ProgramDataType } from "@/types";
import Image from "next/image";
import Link from "next/link";

type Props = {
  data: ProgramDataType[];
};

const ProgrammesComponent = ({ data }: Props) => {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL as string;
  return (
    <Container>
      {data?.map((program) => (
        <section
          className="mx-auto my-24 grid max-w-screen-xl grid-cols-1 gap-4 md:grid-cols-2"
          key={program.title}
        >
          <div className="flex max-h-80 items-center justify-center overflow-hidden">
            <Image
              src={program.imageSrc}
              width={1280}
              height={768}
              alt="accelerator"
              className="aspect-square h-full w-full object-cover transition-all hover:scale-105"
            />
          </div>
          <div className="flex flex-col">
            <h2 className="mb-4 text-xl font-extrabold tracking-tight text-slate-800">
              {program.title}
            </h2>
            <p className="text-gray-500 text-justify">{program.descr}</p>
            <p className="my-4">
              {" "}
              Programme Status:{" "}
              <span className="font-semibold text-gray-900">
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
