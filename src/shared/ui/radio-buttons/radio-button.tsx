import { RadioGroup, RadioOptionProps } from "@headlessui/react";

export interface RadioButtonProps<T> extends RadioOptionProps<'li', T> {
    className?: string;
}

export function RadioButton<T>({
    children,
    className,
    ...props
}: RadioButtonProps<T>) {
    return (
        <RadioGroup.Option
            as={'li'}
            className={className}
            {...props}
        >
            {children}
        </RadioGroup.Option>
    )
}