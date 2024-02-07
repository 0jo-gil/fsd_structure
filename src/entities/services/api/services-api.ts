import { CreateServiceFormFieldsetData } from "@/features/services/create-service/ui/create-service-form-fieldset";
import { createApiRequest } from "@/shared/lib/fetch";

export async function serviceQuery(
    params: {query: any},
    signal?: AbortSignal
) {
    return await createApiRequest({
        method: 'POST',
        url: '/services/list',
        body: params.query,
    }, signal).then(res => res.data)
}

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