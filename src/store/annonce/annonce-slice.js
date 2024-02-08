import { createSlice } from "@reduxjs/toolkit";

export const annonceSlice = createSlice({
  name: "annonceSlice",
  initialState: {
    annonceList: [],
  },
  reducers: {
    setAnnonceList: (currentSlice, action) => {
      currentSlice.annonceList = action.payload;
    },
  },
});

export const annonceReducer = annonceSlice.reducer;
export const { setAnnonceList } = annonceSlice.actions;
