import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { BackButton } from "@/components/ui/BackButton";

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />





            <main className="flex-grow pt-32 px-6 md:px-12 pb-20">
                <FadeIn className="max-w-3xl mx-auto">
                    <div className="mb-8">
                        <BackButton />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-8 leading-[0.9]">
                        ABOUT <br />
                        AZERO<span className="text-accent">.</span>BOOKS
                    </h1>

                    <div className="prose prose-lg dark:prose-invert font-serif leading-loose text-secondary-text">
                        <p>
                            AZERO.BOOKS is a conceptual ebook exploration platform designed to strip away the noise of modern digital reading.
                            Inspired by the brutalist and typographic sensibilities of azero.industries, this project prioritizes content,
                            typography, and negative space over skeuomorphic metaphors.
                        </p>
                        <p>
                            We believe that the reading experience should be unadulterated. No distractions, no ads, no unnecessary UI.
                            Just you and the text, presented in a way that honors the author's intent.
                        </p>
                        <p>
                            Built with Next.js, Tailwind CSS, and Framer Motion.
                        </p>
                    </div>
                </FadeIn>
            </main>

            <Footer />
        </div>
    );
}
