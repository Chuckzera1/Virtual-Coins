import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IGlobalCoin, IGlobalStats } from '../interface/GlobalStats'

interface ReturnType {
    data: {
        coins: IGlobalCoin[],
        stats: IGlobalStats
    }
}

const cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "a1c67524d6msh96e72590b5d350ep105e69jsn756fd20cf828",
};

const baseUrl = "https://coinranking1.p.rapidapi.com"

const createRequest = (url: string) => ({ url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query<ReturnType, any>({
            query:(count: number) => createRequest(`/coins?limit=${count}`)
        })
    })
})

export const {
    useGetCryptosQuery,
} = cryptoApi