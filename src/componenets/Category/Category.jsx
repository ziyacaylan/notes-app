import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";

import { useSelector, useDispatch } from "react-redux";
import { categorySelect } from "../../features/notes/notesSlice";

const Category = () => {
  const category = useSelector((state) => state.notes.activeCategory);
  const dispatch = useDispatch();

  return (
    <Box sx={{ width: "300px" }}>
      <Typography
        variant="h5"
        mt={3}
        textAlign={"center"}
        color="#4A5568"
        gutterBottom
      >
        Category
      </Typography>
      <Box sx={{ backgroundColor: "white", my: 1 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Select</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Category"
            onChange={(e) => dispatch(categorySelect(e.target.value))}
          >
            <MenuItem value={"all"}>All Notes</MenuItem>
            <MenuItem value={"#ab47bc"}>Purple Notes</MenuItem>
            <MenuItem value={"#42a5f5"}>Blue Notes</MenuItem>
            <MenuItem value={"#ef5350"}>Red Notes</MenuItem>
            <MenuItem value={"#4caf50"}>Green Notes</MenuItem>
            <MenuItem value={"#ffeb3b"}>Yellow Notes</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};
export default Category;
