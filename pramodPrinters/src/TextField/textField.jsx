import React from "react";
import TextField from "@mui/material/TextField";

export function Textfield({ label, variant, width, type, value, name, set }) {
  console.log(label, variant, width, type, value, name, set);
  return (
    <TextField
    required
      id="outlined-basic"
      label={label}
      variant={variant}
      fullWidth
      type={type}
      value={value}
      name={name}
      onChange={(e) => set(e.target.value)}
      sx={{
        zIndex: "1",
        width: width,
        backgroundColor: variant === "outlined" ? "transparent" : "rgb(30,109,122)",
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
  );
}
