import CTA from "@/components/common/CTA";
import ContactForm from "./ContactForm";

const ContactPage = () => {
  return (
    <>
      <section className="relative flex h-[30vh] items-center justify-center bg-[url('/img/hero-img.png')] bg-cover bg-no-repeat bg-blend-saturation sm:h-[70vh]">
        <div className="absolute inset-0 bg-violet-700 py-8 text-white opacity-50"></div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="">
          <h2 className="my-4 text-center text-3xl font-extrabold text-gray-900 lg:text-5xl">
            CONTACT US
          </h2>
          <p className="my-6 text-gray-600">
            We’d enjoy hearing from you, so please feel free to contact us at{" "}
          </p>
        </div>
        <div className="my-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-lg">
              <div className="">
                <h3 className="text-lg font-medium text-gray-900">
                  South Africa
                </h3>
                <p className="mt-1 text-gray-600">
                  dreams@dreamfactoryfoundation.org
                </p>
              </div>
            </div>
            <div>
              <div className="">
                <h3 className="text-lg font-medium text-gray-900">Botswana</h3>
                <p className="mt-1 text-gray-600">
                  bots@dreamfactoryfoundation.org
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
      <CTA />
    </>
  );
};

export default ContactPage;
