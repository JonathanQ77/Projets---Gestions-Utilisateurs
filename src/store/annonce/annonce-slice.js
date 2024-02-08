import { createSlice } from "@reduxjs/toolkit";

export const annonceSlice = createSlice({
  name: "annonceSlice",
  initialState: {
    annonceList: [],
    interieurList: [],
  },
  reducers: {
    setAnnonceList: (currentSlice, action) => {
      currentSlice.annonceList = action.payload;
    },
    setInterieurList: (currentSlice, action) => {
      currentSlice.interieurList = action.payload;
    },
  },
});

export const annonceReducer = annonceSlice.reducer;

export const { setAnnonceList, setInterieurList } = annonceSlice.actions;
