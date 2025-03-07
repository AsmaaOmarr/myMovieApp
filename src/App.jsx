import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import ContactUs from "./pages/contact_us";
import NotFound from "./pages/not-found";
import Layout from "./pages/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import MovieDetails from "./components/moviedetails";
import MoviesContextProvider from "./contexts/moviesContextProvider";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import Favorites from "./pages/favorites";

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
        { path: "/favorites", element: <Favorites /> },
        { path: "/about", element: <About /> },
        { path: "/contactUs", element: <ContactUs /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

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
