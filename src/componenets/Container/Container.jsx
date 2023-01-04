import React from "react";
import NoteBox from "../NodeBox/NoteBox";
import Box from "@mui/material/Box";

import { useSelector } from "react-redux";

const Container = () => {
  const notes = useSelector((state) => state.notes.notes);
  const activeCategory = useSelector((state) => state.notes.activeCategory);
  const filtered = useSelector((state) => state.notes.filtered);
  let filteredNotes;

  if (activeCategory === "all" && !filtered) {
    filteredNotes = notes;
  } else if (activeCategory === "all" && filtered) {
    filteredNotes = notes.filter((item) =>
      item.note.toLowerCase().includes(filtered.toLowerCase())
    );
  } else if (activeCategory && filtered) {
    filteredNotes = notes
      .filter((item) => item.bgColor === activeCategory)
      .filter((item) =>
        item.note.toLowerCase().includes(filtered.toLowerCase())
      );
  } else {
    filteredNotes = notes.filter((item) => item.bgColor === activeCategory);
  }

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {filteredNotes.map((item) => (
        <NoteBox note={item} key={item.id} />
      ))}
    </Box>
  );
};

export default Container;
