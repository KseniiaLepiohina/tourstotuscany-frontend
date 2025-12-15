import { createSlice } from '@reduxjs/toolkit';


const ticketPayment = createSlice({
  name: "payment",
  initialState: {
    cardValue: "",
    paymentType: "",
    paymentImg:null,

  },
  reducers: {
    setPaymentMethod: (state, action) => {
      const {type,img} = action.payload;
      state.paymentType = type;
      state.paymentImg = img;
    },
    setCardValue :(state,action)=> {
      state.cardValue = action.payload;

    }
  }
})
export const { setPaymentMethod,setCardValue } = ticketPayment.actions;
export default ticketPayment.reducer;