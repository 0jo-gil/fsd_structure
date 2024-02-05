import { useMutation } from "@tanstack/react-query";
import {useState} from "react";
// import {useMutation} from "react-query";


export interface IMutateQuery {
    key: string;
    mutationFn: (params: any) => Promise<any>;
}

export interface ICallbacks<T> {
    onSuccess?: (data: T) => void;
    onError?: (error: Error) => void;
}

export type Options = {
    query: IMutateQuery;
    callbacks?: ICallbacks<any>;
    initEnabled?: boolean;
}

const useCommonMutation = ({
                               query,
                            //    params = null,
                               callbacks = {},
                               initEnabled = false,
                           }: Options) => {
    const [enabled, setEnabled] = useState(initEnabled);

    // const mutationResult = useMutation([query.key], (params: any) => query.mutationFn(params), {
    //     // enabled: enabled,
    //     ...callbacks,
    // });




    const result = useMutation(
        {
            mutationKey: [query.key],
            mutationFn: (params: any) => query.mutationFn(params),
            ...callbacks
        }
    )

    const status = {
        isPending: result.isPending,
        isSuccess: result.isSuccess,
        isError: result.isError,
    }


    const request = result.mutate;

    return {request, result, status};
}

export default useCommonMutation;
