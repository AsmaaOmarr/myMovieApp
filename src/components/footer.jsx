import React from "react";
import { Box, Typography, Link, Container } from "@mui/material";

const Footer = () => {
  return (
    <Box
      // component is how elem convert in html
      // help in SEO
      component="footer"
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        color: "white",
        py: 3,
        mt: 4,
        textAlign: "center",
      }}
    >
      <Container>
        <Typography variant="body2" sx={{ mb: 1 }}>
          &copy; {new Date().getFullYear()} My Movie App. All Rights Reserved.
        </Typography>
        <Box>
          <Link href="#" color="inherit" sx={{ mx: 1 }}>
            Privacy Policy
          </Link>
          <Link href="#" color="inherit" sx={{ mx: 1 }}>
            Terms of Service
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
