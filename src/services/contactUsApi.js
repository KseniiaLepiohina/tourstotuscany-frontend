import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const contactUsAPI = createApi({
  reducerPath: 'contactAPI',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API }),
  endpoints: (builder) => ({ 
    contactUs: builder.mutation({
      query: (credentials) => ({
        url: `/contact-us`,
        method: 'POST',
        body: credentials,
      }),
    }),
  }), 
});

export const { useContactUsMutation } = contactUsAPI;