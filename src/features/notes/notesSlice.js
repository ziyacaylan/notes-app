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
    notes: [...getLocalStorage()],
    activeColor: localStorage.getItem("activeColor")
      ? localStorage.getItem("activeColor")
      : "#ab47bc",
    filtered: "",
    currentNote: [],
    activeCategory: localStorage.getItem("activeCategory")
      ? localStorage.getItem("activeCategory")
      : "all",
  },
  reducers: {
    addNote: {
      reducer: (state, action) => {
        state.notes.unshift(action.payload);
        setLocalStorage(state.notes);
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
    editNote: (state, action) => {
      state.notes.find((item) =>
        item.id === state.currentNote.id ? (item.note = action.payload) : ""
      );
      setLocalStorage(state.notes);
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter(
        (item) => item.id !== state.currentNote.id
      );
      setLocalStorage(state.notes);
    },
    onClickNode: (state, action) => {
      state.currentNote = action.payload;
    },
    changeColor: (state, action) => {
      state.activeColor = action.payload;
      localStorage.setItem("activeColor", action.payload);
    },
    categorySelect: (state, action) => {
      state.activeCategory = action.payload;
      localStorage.setItem("activeCategory", action.payload);
      state.filteredNotes =
        state.activeCategory === "all"
          ? state.notes
          : state.notes.filter((note) => note.bgColor === state.activeCategory);
    },
    filteredNotes: (state, action) => {
      state.filtered = action.payload;
    },
  },
});

export const {
  addNote,
  editNote,
  deleteNote,
  onClickNode,
  changeColor,
  categorySelect,
  filteredNotes,
} = notesSlice.actions;
export default notesSlice.reducer;
