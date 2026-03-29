import type { Metadata } from "next";
import { Geist, Geist_Mono, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SIIF | Launch Your Startup Journey",
  description: "SSCBS Innovation and Incubation Foundation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${hankenGrotesk.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
