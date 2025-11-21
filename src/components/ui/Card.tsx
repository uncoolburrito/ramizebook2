import * as React from "react";
import { cn } from "./Button"; // Reusing cn utility

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    hover?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, hover = false, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "bg-background border border-divider p-6 transition-all duration-300",
                    hover && "hover:-translate-y-1 hover:border-accent/50",
                    className
                )}
                {...props}
            />
        );
    }
);
Card.displayName = "Card";

export { Card };
