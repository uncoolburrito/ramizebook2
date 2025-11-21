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
import { BackButton } from "@/components/ui/BackButton";

export default function LoginPage() {
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
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        if (!email || !password) {
            setError("All fields are required");
            setIsLoading(false);
            return;
        }

        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 800));

        // Try to find user in "database"
        const existingUsers = JSON.parse(localStorage.getItem("ebook-users") || "[]");
        const foundUser = existingUsers.find((u: any) => u.email === email);

        let userToLogin;

        // Hardcoded default credentials for demo
        if (email === "kramizr03@gmail.com" && password === "ramizrahman") {
            userToLogin = { name: "Ramiz", email: "kramizr03@gmail.com" };
        } else if (foundUser) {
            // Simple password check (in real app, verify hash)
            if (foundUser.password !== password) {
                setError("Invalid credentials");
                setIsLoading(false);
                return;
            }
            userToLogin = { name: foundUser.name, email: foundUser.email };
        } else {
            // Fallback: Create a session on the fly if user not found in "db"
            // This ensures the "fake auth" works even without registration if desired,
            // or we could enforce registration. Let's be permissive for the demo.
            // userToLogin = { name: email.split("@")[0], email };

            // Actually, let's be strict to encourage the full flow:
            setError("User not found. Please register first.");
            setIsLoading(false);
            return;
        }

        // Save current user session
        localStorage.setItem("ebook-current-user", JSON.stringify(userToLogin));

        router.push("/");
    };

    return (
        <div className="min-h-screen flex flex-col bg-background transition-colors duration-300">
            <Header />





            <main className="flex-grow flex items-center justify-center px-6 py-32">
                <FadeIn className="w-full max-w-md">
                    <Card className="p-8 border-divider bg-background/50 backdrop-blur-sm">
                        <div className="mb-6">
                            <BackButton />
                        </div>
                        <div className="text-center mb-8">
                            <h1 className="font-display font-bold text-2xl mb-2">Welcome Back</h1>
                            <p className="text-sm text-secondary-text">
                                Sign in to continue reading
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {error && (
                                <div className="p-3 text-sm text-red-500 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30 rounded-sm">
                                    {error}
                                </div>
                            )}

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
                                {isLoading ? "Signing In..." : "Login"}
                            </Button>

                            <div className="text-center text-sm text-secondary-text">
                                Don&apos;t have an account?{" "}
                                <Link href="/register" className="text-foreground hover:underline font-medium">
                                    Register
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
