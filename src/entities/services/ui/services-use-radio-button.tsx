import { RadioButton } from "@/shared/ui/radio-buttons/radio-button"

export interface ServicesUseRadioButtonList { 
    id: string;
    label: string;
}

interface ServicesUseRadioButtonProps {
    useYN: ServicesUseRadioButtonList;
}

export const ServicesUseRadioButton = ({
    useYN
}: ServicesUseRadioButtonProps) => {
    return (
        <RadioButton
            value={useYN.id}
        >
            {useYN.label}
        </RadioButton>
    )
}