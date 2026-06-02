import { LanguageProvider } from "@/lib/LanguageContext";
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
    metadataBase: new URL("https://tommy-profile.vercel.app"),

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

    openGraph: {
        title: "Tommy | Software, AI & Systems",

        description:
            "Building software systems that connect AI and real-world workflows.",

        url: "https://tommy-profile.vercel.app",

        siteName: "Tommy",

        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
            },
        ],

        locale: "en_AU",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",

        title: "Tommy | Software, AI & Systems",

        description:
            "Building software systems that connect AI and real-world workflows.",

        images: ["/og-image.png"],
    },
};
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={geistSans.className}>
                <LanguageProvider>{children}</LanguageProvider>
            </body>
        </html>
    );
}
