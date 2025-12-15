import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Асинхронний thunk для створення бронювання
export const createNewBooking = createAsyncThunk(
  "booking/create",
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const tour = state.tour.tourById; // поточний тур
      if (!tour) throw new Error("Tour not loaded");

      const img = state.tour.mainImg?.[tour.id] || "";
      const date = state.tour.selectedDate;
      const time = state.tour.selectedTime;
      const totalPrice = state.tour.totalPrice;

      const response = await axios.post("http://localhost:5000/booking", {
        img,
        date,
        time,
        totalPrice,
      });

      return response.data; // повертаємо створений квиток
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message || "Something went wrong");
    }
  }
);

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    tickets: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createNewBooking.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createNewBooking.fulfilled, (state, action) => {
        state.loading = false;
        const ticket = action.payload;
        state.tickets  = ticket.push();
      })
      .addCase(createNewBooking.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export default bookingSlice.reducer;
