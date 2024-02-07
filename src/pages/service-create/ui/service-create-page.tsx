import { CreateServiceForm } from "@/features/services/create-service"
import { PageLayout } from "@/shared/ui/layouts"

export const ServiceCreatePage = () => {
    return (
        <PageLayout>
            <CreateServiceForm />
        </PageLayout>
    )
}