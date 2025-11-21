import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/ui/FadeIn";

export default function LibraryPage() {
    // Configuration for the visual books in the image
    // Widths are estimated percentages based on the provided image
    const shelfItems = [
        { slug: "the-republic", width: "13.5%", title: "The Republic" },
        { slug: "the-prince", width: "5.5%", title: "The Prince" },
        { slug: "meditations", width: "7.5%", title: "Meditations" },
        { slug: "beyond-good-and-evil", width: "7.5%", title: "Beyond Good & Evil" },
        { slug: null, width: "3%", title: "" }, // Spacer/Unknown book
        { slug: "the-art-of-war", width: "11.5%", title: "The Art of War" },
        { slug: "tao-te-ching", width: "11.5%", title: "Tao Te Ching" },
        { slug: "critique-of-pure-reason", width: "13%", title: "Critique of Pure Reason" },
        { slug: "leviathan", width: "9.5%", title: "Leviathan" },
        { slug: null, width: "2.5%", title: "" }, // Spacer/Unknown book
        { slug: "communist-manifesto", width: "14.5%", title: "The Communist Manifesto" },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-[#f0f0f0] dark:bg-[#1a1a1a]">
            <Header />

            <main className="flex-grow flex items-center justify-center px-4 md:px-12 py-32 overflow-hidden">
                <FadeIn className="w-full max-w-7xl">
                    <div className="relative w-full shadow-2xl rounded-sm overflow-hidden bg-neutral-100">
                        {/* The Image */}
                        <img
                            src="/images/bookshelf-tagged.png"
                            alt="Library Bookshelf"
                            className="w-full h-auto block select-none"
                        />

                        {/* Interactive Overlay Layer */}
                        <div className="absolute inset-0 flex h-[85%]"> {/* Height 85% to exclude the tags area from clicking */}
                            {shelfItems.map((item, index) => {
                                if (!item.slug) {
                                    // Non-clickable spacer
                                    return <div key={`spacer-${index}`} style={{ width: item.width }} />;
                                }

                                return (
                                    <Link
                                        key={item.slug}
                                        href={`/books/${item.slug}`}
                                        className="group relative h-full block hover:bg-white/10 transition-colors"
                                        style={{ width: item.width }}
                                        title={item.title}
                                    >
                                        <span className="sr-only">{item.title}</span>

                                        {/* Hover Indicator (Optional - subtle glow or border) */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border-2 border-white/30 bg-white/5" />

                                        {/* Tooltip */}
                                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20">
                                            {item.title}
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    <p className="text-center text-secondary-text mt-12 text-sm uppercase tracking-widest font-medium">
                        Select a book to read
                    </p>
                </FadeIn>
            </main>

            <Footer />
        </div>
    );
}
