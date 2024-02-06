import { servicesApi } from "@/shared/api/service-api";
import { useAxios, useCommonMutation } from "@/shared/lib/fetch/hooks";
import { useEffect } from "react";

export const useServicesStore = () => {
    const { requestApi } = useAxios();


    const requestGetStoreDetail = {
        key: 'getStoreDetail',
        mutationFn: (params: any) =>
            requestApi('POST', '/services', params)
    }

    const { request: requestCreateService, status, result } = useCommonMutation({
        query: requestGetStoreDetail,
        callbacks: {
            onSuccess: () => {
                console.log('Service created successfully');
            },
            onError: () => {
                console.log('Service creation failed');
            }
        }
    })

    const createService = async (service: any) => {
        const createdService = await servicesApi.createService(service);
        requestCreateService({ service: createdService });

        return {
            status,
            result
        };
    }

    return {
        createService
    }
}