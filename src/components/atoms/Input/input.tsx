import { InputProps } from "@/types/Input/InputProps";

export default function Input({
    placeholder,
    onChange,
    value,
    type,
    className,
    required,
    disabled,
}: InputProps) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            className={className}
            required={required}
            disabled={disabled}
        />
    );
}
