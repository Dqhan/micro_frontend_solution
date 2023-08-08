import React from "react";
import Layout from "./pages/layout";
import Home from "./pages/home";
import CustomInput from "./pages/input";
import CustomSelect from "./pages/select";

export const routers = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/inputComponent",
        element: <CustomInput />,
      },
      {
        path: "/selectComponent",
        element: <CustomSelect />,
      },
    ],
  },
];
