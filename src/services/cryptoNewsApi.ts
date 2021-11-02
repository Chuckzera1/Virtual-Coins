import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CoinNews } from "../interface/CoinNews";

interface QueryParams {
  newsCategory: string;
  count: number;
}

interface ResponseType {
  value: CoinNews[];
}

const cryptoNewsHeaders = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
  "x-rapidapi-key": "a1c67524d6msh96e72590b5d350ep105e69jsn756fd20cf828",
};

const baseUrl = `https://bing-news-search1.p.rapidapi.com`;

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
