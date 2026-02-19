<<<<<<< HEAD
import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
=======
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
>>>>>>> backend-connect

export const authAPI = createApi({
  reducerPath:'authAPI',
  baseQuery:fetchBaseQuery({baseUrl:process.env.API}),
  endpoints:(builder) => ({
   signUp:builder.mutation({
    query:(credentials) => {
<<<<<<< HEAD
      return {
        url:`/users/newUser`,
        method:'POST',
        body:credentials
=======
      const {fullName, email,password} = credentials;
      return {
        url:`/users/newUser/${encodeURIComponent(fullName)}/${encodeURIComponent(email)}/${encodeURIComponent(password)}`,
        method:'POST'
>>>>>>> backend-connect
      };
    },
   }),
   signIn:builder.mutation({
    query:(credentials) => {
<<<<<<< HEAD
      return{
        url:`/users/login`,
        method:'POST',
        body:credentials
=======
      const {email,password} = credentials;
      return{
        url:`/users/login`,
        method:'POST'
>>>>>>> backend-connect
      }
    }
   }),
   forgotPassword:builder.mutation({
    query:(credentials) => {
<<<<<<< HEAD
      return{
        url:`/users/forgot-password`,
        method:'POST',
        body:credentials
=======
      const {email} = credentials;
      return{
        url:`/users/forgot-password`,
        method:'POST'
>>>>>>> backend-connect
      }
    }
   }),
   updatePassword:builder.mutation({
    query:(credentials) => {
<<<<<<< HEAD
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
        
=======
      const {newPassword,confirmPassword} = credentials;
      return {
        url:`/users/updatePassword`,
        method:'PATCH'
>>>>>>> backend-connect
      }
    }
   })

  }),
})
<<<<<<< HEAD
export const {useSignUpMutation,useSignInMutation,useForgotPasswordMutation,useUpdatePasswordMutation} = authAPI;
=======
export const {useSignUpMutation,useSignInMutation,useForgotPasswordMutation,useUpdatePasswordMutatiton} = authAPI;
>>>>>>> backend-connect
