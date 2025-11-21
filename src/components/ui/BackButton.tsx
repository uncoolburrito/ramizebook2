"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/components/ui/Button"; // Assuming we can reuse cn or just use clsx/tailwind-merge if available, or just template literals.
// Checking Button.tsx to see where cn comes from. It was used in LibraryPage so it exists.

export function BackButton({ className }: { className?: string }) {
    const router = useRouter();

    return (
        <button
            onClick={() => router.back()}
            className={cn(
                "group p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-foreground/20",
                className
            )}
            aria-label="Go back"
        >
            <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 text-foreground/80 group-hover:text-foreground transition-colors" />
        </button>
    );
}
