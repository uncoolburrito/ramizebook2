import { BookCard } from "./BookCard";

interface Book {
    id: string;
    title: string;
    author: string;
    description: string;
    tags: string[];
    slug: string;
}

interface BookListProps {
    books: Book[];
}

export function BookList({ books }: BookListProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
            {books.map((book) => (
                <BookCard key={book.id} book={book} />
            ))}
        </div>
    );
}
