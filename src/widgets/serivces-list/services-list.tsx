import { servicesQueries } from "@/entities/services/api"
import { Table } from "@/shared/ui/tables";
import { useSuspenseQueries } from "@tanstack/react-query"

function List() {
    const result = useSuspenseQueries({
        queries: [
            servicesQueries.servicesService.queryOptions('service', {
                pageNo: 1,
                type: 'all'
            })
        ]
    })

    const data = result?.[0].data?.data?.items;

    const cols = () => [
        {header: 'id', cell: (row: any) => row.renderValue(), accessorKey: 'id'},
        {header: '서비스명', cell: (row: any) => row.renderValue(), accessorKey: 'name'},
        {header: '카테고리', cell: (row: any) => row.renderValue(), accessorKey: 'category'},
        {header: '사용여부', cell: (row: any) => row.renderValue(), accessorKey: 'useYN'},
        {header: 'iOS URL', cell: (row: any) => row.renderValue(), accessorKey: 'iosUrl'},
        {header: 'AOS URL', cell: (row: any) => row.renderValue(), accessorKey: 'aosUrl'},
        {header: 'WEB URL', cell: (row: any) => row.renderValue(), accessorKey: 'webUrl'},
        {header: '작성일', cell: (row: any) => row.renderValue(), accessorKey: 'createdAt'},
        {header: '업데이트일', cell: (row: any) => row.renderValue(), accessorKey: 'updatedAt'},
    ]

    return (
        <Table columns={cols()} data={data} />
    )
}

export const ServicesList = () => { 

    return (
        <List />
    )
}
