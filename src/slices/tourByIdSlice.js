import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API = process.env.API;

export const fetchTourById = createAsyncThunk(
  "tour/fetchTourById",
  async (id) => {
    try {
      const response = await axios.get(`${API}/tour/${id}`);
      return response.data;
    } catch (error) {
      return (error.response.data || error.message || "Something went wrong");
    }
  }
)
export const findMainImg = createAsyncThunk(
  "mainImg/find",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${API}/main-gallery/main_img/${id}`
      );

      return { id, url: response.data.image_main_url };
    } catch (err) {
      return rejectWithValue(err.response?.data || "Error");
    }
  }
);

const tourById = createSlice({
  name: "tour",
  initialState: {
    loading: null,
    error: null,
    tour:null,
    adultValue: 0,
    totalAdultPrice: 0,

    childValue: 0,
    totalChildPrice: 0,

    infantValue: 0,
    totalInfantPrice: 0,

    totalPrice: 0,
    status: null,
    mainImg:{},
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
    setTotalAdultPrice: (state) => {
      state.totalAdultPrice = state.tour.price * state.adultValue;
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
    setTotalChildPrice: (state) => {
      state.totalChildPrice = state.tour.child_price * state.childValue;
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
    setTotalInfantPrice: (state) => {
      state.totalInfantPrice = state.tour.infant_price * state.infantValue;
    },

    // Total Price
    setTotalPrice: (state) => {
      state.totalPrice = state.totalAdultPrice + state.totalChildPrice + state.totalInfantPrice;
    },

    // Payment
    setPaymentMethod: (state, action) => {
      state.payment = action.payload;
    },
  },
extraReducers: (builder) => {
  builder

    .addCase(fetchTourById.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchTourById.fulfilled, (state, action) => {
      state.loading = false;
     state.tour = action.payload;
    })
    .addCase(fetchTourById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || action.payload;
    })

    .addCase(findMainImg.pending,(state)=> {
      state.loading = true;
      state.error = null;
    })
    .addCase(findMainImg.fulfilled, (state, action) => {
    const { id, url } = action.payload;
    state.mainImg[id] = url;
    })
    .addCase(findMainImg.rejected,(state,action)=> {
      state.loading = false;
      state.error = action.error.message || action.payload;
    })
}
});

export default tourById.reducer;

export const {
  setAdultValue,
  increaseAdultValue,
  decreaseAdultValue,
  setTotalAdultPrice,

  setChildValue,
  increaseChildValue,
  decreaseChildValue,
  setTotalChildPrice,

  setInfantValue,
  increaseInfantValue,
  decreaseInfantValue,
  setTotalInfantPrice,

  setTotalPrice,
  setPaymentMethod,
  setSelectedDate,
  setSelectedTime,
  setUserTicket,
} = tourById.actions;
