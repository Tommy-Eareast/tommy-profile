"use client";

import { createContext, useContext, useMemo, useState } from "react";

import en from "@/messages/en";
import zh from "@/messages/zh";
import { setLanguageCookie } from "@/lib/language-cookie";

type Language = "en" | "zh";

type LanguageContextType = {
    language: Language;
    toggleLanguage: () => void;
    messages: typeof en;
    isTransitioning: boolean;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined,
);

export function LanguageProvider({
    children,
    initialLanguage,
}: {
    children: React.ReactNode;
    initialLanguage: Language;
}) {
    const [language, setLanguage] = useState<Language>(initialLanguage);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const toggleLanguage = () => {
        setIsTransitioning(true);

        setTimeout(() => {
            setLanguage((prev) => {
                const next = prev === "en" ? "zh" : "en";
                setLanguageCookie(next);
                return next;
            });

            setIsTransitioning(false);
        }, 300);
    };

    const messages = useMemo(() => (language === "en" ? en : zh), [language]);

    return (
        <LanguageContext.Provider
            value={{
                language,
                toggleLanguage,
                messages,
                isTransitioning,
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error("useLanguage must be used inside LanguageProvider");
    }

    return context;
}
