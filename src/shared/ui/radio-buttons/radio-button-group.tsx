import { RadioGroup, RadioGroupProps } from "@headlessui/react";

export interface RadioButtonGroupProps<T> extends RadioGroupProps<"ul", T> {
    label?: string;
    className?: string;
}

export function RadioButtonGroup<T>({
    children,
    className,
    label,
    ...props
}: RadioButtonGroupProps<T>) {
    return (
        <div>
            {label && <label>{label}</label>}
            <RadioGroup
                as="ul"
                className={className}
                {...props}
            >
                {children}
            </RadioGroup>
        </div>
    )
}