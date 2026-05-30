import Container from "@/components/Container";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur-xl">
            <Container>
                <nav className="flex h-16 items-center justify-between">
                    <a
                        href="#hero"
                        className="text-sm font-semibold tracking-tight"
                    >
                        Tommy
                    </a>

                    <ul className="flex items-center gap-6 text-sm text-gray-500">
                        <li>
                            <a
                                href="#about"
                                className="transition hover:text-black"
                            >
                                About
                            </a>
                        </li>

                        <li>
                            <a
                                href="#projects"
                                className="transition hover:text-black"
                            >
                                Projects
                            </a>
                        </li>

                        <li>
                            <a
                                href="#skills"
                                className="transition hover:text-black"
                            >
                                Skills
                            </a>
                        </li>

                        <li>
                            <a
                                href="#contact"
                                className="transition hover:text-black"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </Container>
        </header>
    );
}
