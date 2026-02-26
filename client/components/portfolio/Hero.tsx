import { motion, useMotionValue, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { siteConfig } from "@/data/config";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 min-h-screen flex flex-col items-center justify-center text-center">
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm mb-8 text-white/70">
            Welcome to my Portfolio
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-display font-black leading-[1.1] pb-6 mb-4 tracking-tight bg-gradient-to-br from-white via-white to-white/40 bg-clip-text text-transparent drop-shadow-sm">
            {siteConfig.heroTitle || "Graphic Designer & Creative Visualizer"}
          </h1>

          <p className="text-lg md:text-xl text-white/50 mb-12 max-w-2xl leading-relaxed font-light mx-auto drop-shadow-sm">
            {siteConfig.heroSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full px-8 py-6 text-base font-bold bg-white/5 text-white hover:bg-white hover:text-black transition-all duration-300 border border-white/10 hover:border-white shadow-lg cursor-pointer">
              <a href="#work">
                Explore Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-6 text-base font-bold bg-white text-black hover:bg-white/90 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] cursor-pointer border-none">
              <a href="#contact">Contact me</a>
            </Button>
          </div>

          <div className="mt-24 block w-full">
            <p className="text-sm text-white/40 mb-6 font-medium">Tools I use on a daily basis</p>
            <div className="flex flex-wrap gap-4 justify-center items-center">
              {[
                { name: "Photoshop", icon: "/tools/adobe-photoshop-svgrepo-com.svg" },
                { name: "Illustrator", icon: "/tools/adobe-illustrator-svgrepo-com.svg" },
                { name: "Figma", icon: "/tools/figma-svgrepo-com.svg" },
                { name: "Goodnotes", icon: "/tools/Goodnotes_id-EdCpFzc_1.svg" },
                { name: "Samsung Notes", icon: "/tools/Samsung_Notes_icon_2025.svg" }
              ].map((tool) => (
                <div key={tool.name} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300 cursor-default shadow-sm hover:shadow-primary/20">
                  <img src={tool.icon} alt={tool.name} className="w-5 h-5 object-contain opacity-100" />
                  <span className="font-medium">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative center glow instead of the right column */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 neon-glow rounded-full blur-[120px] pointer-events-none z-0 mix-blend-screen opacity-50" />
    </section>
  );
};
