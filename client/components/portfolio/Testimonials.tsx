import { motion } from "framer-motion";
import { siteConfig } from "@/data/config";

export const Testimonials = () => {
  const testimonials = siteConfig.testimonials || [];

  if (testimonials.length === 0) return null;

  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-24 bg-secondary/10 text-foreground relative overflow-hidden">
      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto relative z-10 px-6">
        <h2 className="text-4xl md:text-7xl font-display font-black mb-20 text-center tracking-tighter bg-gradient-to-br from-violet-300 via-primary to-purple-400 bg-clip-text text-transparent underline decoration-primary/20 underline-offset-8">
          TRUSTED BY LEADERS
        </h2>
      </div>

      <div className="flex relative overflow-hidden group">
        <div
          className="flex gap-8 animate-infinite-scroll group-hover:pause-scroll py-10"
          style={{ animationDuration: "50s" }}
        >
          {duplicatedTestimonials.map((t, i) => (
            <div
              key={`${t.id}-${i}`}
              className="w-[350px] md:w-[450px] flex-shrink-0 flex flex-col relative glass-card p-10 rounded-[2.5rem] hover:border-primary/30 transition-colors"
            >
              <div className="absolute -top-4 left-8 text-8xl font-display opacity-20 pointer-events-none text-primary font-black">"</div>
              <p className="text-lg md:text-xl font-medium mb-10 leading-relaxed italic text-muted-foreground relative z-10">
                {t.quote}
              </p>
              <div className="mt-auto pt-6 border-t border-white/5 flex flex-col gap-1">
                <p className="font-bold tracking-widest uppercase text-sm text-primary">{t.author}</p>
                <p className="text-[11px] opacity-60 uppercase tracking-[0.25em] font-medium">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
