"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function LanguageTransition({
    children,
}: {
    children: React.ReactNode;
}) {
    const { language, isTransitioning } = useLanguage();

    return (
        <div
            className={`transition-all duration-500 ease-out will-change-transform ${
                language === "en"
                    ? isTransitioning
                        ? "en-left"
                        : "en-right"
                    : isTransitioning
                      ? "zh-left"
                      : "zh-right"
            }`}
        >
            {children}
        </div>
    );
}
