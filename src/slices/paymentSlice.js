import { createSlice } from '@reduxjs/toolkit';


const ticketPayment = createSlice({
  name: "payment",
  initialState: {
    method:null,
    paymentType: null,
    isValid:false,
    status:"idle",
    paymentImg:null,

  },
  reducers: {
    setPaymentMethod: (state, action) => {
      state.method = action.payload;
    },
    setPaymentType:(state,action)=> {
      state.paymentType = action.payload;
    },
    setValidation:(state,action)=> {
      state.isValid = action.payload;
    },
    setStatus:(state,action)=> {
      state.status = action.payload;
    },

  }
})
export const { setPaymentMethod,setPaymentType,setValidation,setStatus } = ticketPayment.actions;
export default ticketPayment.reducer;