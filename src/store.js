import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice';
import datepickerReducer from './slices/dateSlice';
import tourPanelReducer from './slices/panelSlice';
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
        panel: tourPanelReducer,
        tickets:paymentReducer,
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(tourApi.middleware)
});

export default store;