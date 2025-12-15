import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTestimonialsById = createAsyncThunk(
  "testimonials/testimonialsById",
  async(id) => {
    try{
      const response = await axios.get(`http://localhost:5000/testimonials/${id}`);
      return response.data;
    }catch(error) {
      return (error.response.data || error.message || "Something went wrong");
    }
  }
);
export const fetchAllTestimonials = createAsyncThunk(
  "testimonials/allTestimonials",
  async()=> {
    try{
      const response = await axios.get(`http://localhost:5000/testimonials/allTestimonials`)
    }catch(error) {
      return (error.response.data || error.message || "Something went wrong");
    }
  }
)


const testimonialsById = createSlice({
  name:"testimonials",
  initialState :{
    testimonialsById:null,
    allTestimonials:null,
  },
extraReducers :(builder) => {
  builder 
    .addCase(fetchTestimonialsById.pending,(state)=> {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchTestimonialsById.fulfilled,(state,action)=> {
      state.loading = false;
      state.testimonialsById = action.payload;
    })
    .addCase(fetchTestimonialsById.rejected,(state,action)=> {
      state.loading = false;
      state.error = action.error.message || action.payload;
    })
    .addCase(fetchAllTestimonials.fulfilled,(state,action)=> {
      state.loading =true;
      state.testimonialsById = action.payload;
    });
   
}
});

export default testimonialsById.reducer;
