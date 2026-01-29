import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  preload: true,
});

export const metadata: Metadata = {
  title: "Talon Dunbar | Full-Stack Developer",
  description: "Computer Science Student and Full-Stack Developer based in Montreal. Specializing in React, Next.js, Go, and modern web technologies.",
  metadataBase: new URL("https://portfolio.talonlikeaclaw.com"),
  openGraph: {
    title: "Talon Dunbar | Infrastructure Enthusiast",
    description: "Computer Science Student specializing in infrastructure, DevOps, and modern web technologies.",
    url: "https://portfolio.talonlikeaclaw.com",
    siteName: "Talon Dunbar",
    locale: "en_US",
    type: "website",
    images: ["/headshot.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Talon Dunbar | Infrastructure Enthusiast",
    description: "Computer Science Student specializing in infrastructure, DevOps, and modern web technologies.",
    images: ["/headshot.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "theme-color": "#0a0a0f",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${jetbrainsMono.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
