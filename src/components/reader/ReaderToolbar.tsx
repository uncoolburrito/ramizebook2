import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ThemeToggle } from "../ui/ThemeToggle";
import { Button } from "../ui/Button";
import { ReadingProgress } from "./ReadingProgress";

interface ReaderToolbarProps {
    bookTitle: string;
    chapterTitle: string;
    bookSlug: string;
}

export function ReaderToolbar({ bookTitle, chapterTitle, bookSlug }: ReaderToolbarProps) {
    return (
        <>
            <ReadingProgress />
            <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-divider h-14 flex items-center px-4 md:px-8 justify-between transition-colors duration-300">
                <div className="flex items-center gap-4">
                    <Link href="/" className="font-display font-bold text-lg tracking-tight">
                        AZERO<span className="text-accent">.</span>BOOKS
                    </Link>
                    <div className="h-4 w-px bg-divider mx-2" />
                    <div className="flex flex-col">
                        <span className="text-xs text-secondary-text uppercase tracking-wider font-medium">
                            {bookTitle}
                        </span>
                        <span className="text-sm font-medium text-foreground truncate max-w-[200px] md:max-w-md">
                            {chapterTitle}
                        </span>
                    </div>
                </div>

                <ThemeToggle />
            </div>
        </>
    );
}
