import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authAPI = createApi({
  reducerPath:'authAPI',
  baseQuery:fetchBaseQuery({baseUrl:process.env.API}),
  endpoints:(builder) => ({
   signUp:builder.mutation({
    query:(credentials) => {
      return {
        url:`/users/newUser`,
        method:'POST',
        body:credentials
      };
    },
   }),
   signIn:builder.mutation({
    query:(credentials) => {
      return{
        url:`/users/login`,
        method:'POST',
        body:credentials
      }
    }
   }),
   forgotPassword:builder.mutation({
    query:(credentials) => {
      return{
        url:`/users/forgot-password`,
        method:'POST',
        body:credentials
      }
    }
   }),
   updatePassword:builder.mutation({
    query:(credentials) => {
      return {
        url:`/users/updatePassword`,
        method:'PATCH',
        body:credentials
      }
    }
   }),
   signUpViaGoogle:builder.mutation({
    query:(credentials) => {
      return{
        url:`/google-auth/google-callback`,
        method:'GET',
        
      }
    }
   })

  }),
})
export const {useSignUpMutation,useSignInMutation,useForgotPasswordMutation,useUpdatePasswordMutation} = authAPI;