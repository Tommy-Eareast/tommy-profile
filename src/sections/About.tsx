import Section from "@/components/Section";
import InfoCard from "@/components/InfoCard";
import { useLanguage } from "@/lib/LanguageContext";

export default function About() {
    const { messages } = useLanguage();

    return (
        <Section id="about" title={messages.about.title}>
            <div className="space-y-12">
                <div className="max-w-3xl">
                    <p className="text-lg leading-8 text-gray-500 lg:text-xl">
                        {messages.about.description}
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    <InfoCard
                        title={messages.about.cards.engineering.title}
                        description={
                            messages.about.cards.engineering.description
                        }
                    />

                    <InfoCard
                        title={messages.about.cards.ai.title}
                        description={messages.about.cards.ai.description}
                    />

                    <InfoCard
                        title={messages.about.cards.business.title}
                        description={messages.about.cards.business.description}
                    />
                </div>
            </div>
        </Section>
    );
}
