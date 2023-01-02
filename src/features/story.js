import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./notes/notesSlice";

export const store = () => {
  reducer: {
    notes: notesReducer;
  }
};
