import Container from "@/components/Container";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
            <Container>
                <nav className="flex h-16 items-center justify-between">
                    <div className="font-semibold">Tommy</div>

                    <ul className="flex gap-6 text-sm text-gray-600">
                        <li>
                            <a href="#about">About</a>
                        </li>

                        <li>
                            <a href="#projects">Projects</a>
                        </li>

                        <li>
                            <a href="#skills">Skills</a>
                        </li>

                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </Container>
        </header>
    );
}
