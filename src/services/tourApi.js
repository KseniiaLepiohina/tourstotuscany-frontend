import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const tourApi = createApi({
  reducerPath:'tourApi',
  baseQuery:fetchBaseQuery({baseUrl:process.env.API}),
  endpoints:(builder) => ({
    getTourById:builder.query({
      query:(id) => `/tour/${id}`,
    }),
    getTestimonials:builder.query({
      query:(tourId) => tourId ? `/testimonials/${tourId}`: '/testimonials/allTestimonials',
    }),
    getMainImage:builder.query({
      query:(id) => `/main-gallery/main_img/${id}`,
      transformResponse:(response,meta,arg) => {
        return{
          id:arg,
          url:response.image_main_url
        };
      },
    })
  }),
})

export const {useGetTourByIdQuery, useGetTestimonialsQuery,useGetMainImageQuery} = tourApi;