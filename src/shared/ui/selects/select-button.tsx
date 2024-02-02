import { Listbox, ListboxButtonProps } from "@headlessui/react";



interface SelectButtonBaseProps extends ListboxButtonProps<'div'>{
    className?: string;
    children?: React.ReactNode;
}

interface SelectButtonWithPlaceholderProps<T> extends SelectButtonBaseProps {
    value: T;
    nonSelectedValue: T;
    placeholder: string;
    className?: string;
    children?: React.ReactNode;
}

interface SelectButtonWithoutPlaceholderProps extends SelectButtonBaseProps {
    value?: undefined;
    nonSelectedValue?: undefined;
    placeholder?: undefined;
    className?: string;
    children?: React.ReactNode;
}

type SelectButtonProps<T> = 
    | SelectButtonWithPlaceholderProps<T>
    | SelectButtonWithoutPlaceholderProps;

export function SelectButton<T>({
    value,
    nonSelectedValue,
    placeholder,
    children,
    className,
    ...props
}: SelectButtonProps<T>) {
    return (
        <Listbox.Button
            as={'div'}
            {...props}
            className={className}
            {...props}
        >
            {
                typeof value !== 'undefined' &&
                typeof nonSelectedValue !== 'undefined' &&
                value === nonSelectedValue ? (
                    <span>{placeholder}</span>
                ) : (
                    children
                )    
            }
            {/* 다운 아이콘 필요 */}
        </Listbox.Button>
    )
}