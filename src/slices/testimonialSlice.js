import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTestimonialsById = createAsyncThunk(
  "testimonials/byId",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/testimonials/${id}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || error.message || "Something went wrong"
      );
    }
  }
);

export const fetchAllTestimonials = createAsyncThunk(
  "testimonials/all",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/testimonials/allTestimonials`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || error.message || "Something went wrong"
      );
    }
  }
);

const testimonialsSlice = createSlice({
  name: "testimonials",
  initialState: {
    testimonialsById: [],
    allTestimonials: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // by id
      .addCase(fetchTestimonialsById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTestimonialsById.fulfilled, (state, action) => {
        state.loading = false;
        state.testimonialsById = action.payload;
      })
      .addCase(fetchTestimonialsById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // all
      .addCase(fetchAllTestimonials.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllTestimonials.fulfilled, (state, action) => {
        state.loading = false;
        state.allTestimonials = action.payload;
      })
      .addCase(fetchAllTestimonials.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default testimonialsSlice.reducer;
