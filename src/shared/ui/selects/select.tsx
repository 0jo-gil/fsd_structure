import {Listbox, ListboxProps} from "@headlessui/react";

 export interface SelectProps<T, K> extends ListboxProps<"div", T, K> {
    label?: string;
    children?: React.ReactNode;
 }

export const Select = <T, K>({
    label,
    children,
    ...props
}: SelectProps<T, K>) => {
return (
    <Listbox
        as={'div'}
        {...props}
    >
        {label && <label>{label}</label>}
        <div>{children}</div>
    </Listbox>
)
}