import { createSlice, nanoid } from "@reduxjs/toolkit";

//localstorage
export const getLocalStorage = () => {
  const notes = localStorage.getItem("notes");
  return notes
    ? JSON.parse(notes)
    : [
        {
          title: "React ÇAlış",
          note: "Reack hooklara bakmalısın",
          bgColor: "#ab47bc",
        },
        {
          title: "Redux ÇAlış",
          note: "Redux ile proje geliştirmelisin...",
          bgColor: "#42a5f5",
        },
        {
          title: "Next.js ÇAlış",
          note: "Next.js ile proje geliştirmelisin...",
          bgColor: "#ef5350",
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
      : "#ab47bc",
    filtered: "",
    activeCategory: localStorage.getItem("activeCategory")
      ? localStorage.getItem("activeCategory")
      : "all",
  },
  reducers: {
    addNote: {
      reducer: (state, action) => {
        state.notes.unshift(action.payload);
        //console.log(action.payload);
      },
      prepare: (title, note, color) => {
        return {
          payload: {
            id: nanoid(),
            title,
            note,
            bgColor: color,
          },
        };
      },
    },
    changeColor: (state, action) => {
      state.activeColor = action.payload;
      //localStorage.setItem("activeColor", action.payload);
    },
  },
});

export const { addNote, changeColor } = notesSlice.actions;
export default notesSlice.reducer;
