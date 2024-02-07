import { servicesQueries } from "@/entities/services/api"
import { PageLayout } from "@/shared/ui/layouts"
import { ServicesList } from "@/widgets/serivces-list"
import { useSuspenseQueries } from "@tanstack/react-query"

export const ServiceOverviewPage = () => {
    const {data} = useSuspenseQueries({
        queries: [
            servicesQueries.servicesService.queryOptions('service', {
                pageNo: 1,
                type: 'all'
            })
        ]
    })

    return (
        <PageLayout>
            <h1>Service Overview</h1>
            
            <ServicesList />
        </PageLayout>
    )
}