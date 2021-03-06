import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { coinRankingApiKey, coinRankingApiUrl } from "../env";
import { IGlobalCoin, IGlobalStats } from "../interface/GlobalStats";

interface GetCryptosReturnType {
  data: {
    coins: IGlobalCoin[];
    stats: IGlobalStats;
  };
}

interface GetCryptoDetailsReturnType {
  data: {
    coin: IGlobalCoin;
  };
}

const cryptoApiHeaders = { "x-access-token": coinRankingApiKey };

const baseUrl = coinRankingApiUrl;

const createRequest = (url: string) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query<GetCryptosReturnType, any>({
      query: (count: number) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query<GetCryptoDetailsReturnType, any>({
      query: (coinId: string) => createRequest(`/coin/${coinId}`),
    }),
    getCryptoExchanges: builder.query({
      query: () => createRequest(`exchanges`),
    }),
    getCryptoHistory: builder.query({
      query: ({
        coinId,
        timePeriod,
      }: {
        coinId: string;
        timePeriod: "24h" | "7d" | "30d" | "1y" | "5y";
      }) => createRequest(`/coin/${coinId}/history/${timePeriod}`),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
  useGetCryptoExchangesQuery,
} = cryptoApi;
