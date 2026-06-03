import { cookies } from "next/headers";
import { LanguageProvider } from "@/lib/LanguageContext";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
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
export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const cookieStore = await cookies();

    const language = cookieStore.get("language")?.value === "zh" ? "zh" : "en";

    return (
        <html lang={language}>
            <body className={geistSans.className}>
                <LanguageProvider initialLanguage={language}>
                    {children}
                </LanguageProvider>
            </body>
        </html>
    );
}
