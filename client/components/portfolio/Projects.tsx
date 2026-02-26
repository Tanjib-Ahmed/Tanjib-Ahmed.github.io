import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
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

const CarouselRow = ({
  title,
  items,
  direction = "left",
  speed,
  aspectRatio = 16 / 10,
  skewClass = "-rotate-3"
}: {
  title: string,
  items: string[],
  direction?: "left" | "right",
  speed?: string,
  aspectRatio?: number | "mixed",
  skewClass?: string
}) => {
  if (items.length === 0) return null;
  // Duplicate items for seamless infinite scroll
  const duplicatedItems = [...items, ...items, ...items, ...items]; // Quadruple to ensure enough content for smooth scroll

  // Calculate duration dynamically if speed is not provided
  // Factor of 15s per original item ensures constant scanning speed regardless of count
  const duration = speed || `${Math.max(items.length * 15, 60)}s`;

  // Adjust margin based on rotation to prevent gaps or crowding
  // -3deg (Logos, Socials) needs less space (mb-8)
  // +3deg (Thumbnails) needs more space (mb-24) to avoid hitting the title
  const titleMargin = (title === "Logo Designs" || title === "Social Media Designs") ? "mb-8" : "mb-24";

  return (
    <div className="py-24 overflow-hidden relative group/section hover:z-50 transition-all duration-300"> {/* Increased padding and added z-index management */}
      <div className={`container mx-auto px-6 ${titleMargin} text-left relative z-10`}> {/* Conditional margin */}
        <h3 className={`text-3xl font-display font-black text-primary/80 tracking-tighter uppercase italic origin-left ${skewClass}`}>
          {title}
        </h3>
      </div>

      <div className={`relative ${skewClass} scale-110 py-10 my-[-20px]`}>
        <div className="flex relative mb-4 group/row hover:z-40">
          <div
            className={`flex animate-infinite-scroll group-hover/row:pause-scroll will-change-transform gap-0 ${direction === "right" ? 'direction-reverse' : ''}`}
            style={{
              animationDuration: duration,
              animationDirection: direction === "right" ? "reverse" : "normal"
            }}
          >
            {duplicatedItems.map((item, index) => {
              // Logic for mixed ratios in Social Media (alternating 1:1 and 4:5)
              const currentRatio = title === "Social Media Designs"
                ? (index % 2 === 0 ? 1 : 4 / 5)
                : (typeof aspectRatio === "number" ? aspectRatio : 16 / 10);

              // Adjust container width based on ratio to maintain consistent height
              const widthClass = title === "Logo Designs"
                ? "w-72 md:w-80"
                : title === "Thumbnail Designs"
                  ? "w-72 md:w-[450px]"
                  : currentRatio === 1
                    ? "w-72 md:w-[350px]" // Square
                    : "w-72 md:w-[280px]"; // Portrait 4:5

              return (
                <div
                  key={`${title}-${index}`}
                  className={`${widthClass} flex-shrink-0 relative group/item transition-all duration-300 z-0`}
                >
                  <div className={`overflow-hidden transition-all duration-300 rounded-none border-x border-background/20 relative h-full bg-secondary/80`}>
                    <AspectRatio ratio={currentRatio}>
                      <img
                        src={item}
                        alt={`${title} project`}
                        className="object-cover w-full h-full transition-all duration-300"
                        loading="lazy"
                        decoding="async"
                      />
                    </AspectRatio>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Gradient Masks */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
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
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-8xl font-display font-black mb-6 tracking-tighter uppercase italic bg-gradient-to-br from-violet-300 via-primary to-purple-400 bg-clip-text text-transparent pb-2">
            Selected Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Exploring the boundaries of visual communication through specialized design categories.
          </p>
        </motion.div>
      </div>

      <div className="space-y-12">
        {logoList.length > 0 && (
          <CarouselRow
            title="Logo Designs"
            items={logoList}
            direction="left"
            aspectRatio={1}
            skewClass="-rotate-3"
          />
        )}
        {thumbnailList.length > 0 && (
          <CarouselRow
            title="Thumbnail Designs"
            items={thumbnailList}
            direction="right"
            aspectRatio={16 / 9}
            skewClass="rotate-3"
          />
        )}
        {socialList.length > 0 && (
          <CarouselRow
            title="Social Media Designs"
            items={socialList}
            direction="left"
            aspectRatio={4 / 5}
            skewClass="-rotate-3"
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
