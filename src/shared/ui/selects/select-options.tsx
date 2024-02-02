import { Listbox, ListboxOptionsProps } from "@headlessui/react";


type SelectOptionsProps = ListboxOptionsProps<"ul"> & {
    className?: string;
}

export const SelectOptions = ({
    className,
    children,
    ...props
}: SelectOptionsProps) => {
    return (
        <Listbox.Options
            className={className}
            {...props}
            >
            {children}
        </Listbox.Options>
    )

}