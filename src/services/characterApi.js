import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseURL } from '../utils/constant'

export const characterApi = createApi({
  reducerPath: 'characterApi',

  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
  }),
  endpoints: builder => ({
    getCharacter: builder.query({
      query: page => `/people?page=${page}&format=json`,
    }),
  }),
})

export const { useGetCharacterQuery } = characterApi
