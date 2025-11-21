"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ThemeToggle } from "../ui/ThemeToggle";
import { Button } from "../ui/Button";

export function Header() {
    const router = useRouter();
    const [user, setUser] = React.useState<{ name: string; email: string } | null>(null);
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
        const storedUser = localStorage.getItem("ebook-current-user");
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (e) {
                console.error("Failed to parse user session", e);
            }
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("ebook-current-user");
        setUser(null);
        router.push("/login");
        router.refresh();
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-divider h-16 flex items-center px-6 md:px-12 justify-between transition-colors duration-300">
            <Link href="/" className="font-display font-bold text-xl tracking-tight">
                AZERO<span className="text-accent">.</span>BOOKS
            </Link>

            <nav className="flex items-center gap-6">
                <Link href="/library" className="text-sm font-medium text-secondary-text hover:text-foreground transition-colors">
                    Library
                </Link>
                <Link href="/about" className="text-sm font-medium text-secondary-text hover:text-foreground transition-colors">
                    About
                </Link>

                {mounted && user ? (
                    <div className="flex items-center gap-4">
                        <span className="text-sm font-medium text-foreground">
                            Hi, {user.name}
                        </span>
                        <button
                            onClick={handleLogout}
                            className="text-sm font-medium text-secondary-text hover:text-red-500 transition-colors"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <div className="flex items-center gap-4">
                        <Link href="/login" className="text-sm font-medium text-secondary-text hover:text-foreground transition-colors">
                            Login
                        </Link>
                        <Link href="/register" className="text-sm font-medium text-secondary-text hover:text-foreground transition-colors">
                            Register
                        </Link>
                    </div>
                )}

                <ThemeToggle />
            </nav>
        </header>
    );
}
