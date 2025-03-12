import React from "react";
import { Container, Typography, Box, Paper } from "@mui/material";
import { yellow } from "@mui/material/colors";

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5, color: "white" }}>
      {/* Title */}
      <Typography
        variant="h3"
        fontWeight="bold"
        align="center"
        gutterBottom
        sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" }, color: yellow[700] }}
      >
        About Movie App
      </Typography>

      {/* Intro Text */}
      <Typography
        variant="h6"
        color="white"
        align="center"
        sx={{
          maxWidth: "75%",
          mx: "auto",
          mb: 4,
          fontSize: { xs: "1rem", md: "1.2rem" },
        }}
      >
        🎬 Welcome to <strong>Movie App</strong>, your ultimate destination for
        discovering movies, exploring reviews, and staying updated with the
        latest releases.
      </Typography>

      {/* Mission Section */}
      <Box
        display="flex"
        flexDirection={{ xs: "column-reverse", md: "row" }}
        alignItems="center"
        gap={4}
      >
        {/* Left Side - Mission Text */}
        <Box flex={1} textAlign={{ xs: "center", md: "left" }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            🎯 Our Mission
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: { xs: "1rem", md: "1.1rem" } }}
          >
            Our mission is to revolutionize the way movie lovers experience
            cinema by providing a seamless, immersive, and personalized
            platform. We aim to be the ultimate destination for film
            enthusiasts, offering the latest releases, in-depth reviews,
            high-quality trailers, and AI-driven recommendations.
          </Typography>
        </Box>

        {/* Right Side - Image */}
        <Paper
          elevation={10}
          sx={{
            overflow: "hidden",
            borderRadius: 4,
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "100%",
            animation: "fadeIn 2s ease-in-out ", // Animation applied here
            animationDirection: "alternate",
            animationIterationCount: "infinite",
            "@keyframes fadeIn": {
              "0%": {
                opacity: 0,
                transform: "translateY(60px)",
                rotate: "-3deg",
              },
              "100%": {
                opacity: 1,
                transform: "translateY(0)",
                rotate: "3deg",
              },
            },
          }}
        >
          <img
            src="https://galalitescreens.com/wp-content/uploads/2017/11/cinema-theatre.webp"
            alt="Movie theater"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              borderRadius: 8,
            }}
          />
        </Paper>
      </Box>
    </Container>
  );
};

export default About;
