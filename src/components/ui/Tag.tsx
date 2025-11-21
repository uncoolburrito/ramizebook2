import * as React from "react";
import { cn } from "./Button";

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: "default" | "outline";
}

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
    ({ className, variant = "default", ...props }, ref) => {
        return (
            <span
                ref={ref}
                className={cn(
                    "inline-flex items-center text-[10px] uppercase tracking-wider font-medium px-2 py-1",
                    {
                        "bg-secondary-text/10 text-secondary-text": variant === "default",
                        "border border-divider text-secondary-text": variant === "outline",
                    },
                    className
                )}
                {...props}
            />
        );
    }
);
Tag.displayName = "Tag";

export { Tag };
