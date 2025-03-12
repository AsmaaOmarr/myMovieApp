import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      textAlign="center"
    >
      <Typography variant="h2" color="error" fontWeight="bold" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" color="white">
        Oops! The page you’re looking for doesn’t exist.
      </Typography>
      <Button
        variant="outlined"
        color="warning"
        sx={{ mt: 3 }}
        component={Link}
        to="/"
      >
        Go to Home
      </Button>
    </Box>
  );
};

export default NotFound;
