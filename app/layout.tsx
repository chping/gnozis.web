import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const title = "Gnozis | AI-Driven SRAM DTCO Workbench";
const description =
  "Building the Intelligence Layer for SRAM DTCO. Accelerating SRAM innovation with AI. Connect simulation, silicon and intelligence into one engineering workflow.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") || requestHeaders.get("host");
  const protocol =
    requestHeaders.get("x-forwarded-proto") ||
    (host?.includes("localhost") ? "http" : "https");
  const metadataBase = new URL(host ? `${protocol}://${host}` : "https://gnozis.ai");

  return {
    metadataBase,
    title,
    description,
    applicationName: "Gnozis",
    keywords: [
      "SRAM DTCO",
      "SRAM Workbench",
      "AI for semiconductor engineering",
      "surrogate modeling",
      "Vmin projection",
    ],
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      type: "website",
      title,
      description,
      siteName: "Gnozis",
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: "Gnozis AI-Driven SRAM DTCO Workbench",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png"],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
