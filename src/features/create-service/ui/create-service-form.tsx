import { zodResolver } from "@hookform/resolvers/zod"
import { FormProvider, useForm } from "react-hook-form"
import { CreateServiceFormFieldset, CreateServiceFormFieldsetData, createServiceFormFieldsetSchema } from "./create-service-form-fieldset"
import { Table } from "@/shared/ui/tables"
import { useMemo } from "react"
import { ColumnDef } from "@tanstack/react-table"

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
            logoImg: '',
            iosUrl: '',
            aosUrl: '',
            webUrl: '',
        },
        resolver: zodResolver(createServiceFormFieldsetSchema)
    })


    const cols = useMemo<ColumnDef<Item>[]>(
    () => [
    {
        header: 'Name',
        cell: (row) => row.renderValue(),
        accessorKey: 'name',
    },
    {
        header: 'Price',
        cell: (row) => row.renderValue(),
        accessorKey: 'price',
    },
    {
        header: 'Quantity',
        cell: (row) => row.renderValue(),
        accessorKey: 'quantity',
    },
    ],
    []
    );

    const dummyData = () => {
    const items = [];
    for (let i = 0; i < 10; i++) {
    items.push({
        id: i,
        name: `Item ${i}`,
        price: 100,
        quantity: 1,
    });
    }
    return items;
    }

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

            <Table columns={cols} data={dummyData()} />
        </FormProvider>
    )
}