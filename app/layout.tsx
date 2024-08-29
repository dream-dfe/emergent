import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";

const fira = Fira_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira",
  weight: "800",
});

export const metadata: Metadata = {
  title: "Emergent Academy",
  description: "...empowering Women",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider afterSignOutUrl="/">
      <html lang="en">
        <body className={`${fira.variable} `}>
          {children}
          <Toaster />
          <Script
          src="https://player.vimeo.com/api/player.js"
          strategy="beforeInteractive"
        />
        </body>

      </html>
    </ClerkProvider>
  );
}
