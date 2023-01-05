import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import App from "../App";
import DefaultCard from "../components/atoms/DefaultCard";
// import HomePage from "..";
// import Agenda from "..";
// import ContactUs from "..";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <div>Hello</div>,
      },
      {
        path: "/agenda",
        element: <div>Agenda</div>,
      },
      {
        path: "/contactus",
        element: <DefaultCard />,
      },
    ],
  },
]);

const RootNavigator = () => {
  return <RouterProvider router={router} />;
};

export default RootNavigator;
