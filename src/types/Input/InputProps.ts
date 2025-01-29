export type InputProps = {
    label?: string;
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    className?: string;
    type?: string;
    required?: boolean;
    disabled?: boolean;
};
