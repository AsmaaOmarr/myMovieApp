import React, { useState } from "react";
import {
  Button,
  Container,
  Typography,
  Box,
  Stack,
  Snackbar,
  Alert,
} from "@mui/material";
import { purple } from "@mui/material/colors";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/store/slices/userSlice";
import CustomTextField from "./custom-texfield";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();

  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("login Data:", formData);

    dispatch(login(formData))
      .unwrap()
      .then((user) => {
        console.log(user);
        setAlert({
          open: true,
          message: `Login Successful! Welcome, ${user.name}`,
          severity: "success",
        });
        setTimeout(() => {
          navigate("/home");
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
        setAlert({
          open: true,
          message: `Login Failed: ${err || "Something went wrong"}`,
          severity: "error",
        });
      });
  };

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            width: { xs: "90%", sm: "80%", md: "60%" },
            p: { xs: 2, sm: 4, md: 5 },
            boxShadow: 3,
            borderRadius: 4,
            bgcolor: "background.paper",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontSize: { xs: "1.5rem", sm: "2rem", marginBottom: 8 } }}
          >
            Login
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontSize: { xs: "0.7rem", sm: "0.85rem", marginBottom: 20 } }}
          >
            Welcome back, movie buff! Your next great film awaits! 🎥
          </Typography>
          <form onSubmit={handleLogin} style={{ width: "100%" }}>
            <Stack spacing={2.5}>
              <CustomTextField
                label={"Email"}
                name={"email"}
                value={formData.email}
                onChange={handleChange}
              />

              <CustomTextField
                type={"password"}
                label={"Password"}
                name={"password"}
                value={formData.password}
                onChange={handleChange}
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  mt: 2,
                  backgroundColor: purple[400],
                  color: "white",
                  "&:hover": { backgroundColor: purple[600] },
                  height: { xs: "40px", sm: "50px" },
                  fontSize: { xs: "14px", sm: "16px" },
                }}
              >
                Login
              </Button>
            </Stack>
          </form>
          <Box
            mt={4}
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 1,
              justifyContent: "center",
            }}
          >
            <Typography variant="body2" color="textSecondary" component="p">
              Don&apos;t have account?
            </Typography>
            <Link
              to="/signup"
              style={{ textDecoration: "none", color: "purple" }}
            >
              <Typography
                variant="body2"
                color="secondary"
                sx={{ textDecoration: "none" }}
              >
                Signup
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
      {/* MUI Snackbar Alert */}
      <Snackbar
        open={alert.open}
        autoHideDuration={4000}
        onClose={() => setAlert({ ...alert, open: false })}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setAlert({ ...alert, open: false })}
          severity={alert.severity}
          sx={{ width: "100%" }}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default Login;
