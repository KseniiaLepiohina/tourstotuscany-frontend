import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const contactUsAPI = createApi({
  reducerPath: 'contactAPI',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API }),
  endpoints: (builder) => ({ // Додано дужки
    contactUs: builder.mutation({ // Назва методу
      query: (credentials) => ({
        url: `/contact-us`,
        method: 'POST',
        body: credentials,
      }),
    }),
  }), // Додано закриття
});

export const { useContactUsMutation } = contactUsAPI;