import { createSlice } from '@reduxjs/toolkit';
const tourById = createSlice({
  name: "tour",
  initialState: {
    adultValue: 0,
    childValue: 0,
    infantValue: 0,
    status: null,
  },
  reducers: {
    // Adult
    setAdultValue: (state, action) => {
      state.adultValue = action.payload;
    },
    increaseAdultValue: (state, action) => {
      state.adultValue += action.payload;
    },
    decreaseAdultValue: (state, action) => {
      state.adultValue -= action.payload;
    },

    // Child
    setChildValue: (state, action) => {
      state.childValue = action.payload;
    },
    increaseChildValue: (state, action) => {
      state.childValue += action.payload;
    },
    decreaseChildValue: (state, action) => {
      state.childValue -= action.payload;
    },
    // Infant
    setInfantValue: (state, action) => {
      state.infantValue = action.payload;
    },
    increaseInfantValue: (state, action) => {
      state.infantValue += action.payload;
    },
    decreaseInfantValue: (state, action) => {
      state.infantValue -= action.payload;
    },

    // Payment
    setPaymentMethod: (state, action) => {
      state.payment = action.payload;
    },
  },

});

export default tourById.reducer;

export const {
  setAdultValue,
  increaseAdultValue,
  decreaseAdultValue,

  setChildValue,
  increaseChildValue,
  decreaseChildValue,

  setInfantValue,
  increaseInfantValue,
  decreaseInfantValue,

  setPaymentMethod,
  setSelectedDate,
  setSelectedTime,
} = tourById.actions;
