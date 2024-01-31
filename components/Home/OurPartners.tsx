import Image from "next/image";
import Container from "../common/Container";

// Define a TypeScript interface for partner data
interface Partner {
  src: string;
  alt: string;
}

const fundingPartners: Partner[] = [
  { src: "/img/partners/afrilabs_logo.png", alt: "Afrilabs" },
  { src: "/img/partners/lemonaid_logo.png", alt: "Lemonade" },
  { src: "/img/partners/ande_logo.png", alt: "Ande" },
  { src: "/img/partners/hci_logo.png", alt: "Hci" },
  { src: "/img/partners/google_logo.png", alt: "Google" },
  { src: "/img/partners/bowmans.png", alt: "Bowmans" },
];


const OurPartners = () => {
  return (
    <section className=" my-16 py-8 mx-3">
      <div className="flex justify-center items-center my-12">
        <h2 className=" font-sans text-3xl font-bold tracking-tight text-slate-600 sm:text-4xl sm:leading-none">
          Funding Partners
        </h2>
      </div>

      <div className="grid grid-cols-1 justify-items-center  sm:grid-cols-2   md:grid-cols-3 lg:grid-cols-6">
        {fundingPartners.map((partner, index) => (
          <div className="  w-28 h-28 overflow-hidden  " key={index}>
            <Image
              src={partner.src}
              width={100}
              height={100}
              alt={partner.alt}
              className="w-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPartners;
