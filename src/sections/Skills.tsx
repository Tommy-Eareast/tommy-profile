import Section from "@/components/Section";
import SkillCard from "@/components/SkillCard";

import { skills } from "@/data/skills";
import { useLanguage } from "@/lib/LanguageContext";

export default function Skills() {
    const { language, messages } = useLanguage();

    return (
        <Section id="skills" title={messages.skills.title}>
            <div className="grid gap-6 lg:grid-cols-3">
                {skills[language].map((skill, index) => (
                    <SkillCard
                        key={index}
                        title={skill.title}
                        description={skill.description}
                        items={skill.items}
                    />
                ))}
            </div>
        </Section>
    );
}
