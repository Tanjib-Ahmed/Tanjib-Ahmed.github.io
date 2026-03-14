import { useRef, useMemo } from "react";

function shuffleArray<T>(array: T[]): T[] {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

export const OtherDesigns = ({ items }: { items: string[] }) => {
    if (items.length === 0) return null;

    // Split items into 3 rows for the grid
    const rows = useMemo(() => {
        const shuffled = shuffleArray([...items, ...items, ...items]); // Triple pool for good distribution
        const chunkSize = Math.ceil(shuffled.length / 3);
        return [
            shuffled.slice(0, chunkSize),
            shuffled.slice(chunkSize, chunkSize * 2),
            shuffled.slice(chunkSize * 2)
        ];
    }, [items]);

    return (
        <div className="py-32 overflow-hidden relative group/section transition-all duration-300">
            <div className="container mx-auto px-6 mb-16 text-left relative z-10">
                <h3 className="text-3xl md:text-4xl font-display font-black text-primary italic uppercase tracking-tighter">
                    Explorations & More
                </h3>
            </div>

            {/* Straightened Container */}
            <div
                className="relative rotate-0 scale-100 -my-8 py-10"
            >
                {rows.map((rowItems, rowIndex) => (
                    <div
                        key={`grid-row-${rowIndex}`}
                        className="flex relative mb-4 group/row hover:z-40"
                    >
                        <div
                            className={`flex animate-infinite-scroll group-hover/row:pause-scroll will-change-transform gap-4 ${rowIndex % 2 === 0 ? 'direction-reverse' : ''}`}
                            style={{
                                animationDuration: `${Math.max(rowItems.length * 12, 45)}s`,
                                animationDirection: rowIndex % 2 === 0 ? 'reverse' : 'normal'
                            }}
                        >
                            {[...rowItems, ...rowItems, ...rowItems].map((item, index) => {
                                // More varied widths for a denser masonry look
                                const widths = ["w-64", "w-80", "w-96", "w-[400px]", "w-[300px]"];
                                const widthClass = widths[index % widths.length];

                                return (
                                    <div
                                        key={`grid-item-${rowIndex}-${index}`}
                                        className={`${widthClass} relative group/item transition-all duration-500 cursor-zoom-in flex-shrink-0 z-0 hover:z-50 h-56 md:h-72`}
                                    >
                                        {/* Image Container with Fog/Hazy Border Effect */}
                                        <div className="absolute inset-0 overflow-hidden transition-all duration-700 rounded-[2rem] border border-white/5 bg-[#0D0D0D] group-hover/item:scale-[0.98]">
                                            <img
                                                src={item}
                                                alt={`Other design base ${rowIndex}-${index}`}
                                                className="h-full w-full object-cover grayscale opacity-40 transition-all duration-700 group-hover/item:scale-110 group-hover/item:opacity-60"
                                                loading="lazy"
                                                decoding="async"
                                            />
                                            {/* Foggy Border (Vignette) Overlay */}
                                            <div className="absolute inset-0 pointer-events-none transition-opacity duration-500 shadow-[inset_0_0_60px_rgba(0,0,0,0.9),inset_0_0_20px_rgba(0,0,0,0.8)]" />
                                            <div className="absolute inset-0 pointer-events-none opacity-40 group-hover/item:opacity-20 transition-opacity bg-gradient-to-t from-black/80 via-transparent to-black/80" />
                                        </div>

                                        {/* Hover Popout Image (Hanzo Influence) */}
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex items-center justify-center opacity-0 scale-90 group-hover/item:opacity-100 group-hover/item:scale-100 transition-all duration-500 pointer-events-none">
                                            <img
                                                src={item}
                                                alt={`Other design full ${rowIndex}-${index}`}
                                                className="w-auto h-auto min-w-[200px] max-w-[85vw] max-h-[250px] md:max-h-[350px] object-contain rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.8)] border border-white/10"
                                                loading="lazy"
                                                decoding="async"
                                            />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                ))}
            </div>

            {/* Fog Masks for Section Edges */}
            <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />
        </div>
    );
};
