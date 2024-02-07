import { queryClient } from "@/shared/lib/react-query"
import { useMutation } from "@tanstack/react-query";
import { createServiceMutation } from "./services-api";
import { useNavigate } from "react-router-dom";
import { createApiRequest } from "@/shared/lib/fetch";


const keys = {
    root: () => ['services'],
    services: (slug: string) => 
        [...keys.root(), 'services', slug],
    serviceList: (slug: string) => 
        [...keys.root(), 'serviceList', slug] as const,
    createService: () => 
        [...keys.root(), 'createService'] as const,
}

export const servicesService = {
    queryKey: (slug: string) => keys.services(slug),

    getCache: (slug: string) => 
        queryClient.getQueryData(servicesService.queryKey(slug)),

    setCache: (service: any) => 
        queryClient.setQueryData(servicesService.queryKey(service.slug), service),

    removeCache: (slug: string) =>
        queryClient.removeQueries({queryKey: servicesService.queryKey(slug)}),
}

export async function serviceQuery(
    params: {query: any},
    signal?: AbortSignal
) {
    return await createApiRequest({
        method: 'GET',
        url: '/services',
        body: params.query,
    }, signal)
}

export function useCreateServiceMutation() {
    const navigate = useNavigate();

    return useMutation({
        mutationKey: keys.createService(),
        mutationFn: createServiceMutation,
        onSuccess: (service) => {
            servicesService.setCache(service)
            navigate(-1);
        }
    })
}