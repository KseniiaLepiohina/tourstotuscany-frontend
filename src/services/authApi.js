import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.API }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (credentials) => {
        const { fullName, email, password } = credentials;
        return {
          url: `/users/newUser/${encodeURIComponent(fullName)}/${encodeURIComponent(email)}/${encodeURIComponent(password)}`,
          method: 'POST'
        };
      },
    }),
    signIn: builder.mutation({
      query: (credentials) => {
        return {
          url: `/users/login`,
          method: 'POST',
          body: credentials
        }
      }
    }),
    forgotPassword: builder.mutation({
      query: (credentials) => {
        const { email } = credentials;
        return {
          url: `/users/forgot-password`,
          method: 'POST'
        }
      }
    }),
    updatePassword: builder.mutation({
      query: (credentials) => {
        return {
          url: `/users/updatePassword`,
          method: 'PATCH',
          body: credentials
        }
      }
    }),
    signUpViaGoogle: builder.mutation({
      query: (credentials) => {
        return {
          url: `/google-auth/google-callback`,
          method: 'GET',

        }
      }
    })

  }),
})
export const { useSignUpMutation, useSignInMutation, useForgotPasswordMutation, useUpdatePasswordMutation } = authAPI;