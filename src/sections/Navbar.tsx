"use client";

import useLanguage from "@/lib/useLanguage";
import Container from "@/components/Container";

export default function Navbar() {
    const { language, setLanguage, messages } = useLanguage();
    return (
        <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur-xl">
            <Container>
                <nav className="flex h-16 items-center justify-between gap-4">
                    <a
                        href="#hero"
                        className="text-sm font-semibold tracking-tight"
                    >
                        {messages.nav.name}
                    </a>

                    <ul className="flex flex-wrap items-center justify-end gap-4 text-sm text-gray-500 sm:gap-6">
                        <li>
                            <a
                                href="#about"
                                className="transition hover:text-black"
                            >
                                {messages.nav.about}
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                className="transition hover:text-black"
                            >
                                {messages.nav.projects}
                            </a>
                        </li>
                        <li>
                            <a
                                href="#skills"
                                className="transition hover:text-black"
                            >
                                {messages.nav.skills}
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="transition hover:text-black"
                            >
                                {messages.nav.contact}
                            </a>
                        </li>
                    </ul>
                    <button
                        onClick={() =>
                            setLanguage(language === "en" ? "zh" : "en")
                        }
                        className="rounded-full border border-black/10 px-4 py-2 text-sm transition hover:bg-gray-50"
                    >
                        {language === "en" ? "中文" : "EN"}
                    </button>
                </nav>
            </Container>
        </header>
    );
}
