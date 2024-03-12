// store config

import { configureStore } from "@reduxjs/toolkit";
import { annonceReducer } from "./annonce/annonce-slice";

export const store = configureStore({
  reducer: {
    ANNONCE: annonceReducer,
  },
});
