"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SearchBar } from "@/components/ui/SearchBar";
import { BookList } from "@/components/library/BookList";
import { books } from "@/data/books";
import { Tag } from "@/components/ui/Tag";
import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/components/ui/Button"; // Assuming cn is exported from Button or a utils file

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTag = activeTag ? book.tags.includes(activeTag) : true;

    return matchesSearch && matchesTag;
  });

  const toggleTag = (tag: string) => {
    setActiveTag(activeTag === tag ? null : tag);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-32 px-6 md:px-12 pb-20">
        {/* Hero Section */}
        <FadeIn className="mb-24 md:mb-32 max-w-5xl">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter leading-[0.9] mb-8">
            READING <br />
            REDEFINED<span className="text-accent">.</span>
          </h1>
          <p className="text-xl md:text-2xl text-secondary-text max-w-2xl leading-relaxed">
            A curated collection of timeless classics, presented in a hyper-minimal interface designed for focus and clarity.
          </p>
        </FadeIn>

        {/* Library Section */}
        <FadeIn delay={0.2}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <SectionHeading
              title="Library"
              subtitle="Explore our collection of philosophical and political masterpieces."
              className="mb-0"
            />

            <div className="w-full md:w-auto flex flex-col gap-4">
              <SearchBar
                className="w-full md:w-80"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="flex gap-2">
                {["Philosophy", "Politics", "Classic"].map((tag) => (
                  <Tag
                    key={tag}
                    variant={activeTag === tag ? "default" : "outline"}
                    className={cn(
                      "cursor-pointer transition-colors",
                      activeTag === tag ? "bg-foreground text-background" : "hover:bg-secondary-text/10"
                    )}
                    onClick={() => toggleTag(tag)}
                  >
                    {tag}
                  </Tag>
                ))}
              </div>
            </div>
          </div>

          <BookList books={filteredBooks} />
        </FadeIn>
      </main>

      <Footer />
    </div>
  );
}
