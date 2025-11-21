import * as React from "react";
import { cn } from "./Button";

interface MinimalCoverProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    variant?: "gradient" | "stripes" | "solid";
}

const MinimalCover = React.forwardRef<HTMLDivElement, MinimalCoverProps>(
    ({ className, title, variant = "gradient", ...props }, ref) => {
        // Simple deterministic color generation based on title length/chars
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
                background: `linear-gradient(135deg, hsl(${hue}, 70%, 80%) 0%, hsl(${hue2}, 70%, 80%) 100%)`,
            },
            stripes: {
                background: `repeating-linear-gradient(45deg, hsl(${hue}, 60%, 90%), hsl(${hue}, 60%, 90%) 10px, hsl(${hue2}, 60%, 95%) 10px, hsl(${hue2}, 60%, 95%) 20px)`,
            },
            solid: {
                backgroundColor: `hsl(${hue}, 60%, 90%)`,
            },
        };

        return (
            <div
                ref={ref}
                className={cn(
                    "w-full aspect-[2/3] relative overflow-hidden flex items-center justify-center",
                    className
                )}
                style={styles[variant]}
                {...props}
            >
                <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-noise" />
                {/* Optional: Large character overlay */}
                <span className="font-display font-bold text-9xl opacity-10 mix-blend-multiply text-foreground select-none">
                    {title.charAt(0)}
                </span>
            </div>
        );
    }
);
MinimalCover.displayName = "MinimalCover";

export { MinimalCover };
