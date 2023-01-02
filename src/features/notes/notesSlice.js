import { createSlice, nanoid } from "@reduxjs/toolkit";

//localstorage
export const getLocalStorage = () => {
  const notes = localStorage.getItem("notes");
  return notes ? JSON.parse(notes) : [];
};

export const setLocalStorage = (notes) => {
  localStorage.setItem("notes", JSON.stringify(notes));
};

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [],
    activeColor: "red",
    filtered: "",
  },
  reducers: {},
});

export const {} = notesSlice.actions;
export default notesSlice.reducer;
