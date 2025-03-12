import React from "react";
import { Box, Typography, TextField, Button, Card, Stack } from "@mui/material";
import { grey, purple, yellow } from "@mui/material/colors";
import { fieldStyle } from "../styles/styles";
const ContactUs = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 10 }, py: 5, textAlign: "center" }}>
      {/* Title */}
      <Typography
        variant="h3"
        fontWeight="bold"
        color="warning.main"
        mb={2}
        sx={{ color: yellow[700] }}
      >
        Get in Touch
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ maxWidth: 600, mx: "auto", mb: 4, color: grey[400] }}
      >
        Have questions or feedback? We&apos;d love to hear from you! Fill out
        the form below, and we’ll get back to you as soon as possible.
      </Typography>

      {/* Contact Info & Form */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        alignItems="center"
      >
        {/* Contact Info */}
        <Box flex={1} textAlign="left">
          <Typography variant="h5" fontWeight="bold" sx={{ color: grey[400] }}>
            📍 Our Location
          </Typography>
          <Typography color="white">
            123 Movie Street, Hollywood, CA, USA
          </Typography>

          <Typography
            variant="h5"
            fontWeight="bold"
            mt={2}
            sx={{ color: grey[400] }}
          >
            📧 Email Us
          </Typography>
          <Typography color="white">support@movieapp.com</Typography>

          <Typography
            variant="h5"
            fontWeight="bold"
            mt={2}
            sx={{ color: grey[400] }}
          >
            📞 Call Us
          </Typography>
          <Typography color="white">+1 (555) 123-4567</Typography>
        </Box>

        {/* Contact Form */}
        <Card sx={{ borderRadius: 3, p: 4, width: "100%", maxWidth: 600, boxShadow: 5 }}>
          <form>
            <Stack spacing={2}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                sx={fieldStyle}
              />
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                sx={fieldStyle}
              />
              <TextField
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                sx={{
                  "& .MuiInputBase-root": {
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
                }}
              />
              <Button
                variant="contained"
                sx={{ bgcolor: yellow[700] }}
                fullWidth
              >
                Send Message 🚀
              </Button>
            </Stack>
          </form>
        </Card>
      </Stack>
    </Box>
  );
};

export default ContactUs;
