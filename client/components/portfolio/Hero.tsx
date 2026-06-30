import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/config";
import { useState, useEffect } from "react";

// Dynamic asset loading for floating mosaic
const logoImages = import.meta.glob('@/assets/projects/logos/*', { eager: true, query: '?url', import: 'default' });
const thumbnailImages = import.meta.glob('@/assets/projects/thumbnails/*', { eager: true, query: '?url', import: 'default' });

const logoList = Object.values(logoImages) as string[];
const thumbnailList = Object.values(thumbnailImages) as string[];

// 3D Icons
import ps3d from "@/assets/icons/3d/ps_3d.png";
import ai3d from "@/assets/icons/3d/ai_3d.png";
import figma3d from "@/assets/icons/3d/figma_3d.png";
import ae3d from "@/assets/icons/3d/ae_3d.png";
import pr3d from "@/assets/icons/3d/pr_3d.png";

// Portrait photo
import portraitPhoto from "@/assets/about/tanjib dp.jpg";

// Tool SVGs
const toolIcons = {
  photoshop: "/tools/adobe-photoshop-svgrepo-com.svg",
  illustrator: "/tools/adobe-illustrator-svgrepo-com.svg",
  figma: "/tools/figma-svgrepo-com.svg",
  goodnotes: "/tools/Goodnotes_id-EdCpFzc_1.svg",
  samsungnotes: "/tools/Samsung_Notes_icon_2025.svg"
};

export const Hero = ({
  isHeaderFinished,
  setIsHeaderFinished
}: {
  isHeaderFinished: boolean,
  setIsHeaderFinished: (v: boolean) => void
}) => {
  useEffect(() => {
    setIsHeaderFinished(true);
  }, [setIsHeaderFinished]);

  // Select a few images
  const mosaicImages = [
    thumbnailList[0] || logoList[0],
    logoList[1] || thumbnailList[1],
    thumbnailList[2] || logoList[2],
    logoList[3] || thumbnailList[3],
  ].filter(Boolean);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background px-6 py-24 md:py-0">
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[5%] left-[10%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-start text-left"
          >
            {/* Badge */}
            <div className="flex items-center gap-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm px-4 py-2 mb-8 font-medium">
              <Sparkles className="w-4 h-4" />
              Available for new projects
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-extrabold text-white leading-tight mb-6">
              I'm <span className="font-script text-primary">Tanjib,</span>
              <br />
              Graphic Designer
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-white/60 font-sans mb-10 max-w-lg leading-relaxed">
              {siteConfig.heroSubtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Button asChild size="lg" className="rounded-full bg-primary text-white hover:bg-primary/90 px-8 py-4 font-bold text-base shadow-lg cursor-pointer group h-14">
                <a href="#work" className="flex items-center">
                  Explore My Work
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border border-white/10 bg-transparent text-white hover:border-primary/50 hover:bg-primary/10 px-8 py-4 font-bold text-base cursor-pointer h-14">
                <a href={siteConfig.resumeUrl} target="_blank" rel="noopener noreferrer">
                  View Resume
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Portrait Image + Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="w-full flex justify-center lg:justify-end relative"
          >
            {/* Orange glow behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/15 rounded-full blur-[100px] pointer-events-none" />

            {/* Portrait container */}
            <div className="relative w-full max-w-[420px]">
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[3/4] relative group">
                <img
                  src={portraitPhoto}
                  alt="Tanjib Ahmed — Graphic Designer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Stats Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute -left-6 bottom-16 sm:-left-10 rounded-2xl bg-card border border-white/5 p-4 shadow-xl backdrop-blur-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-display font-extrabold text-primary">4+</span>
                  <div className="flex flex-col">
                    <span className="text-xs text-white/50 font-sans">Years</span>
                    <span className="text-sm text-white font-semibold font-sans">Experience</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Projects Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="absolute -right-4 top-12 sm:-right-8 rounded-2xl bg-card border border-white/5 p-4 shadow-xl backdrop-blur-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-display font-extrabold text-primary">50+</span>
                  <div className="flex flex-col">
                    <span className="text-xs text-white/50 font-sans">Happy</span>
                    <span className="text-sm text-white font-semibold font-sans">Clients</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Tools Section at Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-24 w-full border-t border-white/5 pt-10 flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <span className="text-sm font-medium text-white/40 font-sans">
            Tools I use every day
          </span>
          <div className="flex flex-wrap gap-3 justify-center items-center">
            {[
              { img: toolIcons.photoshop, label: "Photoshop" },
              { img: toolIcons.illustrator, label: "Illustrator" },
              { img: toolIcons.figma, label: "Figma" },
              { img: toolIcons.goodnotes, label: "Goodnotes" },
              { img: toolIcons.samsungnotes, label: "Samsung Notes" }
            ].map((tool) => (
              <div
                key={tool.label}
                className="flex items-center gap-3 rounded-xl bg-card border border-white/5 px-4 py-2 transition-all duration-300 group cursor-default hover:border-primary/50 hover:bg-primary/10"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <img
                    src={tool.img}
                    alt={tool.label}
                    className="w-full h-full object-contain transition-all"
                  />
                </div>
                <span className="text-sm font-medium text-white/50 group-hover:text-white transition-colors font-sans">
                  {tool.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
