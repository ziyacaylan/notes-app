import { createSlice, nanoid } from "@reduxjs/toolkit";

//localstorage
export const getLocalStorage = () => {
  const notes = localStorage.getItem("notes");
  return notes
    ? JSON.parse(notes)
    : [
        {
          title: "React ÇAlış",
          description: "Reack hooklara bakmalısın",
          bgColor: "purple.A200",
        },
        {
          title: "Redux ÇAlış",
          description: "Redux ile proje geliştirmelisin...",
          bgColor: "blue[500]",
        },
        {
          title: "Next.js ÇAlış",
          description: "Next.js ile proje geliştirmelisin...",
          bgColor: "red[500]",
        },
      ];
};

export const setLocalStorage = (notes) => {
  localStorage.setItem("notes", JSON.stringify(notes));
};

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [...getLocalStorage()],
    activeColor: localStorage.getItem("activeColor")
      ? localStorage.getItem("activeColor")
      : "purple[500]",
    filtered: "",
    activeCategory: localStorage.getItem("activeCategory")
      ? localStorage.getItem("activeCategory")
      : "all",
  },
  reducers: {
    addNote: {},
  },
});

export const {} = notesSlice.actions;
export default notesSlice.reducer;
