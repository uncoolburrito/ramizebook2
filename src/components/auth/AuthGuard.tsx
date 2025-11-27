"use client";

import * as React from "react";
import { useRouter, usePathname } from "next/navigation";

export function AuthGuard({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();
    const [authorized, setAuthorized] = React.useState(false);

    React.useEffect(() => {
        // Public paths that don't require auth
        const publicPaths = ["/login", "/register", "/license", "/about", "/terms", "/privacy", "/cancellation"];

        // Check if current path is public
        const isPublicPath = publicPaths.some(path => pathname === path || pathname.startsWith(path + "/"));

        if (isPublicPath) {
            setAuthorized(true);
            return;
        }

        // Check for user session
        const currentUser = localStorage.getItem("ebook-current-user");

        if (!currentUser) {
            // Redirect to login if not authenticated
            router.push("/login");
        } else {
            setAuthorized(true);
        }
    }, [pathname, router]);

    // Prevent flashing of protected content
    if (!authorized) {
        return null; // Or a loading spinner
    }

    return <>{children}</>;
}
