import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice';
import datepickerReducer from './slices/dateSlice';
import tourPanelReducer from './slices/panelSlice';
import paymentReducer from './slices/paymentSlice';
import tourReducer from './slices/tourByIdSlice'
import { tourApi } from './services/tourApi';
import { authAPI } from './services/authApi';
import { contactUsAPI } from './services/contactUsApi';
import contactUsReducer from './slices/contactUs'

const store = configureStore({
    reducer: {
        [tourApi.reducerPath]:tourApi.reducer,
        [authAPI.reducerPath]:authAPI.reducer,
        [contactUsAPI.reducerPath]:contactUsAPI.reducer,
        tour: tourReducer,
        auth: authReducer,
        datepicker: datepickerReducer,
        contacUs:contactUsReducer,
        panel: tourPanelReducer,
        tickets:paymentReducer,
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(
    tourApi.middleware,
    authAPI.middleware,
    contactUsAPI.middleware
)
});

export default store;
