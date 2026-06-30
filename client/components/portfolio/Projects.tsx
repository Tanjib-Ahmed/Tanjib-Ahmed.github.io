import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { OtherDesigns } from "./OtherDesigns";

// Dynamic asset loading
const logoImages = import.meta.glob('@/assets/projects/logos/*', { eager: true, query: '?url', import: 'default' });
const thumbnailImages = import.meta.glob('@/assets/projects/thumbnails/*', { eager: true, query: '?url', import: 'default' });
const socialImages = import.meta.glob('@/assets/projects/socials/*', { eager: true, query: '?url', import: 'default' });
const otherImages = import.meta.glob('@/assets/projects/other/*', { eager: true, query: '?url', import: 'default' });

const logoList = Object.values(logoImages) as string[];
const thumbnailList = Object.values(thumbnailImages) as string[];
const socialList = Object.values(socialImages) as string[];
const otherList = Object.values(otherImages) as string[];

const getCategoryMetadata = (title: string) => {
  switch (title) {
    case "Logos":
      return { num: "01", tag: "BRAND IDENTITY", label: "Logos & Brandmarks" };
    case "Thumbnails":
      return { num: "02", tag: "DIGITAL MEDIA", label: "Video Thumbnails" };
    case "Social Media Posts":
      return { num: "03", tag: "SOCIAL MARKETING", label: "Social Media Campaigns" };
    default:
      return { num: "04", tag: "CREATIVE WORK", label: "Explorations & Personal Works" };
  }
};

const ProjectRow = ({
  title,
  items,
  aspectRatio = 16 / 10,
}: {
  title: string,
  items: string[],
  aspectRatio?: number | "mixed",
}) => {
  if (items.length === 0) return null;

  const maxItemsToShow = title === "Logos" ? 8 : 6;
  const itemsToShow = items.slice(0, maxItemsToShow);
  const meta = getCategoryMetadata(title);

  const gridColsClass = title === "Logos" 
    ? "grid-cols-2 md:grid-cols-4" 
    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  return (
    <div className="py-20 border-b border-white/5 relative">
      {/* Category Heading with Elegant Typography */}
      <div className="container mx-auto px-6 mb-12 text-left">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono tracking-[0.2em] text-primary font-bold uppercase">{meta.num} // {meta.tag}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
            {meta.label}
          </h3>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-6">
        <div className={`grid gap-8 ${gridColsClass}`}>
          {itemsToShow.map((item, index) => {
            const currentRatio = title === "Social Media Posts"
              ? (index % 2 === 0 ? 1 : 4 / 5)
              : (typeof aspectRatio === "number" ? aspectRatio : 16 / 10);

            const isLogo = title === "Logos";

            return (
              <motion.div
                key={`${title}-${index}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="relative rounded-[24px] bg-card border border-white/5 p-4 transition-all duration-500 hover:border-primary/45 hover:shadow-[0_10px_40px_rgba(249,115,22,0.06)] hover:-translate-y-1.5 group flex flex-col justify-between"
              >
                <div 
                  className={`rounded-2xl overflow-hidden relative border border-white/5 bg-background/50 flex items-center justify-center`}
                  style={{ aspectRatio: typeof currentRatio === "number" ? currentRatio : undefined }}
                >
                  <img
                    src={item}
                    alt={`${title} project ${index + 1}`}
                    className={`transition-all duration-700 ${
                      isLogo 
                        ? "max-w-[70%] max-h-[70%] object-contain p-6 group-hover:scale-[1.03]" 
                        : "w-full h-full object-cover group-hover:scale-[1.03]"
                    }`}
                    loading="lazy"
                  />
                  {/* Subtle Glow Behind Logo */}
                  {isLogo && (
                    <div className="absolute inset-0 bg-radial-gradient from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  )}
                  {/* Premium Action Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="rounded-full bg-primary text-white text-xs font-bold px-5 py-2.5 flex items-center gap-1.5 shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                      View Project
                      <Eye className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <section id="work" className="py-32 bg-background relative overflow-hidden">
      {/* Background ambient orbs matching hero */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[30%] left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 mb-20 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs px-4 py-1.5 mb-6 font-semibold uppercase tracking-[0.1em]">
            Selected Works
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold mb-6 text-white leading-tight max-w-3xl">
            Let's have a look at my{" "}
            <span className="font-script text-primary">Portfolio</span>
          </h2>
          <p className="text-base md:text-lg text-white/50 max-w-xl mx-auto leading-relaxed font-sans">
            A curated showcase of design concepts, client branding, and digital media projects.
          </p>
        </motion.div>
      </div>

      <div className="space-y-4 relative z-10">
        {logoList.length > 0 && (
          <ProjectRow
            title="Logos"
            items={logoList}
            aspectRatio={1}
          />
        )}
        {thumbnailList.length > 0 && (
          <ProjectRow
            title="Thumbnails"
            items={thumbnailList}
            aspectRatio={16 / 9}
          />
        )}
        {socialList.length > 0 && (
          <ProjectRow
            title="Social Media Posts"
            items={socialList}
            aspectRatio={4 / 5}
          />
        )}
        <OtherDesigns items={otherList} />
        {logoList.length === 0 && thumbnailList.length === 0 && socialList.length === 0 && otherList.length === 0 && (
          <div className="text-center text-white/40 py-20">
            <p>Add images to <code className="text-primary/70">client/assets/projects/</code> folders to see them here.</p>
          </div>
        )}
      </div>
    </section>
  );
};
