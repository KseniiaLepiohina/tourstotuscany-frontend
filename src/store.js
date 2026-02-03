import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice';
import datepickerReducer from './slices/dateSlice';
import tourReducer from './slices/tourByIdSlice';
import fetchToursReducer from './slices/fetchTours';
import tourPanelReducer from './slices/panelSlice';
import testimonialsByIdReducer from './slices/testimonialSlice';
import paymentReducer from './slices/paymentSlice';
import bookingReducer from './slices/bookingSlice'
import { tourApi } from './services/tourApi';
const store = configureStore({
    reducer: {
        [tourApi.reducerPath]:tourApi.reducer,
         tour: tourReducer,
        auth: authReducer,
        datepicker: datepickerReducer,
       
        fetchTours: fetchToursReducer,
        panel: tourPanelReducer,
        testimonials :testimonialsByIdReducer,
        booking:bookingReducer,
        tickets:paymentReducer,
        // payment: paymentReducer,
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(tourApi.middleware)
});

export default store;