import React, { useState } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import DoneIcon from "@mui/icons-material/Done";

import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { addNote, changeColor } from "../../features/notes/notesSlice";

const Form = () => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const activeColor = useSelector((state) => state.notes.activeColor);
  const dispatch = useDispatch();
  //console.log(activeColor);

  const handleSubmit = (event) => {
    // console.log("title : ", title);
    // console.log("note : ", note);
    title && note && dispatch(addNote(title, note, activeColor));
    setNote("");
    setTitle("");
  };

  return (
    <Card sx={{ minWidth: "50%", mt: 5, minHeight: "285px" }}>
      <CardContent sx={{ textAlign: "center" }}>
        <Box component="form">
          <TextField
            label="Note Title"
            id="title"
            // defaultValue="Enter a Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            size="small"
            placeholder="Enter a Title"
            sx={{ minWidth: "80%" }}
          />

          <TextField
            id="note"
            label="Enter your note here..."
            multiline
            rows={4}
            // defaultValue="Default Value"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            variant="standard"
            sx={{ minWidth: "80%" }}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                marginTop: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  borderRadius: "50%",
                  backgroundColor: "#ab47bc",
                  width: 32,
                  height: 32,
                  mx: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  "&:hover": {
                    backgroundColor: "#ab47bc",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
                onClick={() => dispatch(changeColor("#ab47bc"))}
              >
                {activeColor === "#ab47bc" ? (
                  <DoneIcon sx={{ color: "#fff", fontSize: "1.7rem" }} />
                ) : (
                  ""
                )}
              </Box>
              <Box
                sx={{
                  borderRadius: "50%",
                  backgroundColor: "#42a5f5",
                  width: 32,
                  height: 32,
                  mx: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  "&:hover": {
                    backgroundColor: "#42a5f5",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
                onClick={() => dispatch(changeColor("#42a5f5"))}
              >
                {activeColor === "#42a5f5" ? (
                  <DoneIcon sx={{ color: "#fff", fontSize: "1.7rem" }} />
                ) : (
                  ""
                )}
              </Box>
              <Box
                sx={{
                  borderRadius: "50%",
                  backgroundColor: "#ef5350",
                  width: 32,
                  height: 32,
                  mx: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  "&:hover": {
                    backgroundColor: "#ef5350",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
                onClick={() => dispatch(changeColor("#ef5350"))}
              >
                {activeColor === "#ef5350" ? (
                  <DoneIcon sx={{ color: "#fff", fontSize: "1.7rem" }} />
                ) : (
                  ""
                )}
              </Box>
              <Box
                sx={{
                  borderRadius: "50%",
                  backgroundColor: "#4caf50",
                  width: 32,
                  height: 32,
                  mx: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  "&:hover": {
                    backgroundColor: "#4caf50",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
                onClick={() => dispatch(changeColor("#4caf50"))}
              >
                {activeColor === "#4caf50" ? (
                  <DoneIcon sx={{ color: "#fff", fontSize: "1.7rem" }} />
                ) : (
                  ""
                )}
              </Box>
              <Box
                sx={{
                  borderRadius: "50%",
                  backgroundColor: "#ffeb3b",
                  width: 32,
                  height: 32,
                  mx: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  "&:hover": {
                    backgroundColor: "#ffeb3b",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
                onClick={() => dispatch(changeColor("#ffeb3b"))}
              >
                {activeColor === "#ffeb3b" ? (
                  <DoneIcon sx={{ color: "#fff", fontSize: "1.7rem" }} />
                ) : (
                  ""
                )}
              </Box>
            </Box>
          </Box>
          <Button
            variant="contained"
            sx={{ textAlign: "center", marginTop: "15px" }}
            onClick={handleSubmit}
          >
            Add Note{" "}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
export default Form;
