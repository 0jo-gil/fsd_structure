import { servicesApi } from "@/shared/api/service-api";
import { useAxios, useCommonMutation, useCommonQuery } from "@/shared/lib/fetch/hooks";

export const useServicesStore = () => {
    const { requestApi } = useAxios();

////////////////////////////////////////////////////////
    const requestGetServiceList = {
        key: 'getServiceList',
        queryFn: (params: any) => 
            requestApi('GET', '/services', params)
    }

    const {request: getServiceList, status: getServiceListStatus, result: getServiceListResult} = useCommonQuery({
        query: requestGetServiceList,
        callbacks: {
            onSuccess: () => {
                console.log('Service list fetched successfully');
            },
            onError: () => {
                console.log('Service list fetching failed');
            }
        }
    })


    const onServiceList = async () => {
        getServiceList({
            page: 1,
        })
    }


////////////////////////////////////////////////////////

////////////////////////////////////////////////////////

    const requestCreateService = {
        key: 'createService',
        mutationFn: (params: any) =>
            requestApi('POST', '/services', params)
    }
    
    const { request: createService, status: createServiceStatus, result: createServiceResult } = useCommonMutation({
        query: requestCreateService,
        callbacks: {
            onSuccess: () => {
                console.log('Service created successfully');
            },
            onError: () => {
                console.log('Service creation failed');
            }
        }
    })

     const onCreateService = async (service: any) => {
        const createdService = await servicesApi.createService(service);
        createService({ ...createdService, companySize: '대기업' });

        return {
            createServiceStatus,
            createServiceResult
        };
    }

////////////////////////////////////////////////////////

   
    return {
        onCreateService
    }
}