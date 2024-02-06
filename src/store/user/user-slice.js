import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    userList: [],
  },
  reducers: {
    setUserList: (currentSlice, action) => {
      currentSlice.userList = action.payload;
    },
  },
});

export const userReducer = userSlice.reducer;
export const { setUserList } = userSlice.actions;
