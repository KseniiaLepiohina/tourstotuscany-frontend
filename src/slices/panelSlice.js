import { createSlice} from "@reduxjs/toolkit";

const tourPanelSlice = createSlice({
  name: "panel",
  initialState: {
    title: '',
    group_size: '',
    transport: '',
  },

  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },

    setGroupSize: (state, action) => {
      state.group_size = action.payload;
    },
    setTransport: (state, action) => {
      state.transport = action.payload;
    },
 }
})
export const { setTitle, setGroupSize, setTransport} = tourPanelSlice.actions;
export default tourPanelSlice.reducer;