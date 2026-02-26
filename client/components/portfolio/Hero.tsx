import { motion, useMotionValue, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { siteConfig } from "@/data/config";

export const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX - innerWidth / 2) / 25);
      mouseY.set((clientY - innerHeight / 2) / 25);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 px-6 overflow-hidden min-h-[90vh] flex items-center">
      {/* Interactive Background Decor */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[100px] opacity-40 mix-blend-screen pointer-events-none"
      />
      <motion.div
        style={{ x: useSpring(useMotionValue(0), { stiffness: 40, damping: 20 }), y: useSpring(useMotionValue(0), { stiffness: 40, damping: 20 }) }}
        className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[80px] opacity-30 mix-blend-screen animate-pulse pointer-events-none"
      />

      {/* Mouse Follower Dot */}
      <motion.div
        style={{ x: mouseX, y: mouseY }}
        className="fixed top-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10 mix-blend-screen"
      />

      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-8xl font-display font-black leading-[1.1] pb-6 mb-6 tracking-tight">
              Visualizing the <br />
              <span className="text-gradient hover:text-purple-400 transition-colors duration-500 cursor-default bg-[length:200%_auto] hover:bg-[position:100%_center]">Future of Digital</span> <br />
              Identity.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              {siteConfig.heroSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="rounded-full px-12 py-8 text-xl group bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25 cursor-pointer">
                <a href="#work">
                  Explore Work
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-12 py-8 text-xl border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300 backdrop-blur-sm cursor-pointer">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
