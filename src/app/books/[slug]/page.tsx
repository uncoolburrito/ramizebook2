import { notFound } from "next/navigation";
import Link from "next/link";
import { books } from "@/data/books";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MinimalCover } from "@/components/ui/MinimalCover";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { BackButton } from "@/components/ui/BackButton";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function BookPage({ params }: PageProps) {
    const { slug } = await params;
    const book = books.find((b) => b.slug === slug);

    if (!book) {
        notFound();
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow pt-32 px-6 md:px-12 pb-20">
                <FadeIn className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-12 lg:gap-24">




                        {/* Left Column: Cover & Metadata */}
                        <div className="flex flex-col gap-8">
                            <div className="flex items-center gap-4">
                                <BackButton />
                            </div>
                            {book.coverImage ? (
                                <div className="w-full aspect-[3/4] relative shadow-sm overflow-hidden rounded-sm">
                                    <img
                                        src={book.coverImage}
                                        alt={`Cover of ${book.title}`}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            ) : (
                                <MinimalCover title={book.title} className="w-full aspect-[3/4] shadow-sm" />
                            )}

                            <div className="flex flex-col gap-6 border-t border-divider pt-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <span className="text-xs text-secondary-text uppercase tracking-wider block mb-1">Author</span>
                                        <span className="font-medium">{book.author}</span>
                                    </div>
                                    <div>
                                        <span className="text-xs text-secondary-text uppercase tracking-wider block mb-1">Year</span>
                                        <span className="font-medium">{Math.abs(book.publishedYear)} {book.publishedYear < 0 ? "BC" : "AD"}</span>
                                    </div>
                                </div>

                                <div>
                                    <span className="text-xs text-secondary-text uppercase tracking-wider block mb-2">Tags</span>
                                    <div className="flex flex-wrap gap-2">
                                        {book.tags.map(tag => (
                                            <Tag key={tag} variant="outline">{tag}</Tag>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Title, Description, Chapters */}
                        <div className="flex flex-col">
                            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 leading-[0.9]">
                                {book.title}
                            </h1>

                            <p className="text-xl text-secondary-text leading-relaxed mb-12 max-w-2xl">
                                {book.description}
                            </p>

                            <div className="flex items-center gap-4 mb-16">
                                <Link href={`/read/${book.slug}/${book.chapters[0].id}`}>
                                    <Button size="lg" className="gap-2">
                                        Start Reading <ArrowRight className="w-4 h-4" />
                                    </Button>
                                </Link>
                            </div>

                            <div className="border-t border-divider">
                                <h3 className="text-sm text-secondary-text uppercase tracking-wider font-medium py-6">
                                    Table of Contents
                                </h3>
                                <div className="flex flex-col">
                                    {book.chapters.map((chapter, index) => (
                                        <Link
                                            key={chapter.id}
                                            href={`/read/${book.slug}/${chapter.id}`}
                                            className="group flex items-baseline py-4 border-b border-divider hover:bg-secondary-text/5 transition-colors -mx-4 px-4"
                                        >
                                            <span className="font-mono text-sm text-secondary-text w-12 mr-4">
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                            <span className="text-lg font-medium group-hover:translate-x-2 transition-transform duration-300">
                                                {chapter.title}
                                            </span>
                                            <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </main>

            <Footer />
        </div>
    );
}
