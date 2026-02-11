import { createSlice } from "@reduxjs/toolkit";

const contactUsSlice = createSlice({
  name:"contactUs",
  initialState:{
    email:'',
    message:'',
    username:'',
  },
  reducers:{
    setEmail:(state,action)=> {
      state.email = action.payload;
    },
    setMessage:(state,action) => {
      state.message = action.payload;
    },
    setUsername:(state,action) => {
      state.username = action.payload;
    }
  }
})
export const {email,message,username,setEmail,setMessage,setUsername} =contactUsSlice.actions;
export default contactUsSlice.reducer;