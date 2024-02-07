import axios, { AxiosResponse } from "axios";


interface ApiRequest {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    url: string;
    body?: Record<string, any> | FormData;
    header?: Record<string, string>;
}

export async function createApiRequest(
    {
        method,
        url,
        body,
        header = {}
    }: ApiRequest,
    signal?: AbortSignal
): Promise<AxiosResponse<ApiRequest>> {
    const client = axios.create({
        withCredentials: true,
        baseURL: '/api',
        signal: signal
    })

    let params = {};

    method === "GET"
        ? (params = { params: body })
        : (params = {
            data: body instanceof FormData ? body : JSON.stringify(body),
        });

    if(!body) params = {}

    console.log(params, '??????')

    const requestParams = {
        method,
        url,
        ...params,
        headers: {
            'Content-Type': 'application/json',
            ...header
        },
        timeout: 30000,
    }

    return client(requestParams);
}