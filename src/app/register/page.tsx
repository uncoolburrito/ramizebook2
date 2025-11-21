"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card } from "@/components/ui/Card";

export default function RegisterPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState("");

    // Redirect if already logged in
    React.useEffect(() => {
        const currentUser = localStorage.getItem("ebook-current-user");
        if (currentUser) {
            router.push("/");
        }
    }, [router]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        // Basic validation
        if (!name || !email || !password) {
            setError("All fields are required");
            setIsLoading(false);
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            setIsLoading(false);
            return;
        }

        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 800));

        const newUser = { name, email };

        // Save current user session
        localStorage.setItem("ebook-current-user", JSON.stringify(newUser));

        // Optional: Save to users list (for "login" lookup later)
        const existingUsers = JSON.parse(localStorage.getItem("ebook-users") || "[]");
        existingUsers.push({ ...newUser, password }); // In a real app, never store plain text passwords!
        localStorage.setItem("ebook-users", JSON.stringify(existingUsers));

        router.push("/");
    };

    return (
        <div className="min-h-screen flex flex-col bg-background transition-colors duration-300">
            <Header />

            <main className="flex-grow flex items-center justify-center px-6 py-32">
                <FadeIn className="w-full max-w-md">
                    <Card className="p-8 border-divider bg-background/50 backdrop-blur-sm">
                        <div className="text-center mb-8">
                            <h1 className="font-display font-bold text-2xl mb-2">Create Account</h1>
                            <p className="text-sm text-secondary-text">
                                Join to save your reading progress
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {error && (
                                <div className="p-3 text-sm text-red-500 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30 rounded-sm">
                                    {error}
                                </div>
                            )}

                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-secondary-text">
                                    Name
                                </label>
                                <Input
                                    id="name"
                                    name="name"
                                    placeholder="John Doe"
                                    required
                                    className="bg-background"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-secondary-text">
                                    Email
                                </label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    required
                                    className="bg-background"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="password" className="text-sm font-medium text-secondary-text">
                                    Password
                                </label>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="••••••••"
                                    required
                                    className="bg-background"
                                />
                            </div>

                            <Button type="submit" className="w-full" disabled={isLoading}>
                                {isLoading ? "Creating Account..." : "Register"}
                            </Button>

                            <div className="text-center text-sm text-secondary-text">
                                Already have an account?{" "}
                                <Link href="/login" className="text-foreground hover:underline font-medium">
                                    Login
                                </Link>
                            </div>
                        </form>
                    </Card>
                </FadeIn>
            </main>

            <Footer />
        </div>
    );
}
