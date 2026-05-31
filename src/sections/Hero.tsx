import Container from "@/components/Container";
import Image from "next/image";

export default function Hero() {
    return (
        <section id="hero" className="flex min-h-[90vh] items-center">
            <Container>
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    {/* Left Content */}
                    <div>
                        <p
                            className="mb-4 text-lg font-medium"
                            style={{
                                color: "var(--primary-color)",
                            }}
                        >
                            Yutao Chen
                        </p>

                        <h1 className="mb-6 text-5xl font-semibold tracking-tight text-gray-900 lg:text-7xl">
                            Building software systems that connect AI and
                            real-world workflows
                        </h1>

                        <p className="mb-10 max-w-2xl text-lg leading-8 text-gray-500">
                            IT & Commerce student building practical software
                            systems with engineering, automation and business
                            thinking.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            {/* Primary CTA */}
                            <a
                                href="#projects"
                                className="rounded-full px-7 py-3 text-sm font-medium text-white transition duration-300 hover:opacity-90"
                                style={{
                                    backgroundColor: "var(--primary-color)",
                                }}
                            >
                                View Projects
                            </a>

                            {/* Secondary CTA */}
                            <a
                                href="/resumes/SWE-resume-yutao-chen.pdf"
                                target="_blank"
                                className="rounded-full border border-gray-200 px-6 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                            >
                                Software Engineering Resume
                            </a>

                            <a
                                href="/resumes/product-consulting-resume-yutao-chen.pdf"
                                target="_blank"
                                className="rounded-full border border-gray-200 px-6 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                            >
                                Product & Consulting Resume
                            </a>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center lg:justify-end">
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
