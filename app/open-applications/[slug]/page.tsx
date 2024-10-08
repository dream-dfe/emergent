import Container from "@/components/common/Container";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { getProgrammeDataById } from "@/lib/fetchData";

export default async function OpenProgramPage({
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
    <Header/>
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
          <ul className="flex  flex-col space-y-4 ">
            {
              attributes?.map((att, i) => (
                <li key={i}>{att}</li>
              ))
            }
          </ul>


          </Container>
      </section>
      <Footer/>
    </>
  );
}
