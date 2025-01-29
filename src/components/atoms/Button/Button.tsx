import { ButtonProps } from "@/types/Button/ButtonProps";

export default function Button({
    label,
    onClick,
    className,
    disabled = false,
}: ButtonProps) {
    return (
        <button className={className} onClick={onClick} disabled={disabled}>
            {label}
        </button>
    );
}
