import Image from "next/image";

type ProjectCardProps = {
    title: string;
    description: string;
    techStack: string[];
    image: string;
    liveUrl: string;
};

export default function ProjectCard({
    title,
    description,
    techStack,
    image,
    liveUrl,
}: ProjectCardProps) {
    return (
        <article className="overflow-hidden rounded-[2rem] border border-black/5 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="relative h-56 w-full bg-gray-100">
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 640px) 100vw,
           (max-width: 1024px) 50vw,
           33vw"
                    className="object-cover"
                />
            </div>

            <div className="space-y-5 p-8">
                <div>
                    <h3 className="mb-2 text-2xl font-semibold">{title}</h3>

                    <p className="leading-7 text-gray-500">{description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full border border-black/10 bg-gray-50 px-4 py-1 text-sm text-gray-600"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <a
                    href={liveUrl}
                    target="_blank"
                    className="inline-flex text-sm font-medium transition hover:opacity-70"
                    style={{
                        color: "var(--primary-color)",
                    }}
                >
                    View Project →
                </a>
            </div>
        </article>
    );
}
