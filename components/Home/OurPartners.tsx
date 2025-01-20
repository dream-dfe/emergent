import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

// Define a TypeScript interface for partner data
interface Partner {
  src: string
  alt: string
}

const fundingPartners: Partner[] = [
  { src: "/img/partners/afrilabs_logo.png", alt: "Afrilabs" },
  { src: "/img/partners/lemonaid_logo.png", alt: "Lemonade" },
  { src: "/img/partners/ande_logo.png", alt: "Ande" },
  { src: "/img/partners/hci_logo.png", alt: "Hci" },
  { src: "/img/partners/google_logo.png", alt: "Google" },
  { src: "/img/partners/bowmans.png", alt: "Bowmans" },
]

const OurPartners = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 sm:text-4xl">Our Funding Partners</h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {fundingPartners.map((partner, index) => (
            <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-4 flex items-center justify-center h-40">
                <div className="relative w-full h-full">
                  <Image
                    src={partner.src || "/placeholder.svg"}
                    alt={partner.alt}
                    layout="fill"
                    objectFit="contain"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurPartners

