// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
  endpoints: (builder) => ({
    getProductsByName: builder.query({
      query: (name) => `products`,
    }),
  }),
})
// Define a service using a base URL and expected endpoints
export const oneproductsApi = createApi({
  reducerPath: 'oneproductsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
  endpoints: (builder) => ({
    getoneProductsByName: builder.query({
      query: (name) => `products/${name}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductsByNameQuery } = productsApi
export const { useGetoneProductsByNameQuery } = oneproductsApi