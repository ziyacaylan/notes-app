import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import TextField from "@mui/material/TextField";
import { purple, blue, red, green, yellow } from "@mui/material/colors";
import DoneIcon from "@mui/icons-material/Done";

const Form = () => {
  return (
    <Card sx={{ minWidth: "50%", mt: 5 }}>
      <CardContent sx={{ textAlign: "center" }}>
        <TextField
          label="Note Title"
          id="outlined-size-small"
          // defaultValue="Enter a Title"
          size="small"
          placeholder="Enter a Title"
          sx={{ minWidth: "80%" }}
        />

        <TextField
          id="standard-multiline-static"
          label="Enter your note here..."
          multiline
          rows={4}
          // defaultValue="Default Value"
          variant="standard"
          sx={{ minWidth: "80%" }}
        />
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <IconButton
          // color="success"
          sx={{ backgroundColor: "#0063cc" }}
          // aria-label="add an alarm"
        >
          <AlarmIcon />
        </IconButton> */}
        <Box
          sx={{
            borderRadius: "50%",
            backgroundColor: purple[500],
            width: 32,
            height: 32,
            mx: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "&:hover": {
              backgroundColor: purple[400],
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          <DoneIcon sx={{ color: "#fff", fontSize: "1.7rem" }} />
        </Box>
        <Box
          sx={{
            borderRadius: "50%",
            backgroundColor: blue[500],
            width: 32,
            height: 32,
            mx: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "&:hover": {
              backgroundColor: blue[400],
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          <DoneIcon sx={{ color: "#fff", fontSize: "1.7rem" }} />
        </Box>
        <Box
          sx={{
            borderRadius: "50%",
            backgroundColor: red[500],
            width: 32,
            height: 32,
            mx: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "&:hover": {
              backgroundColor: red[400],
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          <DoneIcon sx={{ color: "#fff", fontSize: "1.7rem" }} />
        </Box>
        <Box
          sx={{
            borderRadius: "50%",
            backgroundColor: green[500],
            width: 32,
            height: 32,
            mx: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "&:hover": {
              backgroundColor: green[400],
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          <DoneIcon sx={{ color: "#fff", fontSize: "1.7rem" }} />
        </Box>
        <Box
          sx={{
            borderRadius: "50%",
            backgroundColor: yellow[500],
            width: 32,
            height: 32,
            mx: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "&:hover": {
              backgroundColor: yellow[400],
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          <DoneIcon sx={{ color: "#fff", fontSize: "1.7rem" }} />
        </Box>
      </CardActions>
    </Card>
  );
};
export default Form;
