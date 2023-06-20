import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Error from "./components/Error";
import CountryDetails from "./components/CountryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/:countryy",
        element: <CountryDetails />,
      },
    ],
  },
  // {
  //   path: "/contact",
  //   element: <Contact />,
  // },
]);

const root = createRoot(document.querySelector(".root"));
root.render(
  <>
    {/* <Header /> */}
    <RouterProvider router={router} />
  </>
);
