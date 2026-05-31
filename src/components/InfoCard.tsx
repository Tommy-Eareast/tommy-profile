type InfoCardProps = {
    title: string;
    description: string;
};

export default function InfoCard({ title, description }: InfoCardProps) {
    return (
        <div className="rounded-[2rem] border border-black/5 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="mb-4 text-xl font-semibold text-gray-900">
                {title}
            </h3>

            <p className="leading-7 text-gray-500">{description}</p>
        </div>
    );
}
