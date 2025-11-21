import * as React from "react";
import { cn } from "../ui/Button";

interface BookSpineProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    author: string;
    variant?: "gradient" | "stripes" | "solid";
}

export function BookSpine({ className, title, author, variant = "gradient", ...props }: BookSpineProps) {
    // Reuse the same deterministic color logic as MinimalCover
    const getHue = (str: string) => {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        return Math.abs(hash % 360);
    };

    const hue = getHue(title);
    const hue2 = (hue + 40) % 360;

    const styles = {
        gradient: {
            background: `linear-gradient(to bottom, hsl(${hue}, 70%, 80%) 0%, hsl(${hue2}, 70%, 80%) 100%)`,
        },
        stripes: {
            background: `repeating-linear-gradient(90deg, hsl(${hue}, 60%, 90%), hsl(${hue}, 60%, 90%) 4px, hsl(${hue2}, 60%, 95%) 4px, hsl(${hue2}, 60%, 95%) 8px)`,
        },
        solid: {
            backgroundColor: `hsl(${hue}, 60%, 90%)`,
        },
    };

    return (
        <div
            className={cn(
                "relative overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl",
                className
            )}
            style={styles[variant]}
            {...props}
        >
            {/* Spine curvature effect (shadows on sides) */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 pointer-events-none z-10" />

            {/* Top edge highlight */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/40 z-20" />

            {/* Content Container - Rotated Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center py-4 z-0">
                <div
                    className="flex items-center gap-3 writing-vertical-rl rotate-180 h-full"
                    style={{ writingMode: 'vertical-rl' }}
                >
                    <span className="text-[10px] font-medium tracking-widest uppercase text-foreground/60 truncate max-h-[20%]">
                        {author}
                    </span>
                    <span className="font-display font-bold text-sm md:text-base tracking-wide text-foreground truncate max-h-[70%]">
                        {title}
                    </span>
                    {/* Decorative element at bottom of spine */}
                    <div className="w-[1px] h-4 bg-foreground/20 mt-auto" />
                </div>
            </div>
        </div>
    );
}
