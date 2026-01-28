import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = process.env.API;

export const fetchTours = createAsyncThunk("tour/fetchTours", async () => {
  const response = await axios.get(`${API}/tour/tours`);
  return response.data;
});
export const fetchMainImg = createAsyncThunk(
  "tour/fetchImg",
  async()=> {
    const response = await axios.get(`${API}/tour/mainImg`);
    return response.data.mainImg;
  }
)
const fetchToursSlice = createSlice({
  name:'fetchAvaliableTours',
  initialState : {
    tours:[],
    mainImg:null,
    loading:false,
    error:null,
  },
  reducers:{},
  extraReducers:(builder) => {
    builder
      .addCase(fetchTours.pending,(state)=> {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTours.fulfilled,(state,action)=> {
        state.loading = false;
        state.tours = action.payload;
        if(action.payload.length > 0){
          state.mainImg  = action.payload[0].mainImg;
        }
      })
      .addCase(fetchTours.rejected, (state,action)=> {
        state.loading = false;
        state.error = action.error.message;
      })
       // fetchMainImg
      .addCase(fetchMainImg.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMainImg.fulfilled, (state, action) => {
        state.loading = false;
        state.mainImg = action.payload; // <-- зберігаємо mainImg
      })
      .addCase(fetchMainImg.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default fetchToursSlice.reducer;
