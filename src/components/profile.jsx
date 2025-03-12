import React, { useEffect } from "react";
import {
  Container,
  Avatar,
  Typography,
  Card,
  CardContent,
  Chip,
  Stack,
} from "@mui/material";
import { purple } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../redux/store/slices/userSlice";

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const userId = localStorage.getItem("loggedInUserId");
    if (userId) {
      dispatch(getUserDetails(userId));
    }
  }, [dispatch]);

  return (
      <Container maxWidth="sm" sx={{ mt: 10, mb:16}}>
      <Card
        elevation={3}
        sx={{
          p: 3,
          borderRadius: 3,
          textAlign: "center",
        }}
      >
        <Avatar
          sx={{
            bgcolor: purple[500],
            width: 90,
            height: 90,
            fontSize: "2rem",
            mx: "auto",
            mb: 2,
          }}
        >
          {user?.name?.charAt(0).toUpperCase()}
        </Avatar>

        <CardContent>
          <Typography variant="h5" fontWeight="bold">
            {user?.name || "Unknown User"}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {user?.email || "No Email Provided"}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {user?.age ? `${user.age} years old` : "Age not specified"}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {user?.gender || "Gender not specified"}
          </Typography>

          {/* Movie Preferences */}
          {user?.moviePreferences?.length > 0 && (
            <Stack direction="row" spacing={1} justifyContent="center" mt={2}>
              {user.moviePreferences.map((genre, index) => (
                <Chip key={index} label={genre} sx={{bgcolor:purple[100]}} />
              ))}
            </Stack>
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

export default Profile;
