import Link from "next/link";
import { Button } from "@/components/ui/button";


const CTA = () => {
  return (
    <section className="bg-violet-200">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-2xl font-bold  md:text-3xl">
            Help us make a difference
          </h2>
        </div>

        <div className="mx-auto mt-8 max-w-sm">
          <Link href='https://dreamfactory.africa/partner/' target="_blank">
          <Button className="w-full"> {`"Support Our Work"`} </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
