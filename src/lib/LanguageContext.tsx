"use client";

import { createContext, useContext, useMemo, useState } from "react";

import en from "@/messages/en";
import zh from "@/messages/zh";

type Language = "en" | "zh";

type LanguageContextType = {
    language: Language;
    toggleLanguage: () => void;
    messages: typeof en;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined,
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>("en");

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "en" ? "zh" : "en"));
    };

    const messages = useMemo(() => (language === "en" ? en : zh), [language]);

    return (
        <LanguageContext.Provider
            value={{
                language,
                toggleLanguage,
                messages,
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
