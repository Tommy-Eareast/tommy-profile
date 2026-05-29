type SectionProps = {
    id: string;
    title: string;
    children: React.ReactNode;
};

export default function Section({ id, title, children }: SectionProps) {
    return (
        <section id={id} className="py-24">
            <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
                <h2 className="mb-4 text-3xl font-semibold">{title}</h2>

                {children}
            </div>
        </section>
    );
}
