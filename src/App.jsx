import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import ContactUs from "./pages/contact_us";
import NotFound from "./pages/not-found";
import Layout from "./pages/layout/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import MovieDetails from "./components/moviedetails";
import MoviesContextProvider from "./contexts/moviesContextProvider";
import { Provider, useSelector } from "react-redux";
import store from "./redux/store/store";
import Favorites from "./pages/favorites";
import AuthLayout from "./pages/layout/authlayout";
import Signup from "./components/auth/signup";
import Login from "./components/auth/login";
import Profile from "./components/profile";

// function ProtectedRoute({ element }) {
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   return isAuthenticated ? element : <Navigate to="/login" />;
// }

function App() {
  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element: <AuthLayout />, // Show Login or SignUp first
        children: [
          { path: "", element: <Signup /> }, // Default to signup
          { path: "signup", element: <Signup /> },
          { path: "login", element: <Login /> },
          { path: "*", element: <NotFound /> },
        ],
      },
      {
        path: "/home",
        // element: <ProtectedRoute element={<Layout />} />, // Require authentication
        element: <Layout />,
        children: [
          { path: "", element: <Home /> },
          { path: "movieDetails/:id", element: <MovieDetails /> },
          { path: "favorites", element: <Favorites /> },
          { path: "profile", element: <Profile /> },
          { path: "about", element: <About /> },
          { path: "contactUs", element: <ContactUs /> },
          { path: "*", element: <NotFound /> },
        ],
      },
      { path: "*", element: <NotFound /> },
    ],
    { basename: "/myMovieApp" }
  );
  return (
    <>
      {/* context */}
      {/* <MoviesContextProvider>
        <RouterProvider router={routes}></RouterProvider>
      </MoviesContextProvider> */}

      <Provider store={store}>
        <RouterProvider router={routes}></RouterProvider>
      </Provider>
    </>
  );
}

export default App;
