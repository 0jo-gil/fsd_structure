import { useQuery } from "@tanstack/react-query"


export interface IQuery {
    key: string;
    queryFn: (params: any) => Promise<any>;
}

export interface ICallbacks<T> {
    onSuccess?: (data: T) => void;
    onError?: (error: any) => void;
}

type Options = {
    query: IQuery;
    params?: any;
    callbacks?: ICallbacks<any>;
    initEnabled?: boolean
}


const useCommonQuery = ({
    query, params = null, callbacks = {}, initEnabled = false
}: Options) => {
    
    const result = useQuery({
        queryKey: [query.key],
        queryFn: () => query.queryFn(params),
        ...callbacks
    });
    
    const status = {
        isLoading: result.isLoading,
        isSucess: result.isSuccess,
        isFetching: result.isFetching,    
        isRefetching: result.isRefetching,
        isError: result.isError,
        isLoadingError: result.isLoadingError
    }

    const request = result.refetch;

    return  {request, result, status}
}

export default useCommonQuery;

