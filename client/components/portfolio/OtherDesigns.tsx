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
                            {[...rowItems, ...rowItems, ...rowItems].map((item, index) => (
                                <div
                                    key={`grid-item-${rowIndex}-${index}`}
                                    className="relative group/item transition-all duration-300 cursor-zoom-in
                                        w-[300px] h-[200px] flex-shrink-0 z-0 hover:z-50 hover:scale-[1.7]"
                                >
                                    <div className="absolute inset-0 overflow-hidden transition-all duration-300 rounded-none border-x border-background/20 group-hover/item:rounded-2xl group-hover/item:shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)] group-hover/item:border-2 group-hover/item:border-primary/50 bg-secondary/80"> {/* Flattened borders by default */}
                                        <img
                                            src={item}
                                            alt={`Other design ${rowIndex}-${index}`}
                                            className="h-full w-full object-cover grayscale opacity-70 transition-all duration-300 group-hover/item:grayscale-0 group-hover/item:opacity-100 group-hover/item:object-contain"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </div>
                                    {/* Overlay for "View" hint could go here, but hover effect is strong enough */}
                                </div>
                            ))}
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
