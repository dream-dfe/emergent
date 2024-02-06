import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const PastProgrammes = () => {
  return (
    <>
      <div className="text-center py-12 bg-violet-600">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white ">
          Past Programmes
        </h2>
      </div>
      <Container>
        <section className="grid grid-cols-1 md:grid-cols-2  gap-4 py-4">
          <div className="flex items-center justify-center">
            <Image
              src="/img/programs/wwd1.png"
              width={1280}
              height={768}
              alt="accelerator"
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col ">
            <h2 className="mb-4 text-xl tracking-tight font-extrabold text-slate-800 ">
              Emergent Women Program
            </h2>
            <p className="text-gray-500">
              Our Emergent Women Program equips young individuals, primarily
              women aged 18-25, with essential skills in entrepreneurship,
              personal development, and digital literacy. Participants engage in
              both in-person and online classes to acquire these competencies.
            </p>
            <p className="my-4">
              {" "}
              Programme Status:{" "}
              <span className=" text-gray-900 font-semibold">Past</span>{" "}
            </p>
            <Link href="https://dreamfactory.africa/" target="_blank">
              <Button>Learn More & Apply</Button>
            </Link>
          </div>
        </section>
      </Container>
    </>
  );
};

export default PastProgrammes;
