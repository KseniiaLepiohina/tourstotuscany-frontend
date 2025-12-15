import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice';
import datepickerReducer from './slices/dateSlice';
import tourReducer from './slices/tourByIdSlice';
import fetchToursReducer from './slices/fetchTours';
import tourPanelReducer from './slices/panelSlice';
import testimonialsByIdReducer from './slices/testimonialSlice';
import paymentReducer from './slices/paymentSlice';
import bookingReducer from './slices/bookingSlice'
const store = configureStore({
    reducer: {
        auth: authReducer,
        datepicker: datepickerReducer,
        tour: tourReducer,
        fetchTours: fetchToursReducer,
        panel: tourPanelReducer,
        testimonials :testimonialsByIdReducer,
        booking:bookingReducer,
        tickets:paymentReducer,
        // payment: paymentReducer,
    },
});

export default store;