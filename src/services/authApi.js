import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({ 
    baseUrl: process.env.API || 'http://localhost:5000', // Додайте дефолтний URL для розробки
    prepareHeaders: (headers, { getState }) => {
      // Витягуємо токен зі стану вашого authSlice
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (credentials) => ({
        url: `/users/newUser`,
        method: 'POST',
        body: credentials, 
      }),
    }),
    signIn: builder.mutation({
      query: (credentials) => ({
        url: `/users/login`,
        method: 'POST',
        body: credentials,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (credentials) => ({
        url: `/users/forgot-password`,
        method: 'POST',
        body: credentials,
      }),
    }),
    updatePassword: builder.mutation({
      query: (credentials) => ({
        url: `/users/updatePassword`,
        method: 'PATCH',
        body: credentials,
      }),
    }),
    // Ендпоінт для отримання даних профілю (наприклад, після Google Auth)
    getMe: builder.query({
      query: () => '/users/me',
    }),
  }),
});

export const { 
  useSignUpMutation, 
  useSignInMutation, 
  useForgotPasswordMutation, 
  useUpdatePasswordMutation,
  useGetMeQuery 
} = authAPI;