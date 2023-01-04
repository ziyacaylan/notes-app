import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import { grey } from "@mui/material/colors";

const Footer = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "10px",
        backgroundColor: "#323232",
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
