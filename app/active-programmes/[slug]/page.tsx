import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { getProgrammeDataById } from "@/lib/fetchData";
import Link from "next/link";

export default async function ActiveProgramPage({
    params,
    searchParams,
  }: {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
  }) {
    const id = searchParams.id as string;
  const programme = await getProgrammeDataById(id);
  const img = programme?.imageSrc;
  const attributes = programme?.attributes as string[]

  return (
    <>
      <div
        className="relative  flex items-center justify-center h-[30vh] sm:h-[70vh]  bg-no-repeat bg-cover bg-blend-saturation "
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute inset-0 bg-violet-700 text-white py-8 opacity-50"></div>
       
      </div>
      <section className="my-12">
        <Container> 
        <h1 className="my-8 text-4xl font-extrabold leading-none tracking-normal  md:tracking-tight">
          {programme?.title}
        </h1>
        <p className="my-5">{programme?.descr}</p>
          <div className="flex  flex-col space-y-4 ">
            {
              programme?.longDescr.map((prog, i) => (
                <p key={i}>{prog}</p>
              ))
            }
          </div>
          <ul className="flex  flex-col space-y-3 my-8 ">
            {
              attributes?.map((att, i) => (
                <li key={i}>{att}</li>
              ))
            }
          </ul>
              <div>
                <Link href={programme?.website as string} target="_blank">
                  <Button>
                    Contact Us / Apply 
                  </Button>
                </Link>
              </div>
          </Container>
      </section>
    </>
  );
} 