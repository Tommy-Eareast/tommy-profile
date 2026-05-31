type SkillCardProps = {
    title: string;
    description: string;
    items: string[];
};

export default function SkillCard({
    title,
    description,
    items,
}: SkillCardProps) {
    return (
        <article className="rounded-[2rem] border border-black/5 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="mb-6">
                <h3 className="mb-3 text-2xl font-semibold">{title}</h3>

                <p className="leading-7 text-gray-500">{description}</p>
            </div>

            <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                    <span
                        key={item}
                        className="rounded-full border border-black/10 bg-gray-50 px-4 py-2 text-sm text-gray-600"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </article>
    );
}
