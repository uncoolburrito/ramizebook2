import { notFound } from "next/navigation";
import { books } from "@/data/books";
import { ReaderShell } from "@/components/reader/ReaderShell";
import { ReaderToolbar } from "@/components/reader/ReaderToolbar";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { BackButton } from "@/components/ui/BackButton";

interface PageProps {
    params: Promise<{ slug: string; chapter: string }>;
}

export default async function ReaderPage({ params }: PageProps) {
    const { slug, chapter: chapterId } = await params;
    const book = books.find((b) => b.slug === slug);

    if (!book) notFound();

    const chapterIndex = book.chapters.findIndex((c) => c.id === chapterId);
    const chapter = book.chapters[chapterIndex];

    if (!chapter) notFound();

    const prevChapter = book.chapters[chapterIndex - 1];
    const nextChapter = book.chapters[chapterIndex + 1];

    return (
        <>
            <ReaderToolbar
                bookTitle={book.title}
                chapterTitle={chapter.title}
                bookSlug={book.slug}
            />





            <ReaderShell>
                <div className="mb-12 text-center relative">
                    <div className="absolute left-0 top-0 md:-ml-16 hidden md:block">
                        <BackButton />
                    </div>
                    <div className="md:hidden mb-4 flex justify-center">
                        <BackButton />
                    </div>

                    <span className="text-xs text-secondary-text uppercase tracking-wider font-medium mb-2 block">
                        Chapter {chapterIndex + 1}
                    </span>
                    <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight">
                        {chapter.title}
                    </h1>
                </div>

                <div
                    className="prose prose-lg dark:prose-invert max-w-none font-serif leading-loose"
                    dangerouslySetInnerHTML={{ __html: chapter.content }}
                />

                <div className="flex items-center justify-between mt-24 pt-12 border-t border-divider">
                    {prevChapter ? (
                        <Link href={`/read/${book.slug}/${prevChapter.id}`}>
                            <Button variant="ghost" className="gap-2 pl-0 hover:pl-2 transition-all">
                                <ArrowLeft className="w-4 h-4" /> Previous Chapter
                            </Button>
                        </Link>
                    ) : (
                        <div />
                    )}

                    {nextChapter ? (
                        <Link href={`/read/${book.slug}/${nextChapter.id}`}>
                            <Button variant="ghost" className="gap-2 pr-0 hover:pr-2 transition-all">
                                Next Chapter <ArrowRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    ) : (
                        <Link href={`/books/${book.slug}`}>
                            <Button variant="ghost" className="gap-2 pr-0 hover:pr-2 transition-all">
                                Finish Book <ArrowRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    )}
                </div>
            </ReaderShell>
        </>
    );
}
