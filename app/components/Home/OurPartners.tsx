import Image from "next/image";
import Container from "../common/Container";

// Define a TypeScript interface for partner data
interface Partner {
  src: string;
  alt: string;
}

const fundingPartners: Partner[] = [
  { src: "/img/partners/allan.svg", alt: "Allan Gray" },
  { src: "/img/partners/lemonade.svg", alt: "Lemonade" },
  { src: "/img/partners/hlanganisa.svg", alt: "Hlanganisa" },
  { src: "/img/partners/google.png", alt: "Google" },
  { src: "/img/partners/bowmans.png", alt: "Bowmans" },
];

const implementingPartners: Partner[] = [
  { src: "/partners/nmk.svg", alt: "NMK" },
  { src: "/partners/bluavo.svg", alt: "Bluavo" },
  { src: "/partners/moonshot.svg", alt: "Moonshot" },
  { src: "/partners/meeticks.png", alt: "Meeticks" },
];

const OurPartners = () => {
  return (
    <Container>
      <section className="py-16">

     
      <div className="flex justify-center items-center my-12">
        <h2 className=" font-sans text-3xl font-bold tracking-tight text-slate-600 sm:text-4xl sm:leading-none">
          Funding Partners
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-8  text-gray-500  md:grid-cols-3 lg:grid-cols-6">
        {fundingPartners.map((partner, index) => (
          <Image
            key={index}
            src={partner.src}
            width={150}
            height={70}
            alt={partner.alt}
            className=""
          />
        ))}
      </div>
      </section>
    </Container>
  );
};

export default OurPartners;
