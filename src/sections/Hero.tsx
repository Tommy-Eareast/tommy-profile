import { useLanguage } from "@/lib/LanguageContext";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Image from "next/image";

export default function Hero() {
    const { messages } = useLanguage();

    return (
        <section id="hero" className="flex min-h-[90vh] items-center">
            <Container>
                <div className="grid items-center gap-10 lg:gap-16 lg:grid-cols-2">
                    {/* Left Content */}
                    <div>
                        <p
                            className="mb-4 text-lg font-medium"
                            style={{ color: "var(--primary-color)" }}
                        >
                            {messages.hero.name}
                        </p>

                        <h1 className="mb-6 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-7xl">
                            {messages.hero.headline}
                        </h1>

                        <p className="mb-10 max-w-2xl text-lg leading-8 text-gray-500">
                            {messages.hero.description}
                        </p>

                        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                            <Button href="#projects">
                                {messages.hero.cta.projects}
                            </Button>

                            <Button
                                href="/resumes/SWE-resume-yutao-chen.pdf"
                                variant="secondary"
                                target="_blank"
                            >
                                {messages.hero.cta.sweResume}
                            </Button>

                            <Button
                                href="/resumes/product-consulting-resume-yutao-chen.pdf"
                                variant="secondary"
                                target="_blank"
                            >
                                {messages.hero.cta.consultingResume}
                            </Button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="order-first flex justify-center lg:order-none lg:justify-end">
                        <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-gray-50 shadow-sm transition duration-300 hover:-translate-y-1">
                            <Image
                                src="/images/profile.jpg"
                                alt="Yutao Chen profile image"
                                width={430}
                                height={540}
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
