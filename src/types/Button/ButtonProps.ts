export type ButtonProps = {
    label: string;
    onClick: () => void;
    className?: string;
    color?: ButtonColor;
    size?: ButtonSize;
    variant?: ButtonVariant;
    disabled?: boolean;
};

export type ButtonColor =
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info";

export type ButtonSize = "sm" | "md" | "lg";

export type ButtonVariant = "solid" | "outline" | "ghost" | "link";
