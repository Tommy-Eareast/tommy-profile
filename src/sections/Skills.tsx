import Section from "@/components/Section";
import SkillCard from "@/components/SkillCard";

import { skills } from "@/data/skills";

export default function Skills() {
    return (
        <Section id="skills" title="Skills">
            <div className="grid gap-6 lg:grid-cols-3">
                {skills.map((skill) => (
                    <SkillCard
                        key={skill.title}
                        title={skill.title}
                        description={skill.description}
                        items={skill.items}
                    />
                ))}
            </div>
        </Section>
    );
}
