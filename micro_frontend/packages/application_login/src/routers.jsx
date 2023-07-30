import React from "react";
import LOGIN from "./pages/login";
import REGISTER from "./pages/register";
import INFO from "./pages/info";

export const excuteRouter = (shared) => {
  return [
    {
      path: "/login",
      element: <LOGIN shared={shared} />,
    },
    {
      path: "/register",
      element: <REGISTER shared={shared} />,
    },
    {
      path: "/info",
      element: <INFO shared={shared} />,
    },
  ];
};
