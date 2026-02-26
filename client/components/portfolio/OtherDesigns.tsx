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
        <div className="py-24 overflow-hidden relative group/section hover:z-50 transition-all duration-300"> {/* Increased padding and added z-index management */}
            <div className="container mx-auto px-6 mb-24 text-left relative z-10"> {/* Increased margin */}
                <h3 className="text-3xl font-display font-black text-primary/80 tracking-tighter uppercase italic origin-left rotate-3">
                    Other Designs
                </h3>
            </div>

            {/* Skewed Container */}
            <div
                className="relative rotate-3 scale-110 -my-10 py-20" // Rotated +3deg (Right-Down)
            >
                {rows.map((rowItems, rowIndex) => (
                    <div
                        key={`grid-row-${rowIndex}`}
                        className="flex relative mb-0 group/row hover:z-40" // Removed bottom margin for tight tape look
                    >
                        <div
                            className={`flex animate-infinite-scroll group-hover/row:pause-scroll will-change-transform gap-0 ${rowIndex % 2 === 0 ? 'direction-reverse' : ''}`} // Start with Reverse (RTL) for zigzag flow
                            style={{
                                // Standardized speed: rowItems.length * 15s (Minimum 60s)
                                animationDuration: `${Math.max(rowItems.length * 15, 60)}s`,
                                animationDirection: rowIndex % 2 === 0 ? 'reverse' : 'normal'
                            }}
                        >
                            {[...rowItems, ...rowItems, ...rowItems].map((item, index) => {
                                // Variable width to simulate mixed aspect ratio distribution and fill space natively
                                const widthClass = index % 3 === 0 ? "w-72 md:w-[450px]" : index % 2 === 0 ? "w-72 md:w-[350px]" : "w-72 md:w-80";

                                return (
                                    <div
                                        key={`grid-item-${rowIndex}-${index}`}
                                        className={`${widthClass} relative group/item transition-all duration-500 cursor-zoom-in flex-shrink-0 z-0 hover:z-50 p-2 h-64 md:h-80`}
                                    >
                                        {/* Base Grid Image (Cropped) */}
                                        <div className="absolute inset-2 overflow-hidden transition-all duration-500 rounded-3xl border border-white/5 bg-[#1A1A1A] group-hover/item:opacity-0 group-hover/item:scale-95">
                                            <img
                                                src={item}
                                                alt={`Other design base ${rowIndex}-${index}`}
                                                className="h-full w-full object-cover grayscale opacity-70 transition-all duration-500"
                                                loading="lazy"
                                                decoding="async"
                                            />
                                        </div>

                                        {/* Hover Popout Image (Full Native Aspect Ratio) */}
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex items-center justify-center opacity-0 scale-75 group-hover/item:opacity-100 group-hover/item:scale-105 transition-all duration-500 pointer-events-none">
                                            <img
                                                src={item}
                                                alt={`Other design full ${rowIndex}-${index}`}
                                                className="w-auto h-auto min-w-[250px] max-w-[90vw] max-h-[300px] md:max-h-[400px] object-contain rounded-2xl drop-shadow-[0_0_50px_rgba(139,92,246,0.6)]"
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

            {/* Gradient Masks to fade edges smoothly */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        </div>
    );
};
