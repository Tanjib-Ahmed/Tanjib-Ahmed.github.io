import { motion } from "framer-motion";
import { siteConfig } from "@/data/config";

export const Testimonials = () => {
  const testimonials = siteConfig.testimonials || [];

  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto relative z-10 px-6 max-w-5xl">
        {/* Gradient backdrop */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background rounded-3xl -z-10" />

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-16 md:mb-24 text-center leading-tight">
          Testimonials That{" "}
          <span className="font-script text-primary">Speak to My Results</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col relative bg-card/80 backdrop-blur border border-white/5 p-8 md:p-12 rounded-2xl hover:border-primary/50 transition-all duration-300"
            >
              <div className="absolute top-6 left-8 text-6xl font-script opacity-30 pointer-events-none text-primary">"</div>
              <p className="text-base md:text-lg font-sans mb-10 leading-relaxed italic text-white/70 relative z-10 pt-4">
                {t.quote}
              </p>
              <div className="mt-auto pt-6 border-t border-white/5 flex flex-col gap-1">
                <p className="font-bold text-sm text-primary">{t.author}</p>
                <p className="text-xs text-white/40 font-sans">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
