import Section from "@/components/Section";
import InfoCard from "@/components/InfoCard";

export default function About() {
    return (
        <Section id="about" title="About">
            <div className="space-y-12">
                <div className="max-w-3xl">
                    <p className="text-lg leading-8 text-gray-500 lg:text-xl">
                        I build practical software systems that bridge
                        engineering, AI, and real-world business workflows. With
                        a background in IT and Commerce, I enjoy approaching
                        problems through systems thinking, technical
                        implementation, and user-centered design.
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    <InfoCard
                        title="Engineering"
                        description="Building practical software systems with modern web technologies, structured problem solving, and scalable development practices."
                    />

                    <InfoCard
                        title="AI & Automation"
                        description="Exploring AI-driven workflows, automation systems, and practical applications of language models to improve productivity and decision-making."
                    />

                    <InfoCard
                        title="Business & Systems Thinking"
                        description="Combining technical understanding with business thinking to design systems that solve practical workflow and operational challenges."
                    />
                </div>
            </div>
        </Section>
    );
}
