import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API = process.env.API;

export const createAccount = createAsyncThunk(
  "auth/signUp",
  async(credentials,{rejectWithValue}) => {
    try{
      const { fullName, email, password } = credentials;
      const response = await axios.post(`${API}/users/newUser/${encodeURIComponent(fullName)}/${encodeURIComponent(email)}/${encodeURIComponent(password)}`);
      return response.data;
    }catch(error){
     return  rejectWithValue(error.response.data || "Auth error");
    }
  }
)
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
  extraReducers:(builder) => {
    builder
     .addCase(createAccount.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createAccount.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(createAccount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
      
  }
});

export const { setPassword, setEmail,setFirstName,setLastName, setFullName,setPhone,setConfirmPassword,setNewPassword } = authSlice.actions;
export default authSlice.reducer;
