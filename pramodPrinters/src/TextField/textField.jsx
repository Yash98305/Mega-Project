import React from "react";
import TextField from "@mui/material/TextField";
import zIndex from "@mui/material/styles/zIndex";
import Box from "@mui/material/Box";

export function Textfield({ label, variant, width, type }) {
  return (
    <Box 
    autoComplete="off" 
    noValidate
    sx={{
      width: { width },
    }}
    >
      <TextField
        id="outlined-basic"
        label={label}
        variant={variant}
        fullWidth
        type={type}
        sx={{
          zIndex: "1",
          width: { width },
          backgroundColor: `${
            variant === "outlined" ? "transparent" : "rgb(30,109,122)"
          }`,
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "rgb(11, 46, 69)",
              borderWidth: "4px",
              borderRadius: "2rem",
              height: "4rem",
            },
            "&:hover fieldset": {
              borderColor: "#64b5f6",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#1565c0",
            },
          },
          "& .MuiOutlinedInput-input": {
            color: "rgb(255, 209, 0)",
          },
          "& .MuiInputLabel-outlined": {
            color: "rgb(255, 209, 0)",
            fontSize: "1rem",
          },
        }}
      />
    </Box>
  );
}
