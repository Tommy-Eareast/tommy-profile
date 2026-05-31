import Link from "next/link";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
    href?: string;
    children: React.ReactNode;
    variant?: ButtonVariant;
    target?: string;
};

export default function Button({
    href,
    children,
    variant = "primary",
    target,
}: ButtonProps) {
    const baseStyles =
        "inline-flex items-center rounded-full px-7 py-3 text-sm font-medium transition duration-300";

    const variants = {
        primary: "text-white hover:opacity-90",

        secondary:
            "border border-black/10 bg-white text-gray-700 hover:bg-gray-50",
    };

    const style =
        variant === "primary"
            ? {
                  backgroundColor: "var(--primary-color)",
              }
            : {};

    if (href) {
        return (
            <Link
                href={href}
                target={target}
                className={`${baseStyles} ${variants[variant]}`}
                style={style}
            >
                {children}
            </Link>
        );
    }

    return (
        <button className={`${baseStyles} ${variants[variant]}`} style={style}>
            {children}
        </button>
    );
}
