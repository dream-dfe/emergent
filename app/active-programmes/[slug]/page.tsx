import Container from "@/components/common/Container";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { Button } from "@/components/ui/button";
import { getProgrammeDataById } from "@/lib/fetchData";
import Link from "next/link";

export default async function ActiveProgramPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedSearchParams = await searchParams;

  const id = resolvedSearchParams.id as string;
  const programme = await getProgrammeDataById(id);
  const img = programme?.imageSrc;
  const attributes = programme?.attributes as string[];

  return (
    <>
      <Header />
      <div
        className="relative flex h-[30vh] items-center justify-center bg-cover bg-no-repeat bg-blend-saturation sm:h-[70vh]"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute inset-0 bg-violet-700 py-8 text-white opacity-50"></div>
      </div>
      <section className="my-12">
        <Container>
          <h1 className="my-8 text-4xl font-extrabold leading-none tracking-normal md:tracking-tight">
            {programme?.title}
          </h1>
          <p className="my-5">{programme?.descr}</p>
          <div className="flex flex-col space-y-4">
            {programme?.longDescr.map((prog, i) => (
              <p key={i} className="text-justify">
                {prog}
              </p>
            ))}
          </div>
          <ul className="my-8 flex flex-col space-y-3">
            {attributes?.map((att, i) => <li key={i}>{att}</li>)}
          </ul>
          <div>
            <Link href={programme?.website as string} target="_blank">
              <Button>Contact Us / Apply</Button>
            </Link>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
}
