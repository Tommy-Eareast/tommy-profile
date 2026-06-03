const LANGUAGE_COOKIE_KEY = "language";

export function setLanguageCookie(language: "en" | "zh") {
    if (typeof document === "undefined") return;

    const maxAge = 60 * 60 * 24 * 365; // 1 year

    document.cookie = `${LANGUAGE_COOKIE_KEY}=${language}; path=/; max-age=${maxAge}; SameSite=Lax`;
}
