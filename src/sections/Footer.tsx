import Container from "@/components/Container";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
    const { messages } = useLanguage();

    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-black/5 py-8">
            <Container>
                <div className="flex flex-col items-center justify-between gap-3 text-sm text-gray-400 sm:flex-row">
                    <p>© {year} Tommy</p>

                    <a href="#hero" className="transition hover:text-gray-600">
                        {messages.footer.backToTop}
                    </a>
                </div>
            </Container>
        </footer>
    );
}
