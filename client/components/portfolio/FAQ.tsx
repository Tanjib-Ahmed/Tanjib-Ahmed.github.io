import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from "@/data/config";

export const FAQ = () => {
  return (
    <section className="py-16 px-6 relative overflow-hidden bg-background">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-12 text-center">
          Questions &{" "}
          <span className="font-script text-primary">Answers</span>
        </h2>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {siteConfig.faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="bg-card border border-white/5 rounded-2xl px-6 overflow-hidden group data-[state=open]:border-primary/50 transition-all duration-300 hover:border-primary/30">
              <AccordionTrigger className="text-lg font-display font-semibold hover:no-underline py-6 text-left text-white group-hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-white/60 leading-relaxed pb-6 font-sans">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
