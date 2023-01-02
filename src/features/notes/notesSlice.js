import { createSlice, nanoid } from "@reduxjs/toolkit";

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
