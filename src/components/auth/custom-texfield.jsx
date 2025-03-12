/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { fieldStyle } from "../../styles/styles";

const CustomTextField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = true,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <TextField
      fullWidth
      type={type === "password" ? (showPassword ? "text" : "password") : type}
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      sx={fieldStyle}
      InputProps={
        type === "password"
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={togglePasswordVisibility} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }
          : {}
      }
    />
  );
};

export default CustomTextField;
