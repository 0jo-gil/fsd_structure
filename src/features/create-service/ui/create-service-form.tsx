import { zodResolver } from "@hookform/resolvers/zod"
import { FormProvider, useForm } from "react-hook-form"
import { CreateServiceFormFieldset, CreateServiceFormFieldsetData, createServiceFormFieldsetSchema } from "./create-service-form-fieldset"
import { Table } from "@/shared/ui/tables"
import { useMemo } from "react"
import { ColumnDef } from "@tanstack/react-table"
import { useServicesStore } from "@/entities/services/model/store"
import { servicesQueries } from "@/entities/services/api"

type Item = {
    name: string;
    price: number;
    quantity: number;
}

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
            logoImg: [],
            iosUrl: '',
            aosUrl: '',
            webUrl: '',
            companySize: '',
        },
        resolver: zodResolver(createServiceFormFieldsetSchema)
    })

    const {
        mutate: createService,
        isPending,
        isError,
        error
    } = servicesQueries.useCreateServiceMutation();

    const { formState, handleSubmit } = methods;

    const onCreate = (payload: CreateServiceFormFieldsetData) => {
        createService({
            service: {...payload, categoryId: 1, companySize: 'big'}
        })
    }

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onCreate)}>
                <CreateServiceFormFieldset />
                <button type='submit' disabled={!formState.isValid}>등록</button>
            </form>

            {/* <Table columns={cols} data={dummyData()} /> */}
        </FormProvider>
    )
}