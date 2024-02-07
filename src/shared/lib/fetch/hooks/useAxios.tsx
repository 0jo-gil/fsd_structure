import axios, { AxiosResponse } from "axios";
import { useCallback } from "react";

const headersConfig = {
    "Content-Type": "application/json;charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "withCredentials": true,
};


type Options = {
    method: string;
    url: string;
    body?: unknown;
    header?: unknown;
}

export const useAxios = () => {
    const client = axios.create({
        withCredentials: true,
        baseURL: '/api'
    });

    // client.interceptors.response.use(
    //     (response): AxiosResponse<any, any> => {
    //         return response
    //     },
    //     (error: any) => {
    //         return Promise.reject(error)
    //     }
    // )

    const requestApi = useCallback(
        (method: string, url: string, body?: unknown, header = {}): Promise<AxiosResponse<Options>> => {
            let params = {};

            method === "GET"
                ? (params = { params: body })
                : (params = {
                    data: body instanceof FormData ? body : JSON.stringify(body),
                });

            if (!body) params = {};

            const axiosParams = {
                method,
                url: `${url}`,
                ...params,
                headers: {
                    ...headersConfig,
                    ...header,
                },
                timeout: 30000,
            };

            return client(axiosParams);
        },
        []
    )

    return { requestApi }
}