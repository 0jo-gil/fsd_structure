import { zodResolver } from "@hookform/resolvers/zod"
import { FormProvider, useForm } from "react-hook-form"
import { CreateServiceFormFieldset, CreateServiceFormFieldsetData, createServiceFormFieldsetSchema } from "./create-service-form-fieldset"

export const CreateServiceForm = () => {
    const methods = useForm<CreateServiceFormFieldsetData>({
        defaultValues: {
            name_KR: '',
            name_EN: '',
            categoryId: '',
            desc_KR: '',
            desc_EN: '',
            company_KR: '',
            company_EN: '',
            useYN: '',
            logoImg: '',
            iosUrl: '',
            aosUrl: '',
            webUrl: '',
        },
        resolver: zodResolver(createServiceFormFieldsetSchema)
    })

    const {formState, handleSubmit} = methods;

    const onCreateService = async (payload: CreateServiceFormFieldsetData) => {
        console.log(payload)
        console.log(formState)
    }


    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onCreateService)}>
                <CreateServiceFormFieldset />
                <button type='submit' disabled={!formState.isValid}>등록</button>
            </form>
        </FormProvider>
    )
}