export interface TypographyProps {
    children: React.ReactNode;
    variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
    underline?: boolean;
    className?: string;
}
