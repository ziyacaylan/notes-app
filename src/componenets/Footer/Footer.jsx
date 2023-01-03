import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { grey } from "@mui/material/colors";

const Footer = () => {
  return (
    <Box
      sx={{
        // display: "flex",
        // flexWrap: "wrap",
        // justifyContent: "center",
        position: "absolute",
        bottom: "1rem",
        typography: "body1",
        "& > :not(style) + :not(style)": {
          ml: 2,
        },
      }}
    >
      <Link
        href="https://github.com/ziyacaylan"
        underline="none"
        color={grey[500]}
        target="_blank"
        sx={{ fontFamily: "Oxygen, sans-serif" }}
      >
        {"Created by Ziya ÇAYLAN"}
      </Link>
    </Box>
  );
};
export default Footer;
