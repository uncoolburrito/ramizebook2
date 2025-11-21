import * as React from "react";
import { Search } from "lucide-react";
import { Input } from "./Input";
import { cn } from "./Button";

interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> { }

const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(
    ({ className, ...props }, ref) => {
        return (
            <div className={cn("relative", className)}>
                <Search className="absolute left-0 top-2.5 h-4 w-4 text-secondary-text" />
                <Input
                    ref={ref}
                    className="pl-8 border-b-divider focus-visible:border-accent"
                    placeholder="Search library..."
                    {...props}
                />
            </div>
        );
    }
);
SearchBar.displayName = "SearchBar";

export { SearchBar };
