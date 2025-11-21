import { PageTransition } from "./PageTransition";

interface ReaderShellProps {
    children: React.ReactNode;
}

export function ReaderShell({ children }: ReaderShellProps) {
    return (
        <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
            <PageTransition>
                <main className="pt-24 pb-32 px-6 md:px-0 max-w-2xl mx-auto">
                    {children}
                </main>
            </PageTransition>
        </div>
    );
}
