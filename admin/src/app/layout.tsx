import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";

import "./globals.css";
import { ThemeProvider } from "@/app/theme-provider";
import { useSession } from "next-auth/react";

export const metadata: Metadata = {
  title: "TokenPilot - MM Admin Dashboard",
  description: "Tokepilot MM admin dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main>{children}</main>

          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
