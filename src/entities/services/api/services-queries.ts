import { queryClient } from "@/shared/lib/react-query"
import { queryOptions, useMutation } from "@tanstack/react-query";
import { createServiceMutation, serviceQuery } from "./services-api";
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

    queryOptions: (slug: string, {
        pageNo, type
    }: {pageNo: number, type: string}) => {
        const serviceKey = servicesService.queryKey(slug);

        return queryOptions({
            queryKey: serviceKey,
            queryFn: async ({signal}) => {
                const service = await serviceQuery({query: {
                    pageNo, type
                }}, signal);

                servicesService.setCache(service);
                return service;
            },
            initialData: () => servicesService.getCache(slug)!,
            initialDataUpdatedAt: () => 
                queryClient.getQueryState(serviceKey)?.dataUpdatedAt,
        })
    }
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