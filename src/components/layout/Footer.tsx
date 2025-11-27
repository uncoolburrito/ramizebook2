export function Footer() {
    return (
        <footer className="border-t border-divider py-12 px-6 md:px-12 bg-background transition-colors duration-300">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <h3 className="font-display font-bold text-lg mb-2">AZERO.BOOKS</h3>
                    <p className="text-sm text-secondary-text max-w-xs">
                        A minimal ebook exploration platform designed for typography and reading.
                    </p>
                </div>
                <div className="flex gap-6 text-sm text-secondary-text">
                    <a href="https://x.com/kramizr" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Twitter</a>
                    <a href="https://github.com/uncoolburrito/ramizebook2" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
                    <a href="/license" className="hover:text-foreground transition-colors">License</a>
                    <a href="/terms" className="hover:text-foreground transition-colors">Terms</a>
                    <a href="/cancellation" className="hover:text-foreground transition-colors">Cancellation</a>
                    <a href="/privacy" className="hover:text-foreground transition-colors">Privacy</a>
                </div>
            </div>
        </footer >
    );
}
