import { createSlice } from "@reduxjs/toolkit";

const dateSlice = createSlice({
  name: "datepicker",
  initialState: {
    selectedDate: null,
    selectedTime: null,
    day: null,

  },
  reducers: { 
    setDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    setTime: (state, action) => { 
      state.selectedTime = action.payload;
    },
  }
});

export const { selectedDate,selectedTime,setDate,setTime} = dateSlice.actions;
export default dateSlice.reducer;
