import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiURL = "http://localhost:5000/users";

export const signUp = createAsyncThunk(
  "SignUp",
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.get(apiURL);
      const users = response.data;

      // Check if email already exists
      const existingUser = users.find((u) => u.email === user.email);
      if (existingUser) {
        return rejectWithValue("Email already exists! Try logging in.");
      }
      // If email is unique, create new user
      const newUser = await axios.post(apiURL, user);
      return newUser.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Signup failed!");
    }
  }
);

export const login = createAsyncThunk(
  "Login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.get(apiURL);
      const users = response.data;

      // Find user by email
      const user = users.find((u) => u.email === email);
      if (!user) {
        return rejectWithValue("User not found! Please sign up.");
      }

      // Check password
      if (user.password !== password) {
        return rejectWithValue("Incorrect password! Try again.");
      }

      localStorage.setItem("loggedInUserId", user.id);
      return user; // Login successful
    } catch (error) {
      return rejectWithValue(error.response?.data || "Login failed!");
    }
  }
);

export const getUserDetails = createAsyncThunk(
  "getUserDetails",
  async (userId) => {
    const response = await axios.get(apiURL);
    const users = response.data;

    const user = users.find((u) => u.id === userId);
    return user;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: { user: {} },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        console.log(state.user, "login");
      })
      .addCase(getUserDetails.fulfilled, (state, action) => {
        state.user = action.payload;
        console.log(state.user, "getUserDetails");
      });
  },
});

export default userSlice.reducer;
