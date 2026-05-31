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
    title: "Tommy | Software, AI & Systems",

    description:
        "Portfolio of Yutao Chen (Tommy), building software systems that connect AI and real-world workflows.",

    keywords: [
        "Tommy Chen",
        "Yutao Chen",
        "Software Engineer",
        "AI",
        "Next.js",
        "Portfolio",
        "UNSW",
    ],
};
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={geistSans.className}>{children}</body>
        </html>
    );
}
