import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const tourApi = createApi({
  reducerPath: 'tourApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: process.env.REACT_APP_API || 'https://tours-to-tuscany-backend.onrender.com' 
  }),
  endpoints: (builder) => ({
    getTourById: builder.query({
      query: (id) => `/tour/${id}`,
    }),
    getAllTours: builder.query({
      query: () => `/tour/tours`
    }),
    getAllToursByFiltes: builder.query({
      query: ({ title, group_size, transport }) => ({
        url: '/tour/tours',
        params: { title, group_size, transport }
      })
    }),
    getTestimonialsById: builder.query({
      query: (tour_Id) => `/testimonials/${tour_Id}`
    }),
    getAllTestimonials: builder.query({
      query: () => '/testimonials/allTestimonials',
    }),
    // Gallery
    getMainImage: builder.query({
      query: (id) => `/main-gallery/main_img/${id}`,
    }),
    getMainGalleryPhotos: builder.query({
      query: (id) => `/main-gallery/${id}`
    }),   
    getGalleryPhotos: builder.query({
      query: (locationQuery) => `/gallery/search/${encodeURIComponent(locationQuery)}`
    }),
  }),
});

export const { 
  useGetTourByIdQuery, 
  useGetTestimonialsByIdQuery, 
  useGetAllTestimonialsQuery, 
  useGetMainImageQuery, 
  useGetAllToursQuery, 
  useGetAllToursByFiltesQuery, 
  useGetGalleryPhotosQuery,
  useGetMainGalleryPhotosQuery 
} = tourApi;
