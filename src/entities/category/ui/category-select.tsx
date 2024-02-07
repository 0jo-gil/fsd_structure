import { Select, SelectButton, SelectOption, SelectOptions, SelectProps } from "@/shared/ui/selects";

interface CategoryProps {
    id: string;
    label: string;
}

interface CategorySelectProps extends SelectProps<string, string> {
    categories: CategoryProps[];
    value: string;
}

export function CategorySelect({
    categories,
    value,
    ...props
}: CategorySelectProps) {
    return (
        <Select {...props}>
            <SelectButton
                value={value}
                nonSelectedValue={null}
                placeholder="선택"
            >
                {value}
            </SelectButton>

            <SelectOptions>
                {
                    categories.map(category => (
                        <SelectOption key={category.id} value={category.id}>
                            {category.label}
                        </SelectOption>
                    ))
                }
            </SelectOptions>
        </Select>
    )
}