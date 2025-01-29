import { TypographyProps } from "@/types/Typography/TypographyProps";

export default function Typography({
    children,
    variant,
    underline,
}: TypographyProps) {
    if (variant === "h1") {
        return (
            <h1
                className={`text-4xl font-bold text-gray-800 ${
                    underline ? "underline" : ""
                }`}
            >
                {children}
            </h1>
        );
    }
    if (variant === "h2") {
        return (
            <h2
                className={`text-3xl font-bold text-gray-800 ${
                    underline ? "underline" : ""
                }`}
            >
                {children}
            </h2>
        );
    }

    if (variant === "h3") {
        return (
            <h3
                className={`text-2xl font-bold text-gray-800 ${
                    underline ? "underline" : ""
                }`}
            >
                {children}
            </h3>
        );
    }
    if (variant === "h4") {
        return (
            <h4
                className={`text-xl font-bold text-gray-800 ${
                    underline ? "underline" : ""
                }`}
            >
                {children}
            </h4>
        );
    }

    if (variant === "h5") {
        return (
            <h5
                className={`text-lg font-bold text-gray-800 ${
                    underline ? "underline" : ""
                }`}
            >
                {children}
            </h5>
        );
    }
    if (variant === "h6") {
        return (
            <h6
                className={`text-base font-bold text-gray-800 ${
                    underline ? "underline" : ""
                }`}
            >
                {children}
            </h6>
        );
    }

    if (variant === "p") {
        return (
            <p
                className={`text-base text-gray-800 ${
                    underline ? "underline" : ""
                }`}
            >
                {children}
            </p>
        );
    }
    if (variant === "span") {
        return (
            <span
                className={`text-base text-gray-800 ${
                    underline ? "underline" : ""
                }`}
            >
                {children}
            </span>
        );
    }

    return <>{children}</>;
}
