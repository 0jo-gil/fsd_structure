import { CreateServiceFormFieldsetData } from "@/features/create-service/ui/create-service-form-fieldset";
import { createApiRequest } from "@/shared/lib/fetch";

export async function createServiceMutation(
    params: {
        service: CreateServiceFormFieldsetData
    },
    signal?: AbortSignal
) {
    return await createApiRequest({
        method: 'POST',
        url: '/services',
        body: params.service,
    }, signal)
}