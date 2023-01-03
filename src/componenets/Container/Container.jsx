import React from "react";
import NoteBox from "../NodeBox/NoteBox";
import Box from "@mui/material/Box";

import { useDispatch, useSelector } from "react-redux";

const Container = () => {
  const notes = useSelector((state) => state.notes.notes);
  console.log("deneme", notes);
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {React.Children.toArray(
        notes.map((item) => <NoteBox note={{ ...item }} />)
      )}
    </Box>
  );
};

export default Container;
