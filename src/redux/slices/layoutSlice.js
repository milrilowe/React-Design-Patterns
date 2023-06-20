// layoutSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    /** Switch selectedLayout to 'alternate to get the alternate layout */
    //selectedLayout: "default",
    selectedLayout: "alternate",
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    selectLayout: (state, action) => {
      state.selectedLayout = action.payload;
    },
  },
});

export const { selectLayout } = layoutSlice.actions;
export default layoutSlice.reducer;