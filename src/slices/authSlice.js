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
    token:localStorage.getItem('token') || null,
    isAuthenticated:!!localStorage.getItem('token'),
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
    //GoogleAuth
    setCredentials:(state,action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem('token',action.payload);
    },
    logOut:(state)=> {
      state.token =  null;
      state.isAuthenticated = false;
      localStorage.removeItem('token');
      state.user = null;
      state.email = "";
      state.password = "";
    }
  },
});

export const { 
  setPassword, setEmail,setFirstName,setLastName, setFullName,setPhone,setConfirmPassword,setNewPassword,setCredentials,setIsAuthenticated 
,logOut
} = authSlice.actions;
export default authSlice.reducer;
