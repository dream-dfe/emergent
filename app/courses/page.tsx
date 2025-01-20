import Image from "next/image";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { FloatingMessage } from "./floating-msg";
import YoutubeVid from "@/components/common/YoutubeVid";

const CoursesPage = () => {
  const clients = [
    { name: "Client 1", logo: "/img/partners/allangray.png" },
    { name: "Client 2", logo: "/img/partners/standardbank.png" },
    { name: "Client 3", logo: "/img/partners/ninty-one.png" },
    { name: "Client 4", logo: "/img/partners/lemonaid_logo.png" },
    { name: "Client 4", logo: "/img/partners/dafrica.png" },
    // Add more clients as needed
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="mb-8 text-3xl font-bold text-gray-900">
            Emergent Courses
          </h1>
          <section className="mb-12">
            {/* <h2 className="mb-4 text-2xl font-semibold text-gray-800">Our Academy</h2> */}
            <p className="mb-4 text-lg text-gray-600">
              Our Academy offers several business and personal development
              courses. If you are interested in learning about our courses,
              email us at{" "}
              <a
                href="mailto:dreams@dreamfactoryfoundation.africa"
                className="text-blue-600 hover:underline"
              >
                dreams@dreamfactoryfoundation.africa
              </a>
            </p>
          </section>

          <YoutubeVid
            videoId="KkTkRsMySX8"
            title="2024 WOMEN IN TECH TOP 40 BOOTCAMP"
          />

          <section className="my-12">
            <h2 className="my-6 text-2xl font-semibold text-gray-800">
              Clients We Have Worked With
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {clients.map((client) => (
                <div
                  key={client.name}
                  className="flex items-center justify-center rounded-lg bg-white p-4 shadow"
                >
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={`${client.name} logo`}
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <FloatingMessage />
    </div>
  );
};

export default CoursesPage;
