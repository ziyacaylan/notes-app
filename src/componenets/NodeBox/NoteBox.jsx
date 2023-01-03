import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { purple, blue, red, green, yellow, grey } from "@mui/material/colors";

const NoteBox = (props) => {
  console.log(props.note.bgColor);
  const bgPrimary = purple[300];
  return (
    <Card
      sx={{
        width: "300px",
        mt: 5,
        mx: 2,
        fontFamily: "East Sea Dokdo, cursive",
        fontSize: "1.8rem",
        textAlign: "center",
        color: grey[800],
        minHeight: "175px",
        backgroundColor: bgPrimary, // purple[300],
      }}
    >
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h6" gutterBottom>
          {props.note.title}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {props.note.description}
      </CardActions>
    </Card>
  );
};
export default NoteBox;
