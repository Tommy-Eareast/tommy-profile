type InputProps = {
    label: string;
    type?: string;
    placeholder?: string;
};

export default function Input({
    label,
    type = "text",
    placeholder,
}: InputProps) {
    return (
        <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">{label}</label>

            <input
                type={type}
                placeholder={placeholder}
                className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-black/20"
            />
        </div>
    );
}
