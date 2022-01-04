import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { bingApiSdk, bingNewsApiUrl, hostBingNews, rapidApiKey } from "../env";
import { CoinNews } from "../interface/CoinNews";

interface QueryParams {
  newsCategory: string;
  count: number;
}

interface ResponseType {
  value: CoinNews[];
}

const cryptoNewsHeaders = {
  "x-bingapis-sdk": bingApiSdk,
  "x-rapidapi-host": hostBingNews,
  "x-rapidapi-key": rapidApiKey,
};

const baseUrl = bingNewsApiUrl;

const createRequest = (url: string) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query<ResponseType, QueryParams>({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
