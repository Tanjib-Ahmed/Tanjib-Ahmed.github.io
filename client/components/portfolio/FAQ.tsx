import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from "@/data/config";

export const FAQ = () => {
  return (
    <section className="py-16 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-7xl font-display font-black mb-12 text-center tracking-tighter bg-gradient-to-br from-violet-300 via-primary to-purple-400 bg-clip-text text-transparent pb-2">QUESTIONS <br className="md:hidden" /> & ANSWERS</h2>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {siteConfig.faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="glass-card rounded-[1.5rem] px-6 overflow-hidden group data-[state=open]:border-primary/50 transition-all duration-300 hover:border-primary/30">
              <AccordionTrigger className="text-lg md:text-xl font-display font-bold hover:no-underline py-6 text-left group-hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

