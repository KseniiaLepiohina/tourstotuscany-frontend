import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice';
import datepickerReducer from './slices/dateSlice';
import tourReducer from './slices/tourByIdSlice';
import fetchToursReducer from './slices/fetchTours';
import tourPanelReducer from './slices/panelSlice';
import testimonialsByIdReducer from './slices/testimonialSlice';
import paymentReducer from './slices/paymentSlice';
import { tourApi } from './services/tourApi';
import { authAPI } from './services/authApi';

const store = configureStore({
    reducer: {
        [tourApi.reducerPath]:tourApi.reducer,
        [authAPI.reducerPath]:authAPI.reducer,
        tour: tourReducer,
        auth: authReducer,
        datepicker: datepickerReducer,
        fetchTours: fetchToursReducer,
        panel: tourPanelReducer,
        testimonials :testimonialsByIdReducer,
        tickets:paymentReducer,
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(tourApi.middleware)
});

export default store;