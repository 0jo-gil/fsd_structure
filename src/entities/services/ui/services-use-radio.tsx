import { RadioButtonGroup, RadioButtonGroupProps } from "@/shared/ui/radio-buttons/radio-button-group"
import { ServicesUseRadioButton, ServicesUseRadioButtonList } from "./services-use-radio-button"

interface ServicesUseRadioProp extends RadioButtonGroupProps<string | null> {
    useYNList: ServicesUseRadioButtonList[];
}

export const ServicesUseRadio = ({
    useYNList,
    ...props
}: ServicesUseRadioProp) => {
    return (
        <RadioButtonGroup 
            label="사용여부"
            {...props}
        >
            {
                useYNList.map((useYN) => (
                    <ServicesUseRadioButton useYN={useYN} key={useYN.id} />
                ))
            }
        </RadioButtonGroup>
    )

}