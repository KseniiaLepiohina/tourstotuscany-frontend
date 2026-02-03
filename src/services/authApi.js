import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const authAPI = createApi({
  reducerPath:'authAPI',
  baseQuery:fetchBaseQuery({baseUrl:process.env.API}),
  endpoints:(builder) => ({
   signUp:builder.mutation({
    query:(credentials) => {
      const {fullName, email,password} = credentials;
      return {
        url:`/users/newUser/${encodeURIComponent(fullName)}/${encodeURIComponent(email)}/${encodeURIComponent(password)}`,
        method:'POST'
      };
    },
   }),
   signIn:builder.mutation({
    query:(credentials) => {
      const {email,password} = credentials;
      return{
        url:`/users/login`,
        method:'POST'
      }
    }
   }),
   forgotPassword:builder.mutation({
    query:(credentials) => {
      const {email} = credentials;
      return{
        url:`/users/forgot-password`,
        method:'POST'
      }
    }
   }),
   updatePassword:builder.mutation({
    query:(credentials) => {
      const {newPassword,confirmPassword} = credentials;
      return {
        url:`/users/updatePassword`,
        method:'PATCH'
      }
    }
   })

  }),
})
export const {useSignUpMutation,useSignInMutation,useForgotPasswordMutation,useUpdatePasswordMutatiton} = authAPI;