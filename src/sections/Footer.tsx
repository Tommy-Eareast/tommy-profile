import Container from "@/components/Container";

export default function Footer() {
    return (
        <footer className="border-t border-black/5 py-8">
            <Container>
                <div className="flex items-center flex-col justify-between gap-3 sm:flex-row text-sm text-gray-400">
                    <p>© 2026 Tommy</p>

                    <a href="#hero" className="transition hover:text-gray-600">
                        Back to top
                    </a>
                </div>
            </Container>
        </footer>
    );
}
