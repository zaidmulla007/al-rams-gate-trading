import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Al Rams Gate Trading | Premium Kandura Manufacturing & Sales - Dubai",
  description:
    "Al Rams Gate Trading (Mohd. Chowdhry Trading) - Premium kandura manufacturer and retailer in Naif Souq, Dubai. Emirati, Omani & Saudi kanduras. Best Wearings For Men.",
  keywords:
    "kandura, thobe, jubba, emirati kandura, omani kandura, saudi thobe, dubai, naif souq, men fashion, traditional clothing, UAE",
  openGraph: {
    title: "Al Rams Gate Trading | Premium Kandura Manufacturing & Sales",
    description:
      "Premium kandura manufacturer and retailer in Naif Souq, Dubai. Crafting elegance and tradition for the modern gentleman.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
