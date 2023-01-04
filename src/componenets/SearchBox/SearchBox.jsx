import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";

import { useSelector, useDispatch } from "react-redux";
import { filteredNotes } from "../../features/notes/notesSlice";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  // borderRadius: theme.shape.borderRadius,
  backgroundColor: "white",
  borderRadius: "10px",
  "&:hover": {
    backgroundColor: "white",
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "blueGrey[900]",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "blueGrey[400]",

  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "28ch",
      },
    },
  },
}));

const SearchBox = () => {
  const filtered = useSelector((state) => state.notes.filtered);
  const dispatch = useDispatch();

  return (
    <Box sx={{ my: 2, backgroundColor: "blueGrey[900]" }}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          value={filtered}
          onChange={(event) => dispatch(filteredNotes(event.target.value))}
        />
      </Search>
    </Box>
  );
};

export default SearchBox;
