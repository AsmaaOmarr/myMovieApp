import React, { useState } from "react";
import {
  Button,
  Container,
  Typography,
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  FormControl,
  Stack,
  Checkbox,
  FormGroup,
  Snackbar,
  Alert,
} from "@mui/material";
import { purple } from "@mui/material/colors";
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/store/slices/userSlice";
import { Link, useNavigate } from "react-router-dom";
import CustomTextField from "./custom-texfield";

function SignUp() {
  const genre = [
    "Action",
    "Adventure",
    "Animation",
    "Romantic",
    "Comedy",
    "Drama",
    "Horror",
    "Science Fiction",
  ];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
    confirmPassword: "",
    gender: "",
    moviePreferences: [],
  });
  const dispatch = useDispatch();
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const navigate = useNavigate();
 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      moviePreferences: checked
        ? [...prev.moviePreferences, value]
        : prev.moviePreferences.filter((genre) => genre !== value),
    }));
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setAlert({
        open: true,
        message: `Passwords do not match`,
        severity: "error",
      });
      return;
    }
    dispatch(signUp(formData))
      .unwrap()
      .then((user) => {
        console.log("Signup Successful", user);
        setAlert({
          open: true,
          message: `Signup Successful! Welcome, ${user.name}`,
          severity: "success",
        });
        setTimeout(() => navigate("/login"), 1000);
      })
      .catch((err) => {
        console.error("Signup Failed", err);
        setAlert({
          open: true,
          message: `Signup Failed: ${err || "Something went wrong"}`,
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
          marginTop: 5,
          marginBottom: 5,
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
            sx={{ fontSize: { xs: "1.5rem", sm: "2rem", marginBottom: 20 } }}
          >
            Sign Up
          </Typography>
          <form onSubmit={handleSignUp} style={{ width: "100%" }}>
            <Stack spacing={2.5}>
              <CustomTextField
                label={"Full Name"}
                name={"name"}
                value={formData.name}
                onChange={handleChange}
              />
              <CustomTextField
                label={"Email"}
                name={"email"}
                value={formData.email}
                onChange={handleChange}
              />
              <CustomTextField
                type={"number"}
                label={"Age"}
                name={"age"}
                value={formData.age}
                onChange={handleChange}
              />
              <CustomTextField
                type={"password"}
                label={"Password"}
                name={"password"}
                value={formData.password}
                onChange={handleChange}
              />
              <CustomTextField
                type={"password"}
                label={"Confirm Password"}
                name={"confirmPassword"}
                value={formData.confirmPassword}
                onChange={handleChange}
              />

              {/* Gender Selection */}
              <FormControl>
                <FormLabel sx={{ textAlign: "left", mb: 1 }}>
                  Gender *
                </FormLabel>
                <RadioGroup
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  row
                >
                  <FormControlLabel
                    value="Female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="Male"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
              </FormControl>

              {/* Movie Preferences */}
              <FormControl
                component="fieldset"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <FormLabel sx={{ width: "200px", textAlign: "left", mr: 2 }}>
                  Favorite Movie Genres *
                </FormLabel>
                <FormGroup row>
                  {genre.map((genre) => (
                    <FormControlLabel
                      key={genre}
                      control={
                        <Checkbox
                          value={genre}
                          checked={formData.moviePreferences.includes(genre)}
                          onChange={handleCheckboxChange}
                        />
                      }
                      label={genre}
                    />
                  ))}
                </FormGroup>
              </FormControl>

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
                Sign Up
              </Button>
            </Stack>
          </form>
          <Box
            mt={2}
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 1,
              justifyContent: "center",
            }}
          >
            <Typography variant="body2" color="textSecondary" component="p">
              Already have an account?
            </Typography>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "purple" }}
            >
              <Typography
                variant="body2"
                color="secondary"
                sx={{ textDecoration: "none" }}
              >
                Login
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

export default SignUp;
