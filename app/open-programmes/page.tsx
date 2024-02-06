import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { ActiveProgramsData, OpenProgramsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const OpenProgrammes = () => {
  return (
    <>
    <div className="text-center py-12 bg-violet-600">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white ">
        Open Programmes
      </h2>
    </div>
    <Container>

       {OpenProgramsData.map((program) => (
        <section
          className="grid grid-cols-1 md:grid-cols-2  gap-4 py-4"
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
            <Link href={program.url} target="_blank">
              <Button>Learn More & Apply</Button>
            </Link>
          </div>
        </section>
      ))}
    </Container>
  </>
  )
}

export default OpenProgrammes