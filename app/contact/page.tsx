import CTA from "@/components/common/CTA";
import ContactForm from "./ContactForm";

const ContactPage = () => {
  return (
    <>
      <section className="relative  flex items-center justify-center h-[30vh] sm:h-[70vh] bg-[url('/img/hero-img.png')] bg-no-repeat bg-cover bg-blend-saturation ">
        <div className="absolute inset-0 bg-violet-700 text-white py-8 opacity-50"></div>
      </section>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="">
          <h2 className="text-3xl my-4 text-center font-extrabold text-gray-900 lg:text-5xl">
            CONTACT US
          </h2>
          <p className="my-6 text-gray-600">
            We’d enjoy hearing from you, so please feel free to contact us at{" "}
          </p>
        </div>
        <div className="my-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden">
              <div className="">
                <h3 className="text-lg font-medium text-gray-900">
                  South Africa
                </h3>
                <p className="mt-1 text-gray-600">
                  bots@dreamfactoryfoundation.org
                </p>
              </div>
            </div>
            <div>
              <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                <div className="">
                  <h3 className="text-lg font-medium text-gray-900">
                    Botswana
                  </h3>
                  <p className="mt-1 text-gray-600">
                    dreams@dreamfactoryfoundation.org
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <ContactForm/>
      <CTA />
    </>
  );
};

export default ContactPage;
