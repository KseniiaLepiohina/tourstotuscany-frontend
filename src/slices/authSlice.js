import { createSlice } from '@reduxjs/toolkit';
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    fullName: "",
    phoneNumber:"",
    newPassword:null,
    confirmPassword:null,
  },
  reducers: {
    setFirstName:(state,action)=> {
      state.firstName = action.payload;
    },
    setLastName:(state,action)=> {
      state.lastName = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setFullName: (state, action) => {
      state.fullName = action.payload;
      const parts = action.payload.split(" ");
      state.firstName = parts[0] || null;
      state.lastName = parts[1] || null;
    },
    setPhone:(state,action)=> {
      state.phoneNumber = action.payload;
    },
    setNewPassword:(state,action)=> {
      state.newPassword = action.payload;
    },
    setConfirmPassword:(state,action)=> {
      state.confirmPassword = action.payload;
    },
  },
});

export const { setPassword, setEmail,setFirstName,setLastName, setFullName,setPhone,setConfirmPassword,setNewPassword } = authSlice.actions;
export default authSlice.reducer;
