import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
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

// Tool SVGs
const toolIcons = {
  photoshop: "/tools/adobe-photoshop-svgrepo-com.svg",
  illustrator: "/tools/adobe-illustrator-svgrepo-com.svg",
  figma: "/tools/figma-svgrepo-com.svg",
  goodnotes: "/tools/Goodnotes_id-EdCpFzc_1.svg",
  samsungnotes: "/tools/Samsung_Notes_icon_2025.svg"
};

const letterVariants = {
  hidden: { opacity: 0, y: 5 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2 }
  },
};

const TypewriterText = ({ text, className = "" }: { text: string, className?: string }) => (
  <>
    {text.split("").map((char, i) => (
      <motion.span
        key={i}
        variants={letterVariants}
        className={`inline-block ${className}`}
        style={{ whiteSpace: char === " " ? "pre" : "normal" }}
      >
        {char}
      </motion.span>
    ))}
  </>
);

export const Hero = ({
  isHeaderFinished,
  setIsHeaderFinished
}: {
  isHeaderFinished: boolean,
  setIsHeaderFinished: (v: boolean) => void
}) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const y3 = useTransform(scrollY, [0, 500], [0, -80]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  // Select a few images for the mosaic
  const mosaicImages = [
    thumbnailList[0] || logoList[0],
    logoList[1] || thumbnailList[1],
    thumbnailList[2] || logoList[2],
    logoList[3] || thumbnailList[3],
  ].filter(Boolean);

  const typewriterVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const cardRevealVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: (custom: { rotate: number, x: number }) => ({
      opacity: 1,
      scale: 1,
      rotate: custom.rotate,
      x: custom.x,
      transition: { duration: 1, ease: "easeOut" }
    })
  };

  return (
    <section className="relative pt-32 pb-24 md:pt-56 md:pb-48 px-6 min-h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden bg-[#0A0A0A]">
      {/* Background Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-5%] left-[-5%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[140px] mix-blend-screen opacity-70" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[50%] h-[50%] bg-purple-500/20 rounded-full blur-[140px] mix-blend-screen opacity-70" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
      </div>

      {/* Floating Project Mosaic (Hanzo Style) */}
      <div className="absolute inset-0 pointer-events-none z-10 hidden lg:block">
        {/* Card 1 - Top Left */}
        <motion.div
          style={{ y: y1 }}
          variants={cardRevealVariants}
          custom={{ rotate: -8, x: 0 }}
          initial="hidden"
          animate={isHeaderFinished ? "visible" : "hidden"}
          className="absolute top-[20%] left-[8%] w-64"
        >
          <motion.div
            animate={isHeaderFinished ? { y: [0, -20, 0] } : { y: 0 }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            className="w-full aspect-[4/3] rounded-[32px] overflow-hidden border border-white/10 shadow-2xl bg-[#1A1A1A] group"
          >
            <img src={mosaicImages[0]} alt="Project 1" className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" />
          </motion.div>
        </motion.div>

        {/* Card 2 - Bottom Left */}
        <motion.div
          style={{ y: y2 }}
          variants={cardRevealVariants}
          custom={{ rotate: 6, x: 0 }}
          initial="hidden"
          animate={isHeaderFinished ? "visible" : "hidden"}
          className="absolute bottom-[20%] left-[12%] w-56"
        >
          <motion.div
            animate={isHeaderFinished ? { y: [0, -15, 0] } : { y: 0 }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
            className="w-full aspect-square rounded-[32px] overflow-hidden border border-white/10 shadow-2xl bg-[#1A1A1A] group"
          >
            <img src={mosaicImages[1]} alt="Project 2" className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" />
          </motion.div>
        </motion.div>

        {/* Card 3 - Top Right */}
        <motion.div
          style={{ y: y3 }}
          variants={cardRevealVariants}
          custom={{ rotate: 12, x: 0 }}
          initial="hidden"
          animate={isHeaderFinished ? "visible" : "hidden"}
          className="absolute top-[25%] right-[8%] w-60"
        >
          <motion.div
            animate={isHeaderFinished ? { y: [0, -18, 0] } : { y: 0 }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="w-full aspect-video rounded-[32px] overflow-hidden border border-white/10 shadow-2xl bg-[#1A1A1A] group"
          >
            <img src={mosaicImages[2]} alt="Project 3" className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" />
          </motion.div>
        </motion.div>

        {/* Card 4 - Bottom Right */}
        <motion.div
          style={{ y: y1 }}
          variants={cardRevealVariants}
          custom={{ rotate: -4, x: 0 }}
          initial="hidden"
          animate={isHeaderFinished ? "visible" : "hidden"}
          className="absolute bottom-[15%] right-[10%] w-64"
        >
          <motion.div
            animate={isHeaderFinished ? { y: [0, -22, 0] } : { y: 0 }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
            className="w-full aspect-[3/4] rounded-[32px] overflow-hidden border border-white/10 shadow-2xl bg-[#1A1A1A] group"
          >
            <img src={mosaicImages[3]} alt="Project 4" className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" />
          </motion.div>
        </motion.div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isHeaderFinished ? "visible" : "hidden"}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[11px] sm:text-[13px] mb-8 text-white/50 backdrop-blur-md shadow-sm font-medium tracking-tight"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            Booking Open - Available for new projects
          </motion.div>

          <motion.h1
            variants={typewriterVariants}
            initial="hidden"
            animate="visible"
            onAnimationComplete={() => setIsHeaderFinished(true)}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-[110px] font-display font-black leading-[1.1] sm:leading-[1] mb-8 tracking-[-0.04em] text-white break-words"
          >
            <TypewriterText text="Tanjib Ahmed " />
            <br />
            <TypewriterText text="Graphic Designer" className="text-primary" />
          </motion.h1>

          <motion.p
            variants={itemVariants}
            initial="hidden"
            animate={isHeaderFinished ? "visible" : "hidden"}
            className="text-lg md:text-xl text-white/40 mb-12 max-w-2xl leading-relaxed font-medium mx-auto"
          >
            {siteConfig.heroSubtitle}
          </motion.p>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isHeaderFinished ? "visible" : "hidden"}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button asChild size="lg" className="h-16 rounded-full px-10 text-lg font-bold bg-white text-black hover:bg-primary hover:text-white transition-all duration-300 shadow-xl cursor-pointer group">
              <a href="#work" className="flex items-center">
                Check our work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isHeaderFinished ? "visible" : "hidden"}
            className="mt-32 w-full max-w-5xl flex flex-col items-center gap-12"
          >
            <span className="text-sm font-bold text-white/30 tracking-tight">Tools I use every day</span>
            <div className="flex flex-wrap gap-4 justify-center items-center">
              {[
                { img: toolIcons.photoshop, label: "Photoshop" },
                { img: toolIcons.illustrator, label: "Illustrator" },
                { img: toolIcons.figma, label: "Figma" },
                { img: toolIcons.goodnotes, label: "Goodnotes" },
                { img: toolIcons.samsungnotes, label: "Samsung Notes" }
              ].map((tool, i) => (
                <motion.div
                  key={tool.label}
                  whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.05)" }}
                  className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/5 bg-white/[0.02] transition-colors group cursor-default shadow-lg backdrop-blur-sm"
                >
                  <div className="w-6 h-6 flex items-center justify-center">
                    <img
                      src={tool.img}
                      alt={tool.label}
                      className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all"
                    />
                  </div>
                  <span className="text-[14px] font-bold text-white/50 group-hover:text-white transition-colors">
                    {tool.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
