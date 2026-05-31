import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";

import { projects } from "@/data/projects";

export default function Projects() {
    return (
        <Section id="projects" title="Projects">
            <div className="grid gap-8 lg:grid-cols-2">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.title}
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
