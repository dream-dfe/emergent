import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { auth } from "@clerk/nextjs/server";
import { SyncActiveOrganization } from "@/components/common/SyncActiveOrganization";

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
  const { userId, sessionClaims } = auth();

  return (
    <ClerkProvider afterSignOutUrl="/">
      <SyncActiveOrganization membership={sessionClaims?.membership} />
      <html lang="en">
        <body className={`${fira.variable} `}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
