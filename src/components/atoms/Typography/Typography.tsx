import { TypographyProps } from "@/types/Typography/TypographyProps";

export default function Typography({
    children,
    variant,
    underline,
    className,
    colorWhite,
}: TypographyProps) {
    if (variant === "h1") {
        return (
            <h1
                className={`text-4xl font-bold  ${
                    underline ? "underline" : ""
                } ${colorWhite ? "text-white" : "text-gray-800"} ${className}`}
            >
                {children}
            </h1>
        );
    }
    if (variant === "h2") {
        return (
            <h2
                className={`text-3xl font-bold ${
                    underline ? "underline" : ""
                } ${colorWhite ? "text-white" : "text-gray-800"} ${className}`}
            >
                {children}
            </h2>
        );
    }

    if (variant === "h3") {
        return (
            <h3
                className={`text-2xl font-bold ${
                    underline ? "underline" : ""
                } ${colorWhite ? "text-white" : "text-gray-800"} ${className}`}
            >
                {children}
            </h3>
        );
    }
    if (variant === "h4") {
        return (
            <h4
                className={`text-xl font-bold ${underline ? "underline" : ""} ${
                    colorWhite ? "text-white" : "text-gray-800"
                } ${className}`}
            >
                {children}
            </h4>
        );
    }

    if (variant === "h5") {
        return (
            <h5
                className={`text-lg font-bold ${underline ? "underline" : ""} ${
                    colorWhite ? "text-white" : "text-gray-800"
                } ${className}`}
            >
                {children}
            </h5>
        );
    }
    if (variant === "h6") {
        return (
            <h6
                className={`text-base font-bold ${
                    underline ? "underline" : ""
                } ${colorWhite ? "text-white" : "text-gray-800"} ${className}`}
            >
                {children}
            </h6>
        );
    }

    if (variant === "p") {
        return (
            <p
                className={`text-base ${underline ? "underline" : ""} ${
                    colorWhite ? "text-white" : "text-gray-800"
                } ${className}`}
            >
                {children}
            </p>
        );
    }
    if (variant === "span") {
        return (
            <span
                className={`text-base ${underline ? "underline" : ""} ${
                    colorWhite ? "text-white" : "text-gray-800"
                } ${className}`}
            >
                {children}
            </span>
        );
    }

    return <>{children}</>;
}
