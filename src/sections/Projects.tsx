import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";

import { projects } from "@/data/projects";
import { useLanguage } from "@/lib/LanguageContext";

export default function Projects() {
    const { language, messages } = useLanguage();

    return (
        <Section id="projects" title={messages.projects.title}>
            <div className="grid gap-8 lg:grid-cols-2">
                {projects[language].map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        techStack={project.techStack}
                        image={project.image}
                        liveUrl={project.liveUrl}
                    />
                ))}
            </div>
        </Section>
    );
}
