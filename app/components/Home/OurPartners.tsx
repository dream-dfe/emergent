import Image from "next/image";

// Define a TypeScript interface for partner data
interface Partner {
  src: string;
  alt: string;
}

const fundingPartners: Partner[] = [
  { src: "/partners/allan.svg", alt: "Allan Gray" },
  { src: "/partners/lemonade.svg", alt: "Lemonade" },
  { src: "/partners/hlanganisa.svg", alt: "Hlanganisa" },
  { src: "/partners/google.png", alt: "Google" },
  { src: "/partners/bowmans.png", alt: "Bowmans" },
];

const implementingPartners: Partner[] = [
  { src: "/partners/nmk.svg", alt: "NMK" },
  { src: "/partners/bluavo.svg", alt: "Bluavo" },
  { src: "/partners/moonshot.svg", alt: "Moonshot" },
  { src: "/partners/meeticks.png", alt: "Meeticks" },
];

const OurPartners = () => {
  return (
    <section className="bg-white">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <h2 className="mb-8 lg:mb-16 text-3xl font-bold tracking-tight leading-tight text-center text-gray-900 md:text-4xl">
          Our Partners
        </h2>
        <div className="my-16">
          <h2 className="my-12 text-2xl text-center lg:text-3xl tracking-tight font-extrabold text-gray-600 underline">
            Funding Partners
          </h2>
          <div className="grid grid-cols-2 gap-8  text-gray-500  md:grid-cols-3 lg:grid-cols-6">
            {fundingPartners.map((partner, index) => (
              <Image
                key={index}
                src={partner.src}
                width={150}
                height={70}
                alt={partner.alt}
                className="grayscale hover:grayscale-0"
              />
            ))}
          </div>
        </div>
        <div className="my-16">
          <h2 className="my-12 text-2xl text-center lg:text-3xl tracking-tight font-extrabold text-gray-600 underline">
            Implementing Partners
          </h2>
          <div className="grid grid-cols-2 gap-8  text-gray-500  md:grid-cols-3 lg:grid-cols-4">
            {implementingPartners.map((partner, index) => (
              <Image
                key={index}
                src={partner.src}
                width={150}
                height={70}
                alt={partner.alt}
                className="grayscale hover:grayscale-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
