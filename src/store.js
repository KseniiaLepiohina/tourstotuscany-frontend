import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice';
import datepickerReducer from './slices/dateSlice';
import tourPanelReducer from './slices/panelSlice';
import paymentReducer from './slices/paymentSlice';
<<<<<<< HEAD
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
=======
import bookingReducer from './slices/bookingSlice'
import { tourApi } from './services/tourApi';
const store = configureStore({
    reducer: {
        [tourApi.reducerPath]:tourApi.reducer,
         tour: tourReducer,
        auth: authReducer,
        datepicker: datepickerReducer,
       
        fetchTours: fetchToursReducer,
>>>>>>> backend-connect
        panel: tourPanelReducer,
        tickets:paymentReducer,
    },
<<<<<<< HEAD
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(
    tourApi.middleware,
    authAPI.middleware,
    contactUsAPI.middleware
)
=======
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(tourApi.middleware)
>>>>>>> backend-connect
});

export default store;
