"use client";

import { useState } from "react";

import en from "@/messages/en";
import zh from "@/messages/zh";

export default function useLanguage() {
    const [language, setLanguage] = useState<"en" | "zh">("en");

    const messages = language === "en" ? en : zh;

    return {
        language,
        setLanguage,
        messages,
    };
}
