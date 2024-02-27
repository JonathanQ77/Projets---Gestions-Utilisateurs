import { createSlice, current } from "@reduxjs/toolkit";

export const annonceSlice = createSlice({
  name: "annonceSlice",
  initialState: {
    annonceList: [],
  },
  reducers: {
    setAnnonceList: (currentSlice, action) => {
      // all show
      currentSlice.annonceList = action.payload;
    },
    addAnnonce: (currentSlice, action) => {
      // create
      currentSlice.annonceList.push(action.payload);
    },
    updateAnnonce: (currentSlice, action) => {
      // update
      const indexToUpdate = currentSlice.annonceList.findIndex(
        (annonce) => annonce.id === action.payload.id
      );
      currentSlice.annonceList[indexToUpdate] = action.payload;
    },

    deleteAnnonce: (currentSlice, action) => {
      // DELETE
      const filteredAnnonceList = currentSlice.annonceList.filter(
        (annonce) => annonce.id !== action.payload.id
      );
      currentSlice.annonceList = filteredAnnonceList;
    },
  },
});

export const annonceReducer = annonceSlice.reducer;

export const { setAnnonceList, addAnnonce, updateAnnonce, deleteAnnonce } =
  annonceSlice.actions;
