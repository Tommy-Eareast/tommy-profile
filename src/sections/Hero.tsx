import Container from "@/components/Container";

export default function Hero() {
    return (
        <section id="hero" className="flex min-h-[80vh] items-center">
            <Container>
                <div className="max-w-3xl">
                    <p className="mb-4 text-sm text-blue-600">Yutao Chen</p>

                    <h1 className="mb-6 text-5xl font-bold tracking-tight">
                        Building software systems that connect AI and real-world
                        workflows
                    </h1>

                    <p className="max-w-2xl text-lg text-gray-600">
                        IT & Commerce student building practical software
                        systems with engineering, automation and business
                        thinking.
                    </p>
                </div>
            </Container>
        </section>
    );
}
