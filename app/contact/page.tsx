import CTA from "@/components/common/CTA"

const ContactPage = () => {
  return (
    <><section className="">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Visit Our Offices
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Schedule a physical meeting with us
          </p>
        </div>
        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=370B%20Main%20Rd,%20Observatory,%20Cape%20Town,%207925+(Dream%20Factory%20Foundation)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="100%"
                height="480"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <div>
              <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                <div className="px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Our Address
                  </h3>
                  <p className="mt-1 text-gray-600">
                    370B Main Rd, Observatory, Cape Town, 7925.
                  </p>
                </div>
                <div className="border-t border-gray-200 px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <p className="mt-1 text-gray-600">
                    dreams@dreamfactoryfoundation.org
                  </p>
                </div>
                <div className="border-t border-gray-200 px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                  <p className="mt-1 text-gray-600">Phone: +27 67 786 7838</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section><CTA /></>
  )
}

export default ContactPage