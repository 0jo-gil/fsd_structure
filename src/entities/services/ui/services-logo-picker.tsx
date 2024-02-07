import { CreateServiceFormFieldsetData } from "@/features/services/create-service/ui/create-service-form-fieldset"
import { File } from "@/shared/ui/files"
import { UseFormSetValue } from "react-hook-form"

export const ServicesLogoPicker = ({name, setValue}: {
    name: string;
    setValue: UseFormSetValue<CreateServiceFormFieldsetData>;
}) => {
    return (
        <File 
            name={name}
            label={'앱 아이콘'} 
            setValue={setValue} 
        />
    )
}