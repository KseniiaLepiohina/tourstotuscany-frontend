import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const tourApi = createApi({
  reducerPath:'tourApi',
  baseQuery:fetchBaseQuery({baseUrl:process.env.REACT_APP_API || 'https://tours-to-tuscany-backend.onrender.com'}),
  endpoints:(builder) => ({
    getTourById:builder.query({
      query:(id) => `/tour/${id}`,
    }),
    getTestimonialsById:builder.query({
      query:(tour_Id) => `/testimonials/${tour_Id}`
    }),
    getAllTestimonials: builder.query({
    query: () => '/testimonials/allTestimonials', 
}),
    getMainImage:builder.query({
      query:(id) => `/main-gallery/main_img/${id}`,
      transformResponse:(response,meta,arg) => {
        return{
          id:arg,
          url:response.image_main_url
        };
      },
    }),
    getAllTours:builder.query({
      query:()=>`/tour/tours`
    }),
    getAllToursByFiltes:builder.query({
      query: ({ title, group_size, transport }) => ({
    url: '/tour/tours',
    params: {
      title,
      group_size,
      transport
    }
  })
    })
  }),
})
console.log("BASE URL IS:", process.env.REACT_APP_API)

export const {useGetTourByIdQuery, useGetTestimonialsByIdQuery,useGetAllTestimonialsQuery,useGetMainImageQuery,useGetAllToursQuery,useGetAllToursByFiltesQuery} = tourApi;