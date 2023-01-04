import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";
import PopUp from "../PopUp/PopUp";
import Divider from "@mui/material/Divider";

import { useDispatch } from "react-redux";
import { onClickNode } from "../../features/notes/notesSlice";

const NoteBox = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const handleClickOpen = (note) => {
    //console.log("cureentNote ", note);
    dispatch(onClickNode(note));
    setIsOpen(true);
  };

  // console.log(props.note);
  return (
    <>
      <Card
        sx={{
          width: "300px",
          height: "300px",
          mt: 5,
          mx: 2,
          color: grey[900],
          minHeight: "175px",
          backgroundColor: props.note.bgColor,
          boxShadow: 3,
          transition: "0.4s",
          "&:hover": {
            transition: "0.4s",
            transform: "scale(1.05)",
          },
        }}
        onClick={() => handleClickOpen(props.note)}
      >
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h5" gutterBottom>
            {props.note.title}
          </Typography>
          <Divider />
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {props.note.note}
        </CardActions>
      </Card>
      {isOpen && <PopUp isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};
export default NoteBox;
