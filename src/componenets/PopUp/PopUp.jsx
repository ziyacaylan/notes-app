import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";

import { useSelector, useDispatch } from "react-redux";
import { editNote, deleteNote } from "../../features/notes/notesSlice";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PopUp = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  const currentNote = useSelector((state) => state.notes.currentNote);
  const [note, setNote] = useState(currentNote.note);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleUpdate = () => {
    dispatch(editNote(note));
    setIsOpen(false);
  };
  const handleDelete = () => {
    dispatch(deleteNote());
    setIsOpen(false);
  };
  return (
    <Dialog
      open={isOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
    >
      <Paper sx={{ width: "350px", height: "350px" }}>
        <DialogTitle sx={{ textAlign: "center" }}>
          {currentNote.title}
        </DialogTitle>
        <Divider />
        <DialogContent>
          <TextField
            id="note"
            label="Your Note"
            multiline
            rows={6}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            variant="standard"
            sx={{ minWidth: "100%" }}
          />
        </DialogContent>
        <DialogActions
          sx={{
            height: "auto",
            display: "flex",
            alignItems: "flexEnd",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            color="error"
            onClick={handleDelete}
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
          <Button
            variant="contained"
            color="success"
            startIcon={<SaveIcon />}
            onClick={handleUpdate}
          >
            save
          </Button>
        </DialogActions>
      </Paper>
    </Dialog>
  );
};
export default PopUp;
