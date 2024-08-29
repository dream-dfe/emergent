import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { witFaqs } from "@/lib/data";

export default function FAQsWit() {
  return (
    <>
      <h3 className="my-4 text-xl font-semibold">
        Frequently Asked Questions (FAQs)
      </h3>

      <Accordion type="single" collapsible>
        {witFaqs.map((faq) => (
          <AccordionItem value={faq.group} key={faq.group}>
            <AccordionTrigger>{faq.group}</AccordionTrigger>
            <AccordionContent>
              {faq.qas.map((item, i) => (
                <div key={i}>
                  <h3 className="my-2 font-semibold">{item.q}</h3>
                  <ul className="list-disc pl-5">
                    {item.as.map((ans, i) => (
                      <li key={i}>{ans}</li>
                    ))}
                  </ul>
                </div>
              ))}
              
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
