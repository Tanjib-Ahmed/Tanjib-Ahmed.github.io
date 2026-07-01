import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { OtherDesigns } from "./OtherDesigns";

// Dynamic asset loading
const logoImages = import.meta.glob('@/assets/projects/logos/*', { eager: true, query: '?url', import: 'default' });
const thumbnailImages = import.meta.glob('@/assets/projects/thumbnails/*', { eager: true, query: '?url', import: 'default' });
const socialImages = import.meta.glob('@/assets/projects/socials/*', { eager: true, query: '?url', import: 'default' });
const otherImages = import.meta.glob('@/assets/projects/other/*', { eager: true, query: '?url', import: 'default' });

const logoList = Object.entries(logoImages).map(([path, url]) => ({ path, url: url as string }));
const thumbnailList = Object.entries(thumbnailImages).map(([path, url]) => ({ path, url: url as string }));
const socialList = Object.entries(socialImages).map(([path, url]) => ({ path, url: url as string }));
const otherList = Object.entries(otherImages).map(([path, url]) => ({ path, url: url as string }));

const getCleanProjectName = (path: string) => {
  const filename = path.split('/').pop() || "";
  const nameWithoutExt = filename.substring(0, filename.lastIndexOf('.')) || filename;
  
  // Clean up typical designer versionings or prefixes, e.g. "MistiBake Studio-01" -> "MistiBake Studio"
  const cleaned = nameWithoutExt
    .replace(/[-_]\d+$/g, '') // remove trailing -01, -02
    .replace(/\s+copy$/gi, '') // remove trailing " copy"
    .replace(/\s+v\d+$/gi, '') // remove trailing " v2"
    .replace(/[-_]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  return cleaned;
};

const getAltText = (title: string, path: string) => {
  const projName = getCleanProjectName(path);
  switch (title) {
    case "Logos":
      return `Logo design for ${projName} by Tanjib Ahmed, professional Graphic Designer in Bangladesh`;
    case "Thumbnails":
      return `YouTube video thumbnail design for ${projName} by Tanjib Ahmed, Graphic Designer Bangladesh`;
    case "Social Media Posts":
      return `Social media post graphic design for ${projName} by Tanjib Ahmed, Graphic Designer BD`;
    default:
      return `Creative graphic design project for ${projName} by Tanjib Ahmed, Graphic Designer Dhaka`;
  }
};

const CarouselRow = ({
  title,
  items,
  direction = "left",
  speed,
  aspectRatio = 16 / 10,
}: {
  title: string,
  items: { path: string, url: string }[],
  direction?: "left" | "right",
  speed?: string,
  aspectRatio?: number | "mixed",
}) => {
  if (items.length === 0) return null;
  const duplicatedItems = [...items, ...items, ...items, ...items];
  const duration = speed || `${Math.max(items.length * 15, 60)}s`;

  return (
    <div className="py-24 overflow-hidden relative group/section transition-all duration-300">
      <div className="container mx-auto px-6 mb-16 text-left relative z-10">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-black text-primary italic uppercase tracking-tighter">
          {title}
        </h3>
      </div>

      <div className="relative rotate-0 scale-100 py-10 my-[-20px]">
        <div className="flex relative mb-4 group/row hover:z-40">
          <div
            className={`flex animate-infinite-scroll group-hover/row:pause-scroll will-change-transform gap-4 ${direction === "right" ? 'direction-reverse' : ''}`}
            style={{
              animationDuration: duration,
              animationDirection: direction === "right" ? "reverse" : "normal"
            }}
          >
            {duplicatedItems.map((item, index) => {
              const currentRatio = title === "Social Media Posts"
                ? (index % 2 === 0 ? 1 : 4 / 5)
                : (typeof aspectRatio === "number" ? aspectRatio : 16 / 10);

              const isThumbnail = title === "Thumbnails";
              const widthClass = title === "Logos"
                ? "w-36 sm:w-48 md:w-80"
                : isThumbnail
                  ? "w-[250px] sm:w-[350px] md:w-[500px]"
                  : currentRatio === 1
                    ? "w-36 sm:w-48 md:w-[350px]"
                    : "w-[120px] sm:w-[153px] md:w-[280px]";

              return (
                <div
                  key={`${title}-${index}`}
                  className={`${widthClass} flex-shrink-0 relative group/item transition-all duration-500 z-0 h-36 sm:h-48 md:h-80`}
                >
                  {/* Image Container - Clean look for main rows */}
                  <div className="absolute inset-0 overflow-hidden transition-all duration-700 rounded-[2.5rem] border border-white/5 bg-[#0D0D0D] group-hover/item:scale-[0.98]">
                    <img
                      src={item.url}
                      alt={getAltText(title, item.path)}
                      className="object-cover w-full h-full transition-all duration-700 group-hover/item:scale-110"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Fog Masks */}
      <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />
    </div>
  );
};

export const Projects = () => {
  return (
    <section id="work" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-5xl md:text-8xl lg:text-[110px] font-display font-black mb-6 tracking-tighter uppercase italic bg-gradient-to-br from-violet-400 via-primary to-purple-600 bg-clip-text text-transparent pb-2 leading-tight">
            Some of My Work
          </h2>
          <p className="text-xl text-white/30 max-w-2xl mx-auto leading-relaxed font-medium">
            Here are some designs I have made for different projects over the years.
          </p>
        </motion.div>
      </div>

      <div className="space-y-4">
        {logoList.length > 0 && (
          <CarouselRow
            title="Logos"
            items={logoList}
            direction="left"
            aspectRatio={1}
          />
        )}
        {thumbnailList.length > 0 && (
          <CarouselRow
            title="Thumbnails"
            items={thumbnailList}
            direction="right"
            aspectRatio={16 / 9}
          />
        )}
        {socialList.length > 0 && (
          <CarouselRow
            title="Social Media Posts"
            items={socialList}
            direction="left"
            aspectRatio={4 / 5}
          />
        )}
        <OtherDesigns items={otherList} />
        {logoList.length === 0 && thumbnailList.length === 0 && socialList.length === 0 && otherList.length === 0 && (
          <div className="text-center text-muted-foreground py-20">
            <p>Add images to <code>client/assets/projects/</code> folders to see them here.</p>
          </div>
        )}
      </div>
    </section>
  );
};
