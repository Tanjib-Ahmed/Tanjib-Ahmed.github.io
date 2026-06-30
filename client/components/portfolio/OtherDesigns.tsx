import { useMemo } from "react";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";

export const OtherDesigns = ({ items }: { items: string[] }) => {
    if (items.length === 0) return null;

    // Show up to 12 items for clean display
    const itemsToShow = useMemo(() => items.slice(0, 12), [items]);

    return (
        <div className="py-20 border-b border-white/5 relative bg-background">
            {/* Category Heading with Elegant Typography */}
            <div className="container mx-auto px-6 mb-12 text-left">
                <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                        <span className="text-xs font-mono tracking-[0.2em] text-primary font-bold uppercase">04 // CREATIVE WORK</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                        Explorations & Personal Works
                    </h3>
                </div>
            </div>

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {itemsToShow.map((item, index) => (
                        <motion.div
                            key={`other-${index}`}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="relative rounded-[24px] bg-card border border-white/5 p-4 transition-all duration-500 hover:border-primary/45 hover:shadow-[0_10px_40px_rgba(249,115,22,0.06)] hover:-translate-y-1.5 group flex flex-col justify-between"
                        >
                            <div className="rounded-2xl overflow-hidden aspect-[4/5] relative border border-white/5 bg-background/50 flex items-center justify-center">
                                <img
                                    src={item}
                                    alt={`Exploration design ${index + 1}`}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                    loading="lazy"
                                />
                                {/* Premium Action Hover Overlay */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                    <span className="rounded-full bg-primary text-white text-xs font-bold px-5 py-2.5 flex items-center gap-1.5 shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                                        View Design
                                        <Eye className="w-4 h-4" />
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
