import { createSlice } from "@reduxjs/toolkit";

const contactUsSlice = createSlice({
  name:"contactUs",
  initialState:{
    message:'',
  },
  reducers:{
    setMessage:(state,action) => {
      state.message = action.payload;
    }
  }
})
export const {message,setMessage} = contactUsSlice.actions;
export default contactUsSlice.reducer;