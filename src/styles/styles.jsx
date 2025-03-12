import { grey, purple } from "@mui/material/colors";

export const fieldStyle = {
  "& .MuiInputBase-root": {
    height: 40, // Adjust height
    borderRadius: 2, // Apply border-radius
    alignItems: "center", // Align text vertically
    "& fieldset": {
      borderColor: grey[400], // Default border color
    },
    "&:hover fieldset": {
      borderColor: purple[400],
      borderWidth: "2px",
    },
    "&.Mui-focused fieldset": {
      borderColor: purple[400],
    },
  },
  "& .MuiInputLabel-root": {
    fontSize: "0.8rem", // Adjust font size
    top: "-5px", // Adjust label position
    "&.Mui-focused": {
      color: purple[400],
    },
  },
};
