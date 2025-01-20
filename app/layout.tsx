import type { Metadata } from "next"
import { Fira_Sans } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const fira = Fira_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira",
  weight: "800",
})

export const metadata: Metadata = {
  title: {
    default: "Emergent Academy | Empowering Women Entrepreneurs",
    template: "%s | Emergent Academy",
  },
  description:
    "Emergent Academy empowers women through entrepreneurship, business coaching, and accelerator programs. Discover purpose in business and master pitching for success.",
  keywords: [
    "female entrepreneurship",
    "purpose in business",
    "pitching successfully",
    "business coaching",
    "business models",
    "business accelerator",
    "one on one coaching",
    "pitching through storytelling",
    "pitching for funding",
    "business development",
  ],
  authors: [{ name: "Emergent Academy" }],
  creator: "Emergent Academy",
  publisher: "Emergent Academy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Emergent Academy | Empowering Women Entrepreneurs",
    description:
      "Discover purpose in business, master pitching, and accelerate your entrepreneurial journey with Emergent Academy.",
    url: "https://academy.dreamfactory.africa",
    siteName: "Emergent Academy",
    images: [
      {
        url: "https://academy.dreamfactory.africa/og-image.png", // Replace with your actual OG image
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
 
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider afterSignOutUrl="/">
      <html lang="en">
        <body className={`${fira.variable}`}>
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  )
}

