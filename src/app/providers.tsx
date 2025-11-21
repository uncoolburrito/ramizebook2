"use client";

import { ThemeProvider } from "next-themes";
import * as React from "react";

import { AuthGuard } from "@/components/auth/AuthGuard";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <AuthGuard>{children}</AuthGuard>
    </ThemeProvider>
  );
}
