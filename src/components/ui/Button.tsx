import * as React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost" | "outline";
    size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50 font-medium",
                    {
                        "bg-foreground text-background hover:bg-accent hover:text-white": variant === "primary",
                        "bg-secondary-text/10 text-foreground hover:bg-secondary-text/20": variant === "secondary",
                        "hover:bg-secondary-text/10 text-foreground": variant === "ghost",
                        "border border-divider text-foreground hover:border-foreground": variant === "outline",
                        "h-8 px-3 text-xs": size === "sm",
                        "h-10 px-5 text-sm": size === "md",
                        "h-12 px-8 text-base": size === "lg",
                    },
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, cn };
