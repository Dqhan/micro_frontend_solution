import React, { lazy } from "react";
import Top from "./pages/top";
import Layout from "./pages/layout";
const Application_React_A = lazy(
  () => import("./components/Application_React_A")
);
const Application_React_B = lazy(
  () => import("./components/Application_React_B")
);
const Application_Vue = lazy(() => import("./components/Application_Vue"));
const Application_Components = lazy(
  () => import("./components/Application_Components")
);
const Application_Login = lazy(() => import("./components/Application_Login"));

export const routers = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Top />,
      },
      {
        path: "react-app-a/*",
        element: <Application_React_A />,
      },
      {
        path: "react-app-b/*",
        element: <Application_React_B />,
      },
      {
        path: "vue-app/*",
        element: <Application_Vue />,
      },
      {
        path: "components/*",
        element: <Application_Components />,
      },
      {
        path: "user/*",
        element: <Application_Login />,
      },
    ],
  },
];
