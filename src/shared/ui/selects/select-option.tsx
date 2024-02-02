import { Listbox, ListboxOptionProps } from "@headlessui/react";

interface SelectOptionProps<T> extends ListboxOptionProps<"li", T> {
    className?: string;
}

export function SelectOption<T>({
    className,
    children,
    ...props
}: SelectOptionProps<T>) {
    return (
        <Listbox.Option
            className={className}
            {...props}
        >
            {children}
        </Listbox.Option>
    )
}