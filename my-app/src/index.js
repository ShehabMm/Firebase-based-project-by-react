import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Homepage from "./pages/Homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./pages/Sign-up";
import TheContent from "./pages/the content";
import Loading from "./components/loading";
import PopupForm from "./components/Popup form";
import Error404 from "./pages/error404";
import Newex from "./pages/Newex";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <Error404 />,
  },

  {
    path: "/sign-up",
    element: <Signup />,
    errorElement: <Error404 />,
  },

  {
    path: "/contact",
    element: <App />,
    errorElement: <Error404 />,
  },

  {
    path: "/TheContent",
    element: <TheContent />,
    errorElement: <Error404 />,
  },
  {
    path: "/Loading",
    element: <Loading />,
    errorElement: <Error404 />,
  },

  {
    path: "/PopupForm",
    element: <PopupForm />,
    errorElement: <Error404 />,
  },
  {
    path: "/Newex",
    element: <Newex />,
    // errorElement: <Error404 />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);