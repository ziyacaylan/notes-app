import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";

const Category = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

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
            value={age}
            label="Category"
            onChange={handleChange}
          >
            <MenuItem value={"all"}>All Notes</MenuItem>
            <MenuItem value={"puprle[500]"}>Purple Notes</MenuItem>
            <MenuItem value={"blue[500]"}>Blue Notes</MenuItem>
            <MenuItem value={"red[500]"}>Red Notes</MenuItem>
            <MenuItem value={"green[500]"}>Green Notes</MenuItem>
            <MenuItem value={"yellow[500]"}>Yellow Notes</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};
export default Category;
