import Link from "next/link";
import { MinimalCover } from "../ui/MinimalCover";
import { Card } from "../ui/Card";
import { Tag } from "../ui/Tag";

interface Book {
    id: string;
    title: string;
    author: string;
    description: string;
    tags: string[];
    slug: string;
    coverImage?: string;
}

interface BookCardProps {
    book: Book;
}

export function BookCard({ book }: BookCardProps) {
    return (
        <Link href={`/books/${book.slug}`} className="block group">
            <Card hover className="h-full flex flex-col p-0 overflow-hidden border-0 bg-transparent">
                {book.coverImage ? (
                    <div className="w-full aspect-[3/4] mb-4 relative overflow-hidden rounded-sm shadow-sm">
                        <img
                            src={book.coverImage}
                            alt={`Cover of ${book.title}`}
                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                ) : (
                    <MinimalCover title={book.title} className="w-full aspect-[3/4] mb-4" />
                )}
                <div className="flex flex-col flex-grow">
                    <h3 className="font-display font-bold text-xl leading-tight mb-1 group-hover:text-accent transition-colors">
                        {book.title}
                    </h3>
                    <p className="text-sm text-secondary-text mb-3">{book.author}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {book.tags.slice(0, 2).map((tag) => (
                            <Tag key={tag} variant="outline">
                                {tag}
                            </Tag>
                        ))}
                    </div>
                </div>
            </Card>
        </Link>
    );
}
