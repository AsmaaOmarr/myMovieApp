import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import ContactUs from "./pages/contact_us";
import NotFound from "./pages/not-found";
import Layout from "./pages/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import MovieDetails from "./components/moviedetails";

function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/myMovieApp",
          element: <Home />,
        },
        {
          path: "/movieDetails/:id",
          element: <MovieDetails />,
        },
        { path: "/about", element: <About /> },
        { path: "/contactUs", element: <ContactUs /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
