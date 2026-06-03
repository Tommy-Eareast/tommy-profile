"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function LanguageTransition({
    children,
}: {
    children: React.ReactNode;
}) {
    const { language, isTransitioning } = useLanguage();
    const direction = language === "en" ? "left" : "right";

    return (
        <div
            className={`transition-all duration-500 ease-out will-change-transform ${
                isTransitioning
                    ? `swipe-out-${direction}`
                    : `swipe-in-${direction}`
            }`}
        >
            {children}
        </div>
    );
}
