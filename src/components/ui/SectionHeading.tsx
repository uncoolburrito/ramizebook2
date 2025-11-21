import * as React from "react";
import { cn } from "./Button";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    title: string;
    subtitle?: string;
}

const SectionHeading = React.forwardRef<HTMLHeadingElement, SectionHeadingProps>(
    ({ className, title, subtitle, ...props }, ref) => {
        return (
            <div className={cn("mb-12", className)}>
                <h2
                    ref={ref}
                    className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-4"
                    {...props}
                >
                    {title}
                </h2>
                {subtitle && (
                    <p className="text-lg text-secondary-text max-w-2xl leading-relaxed">
                        {subtitle}
                    </p>
                )}
            </div>
        );
    }
);
SectionHeading.displayName = "SectionHeading";

export { SectionHeading };
