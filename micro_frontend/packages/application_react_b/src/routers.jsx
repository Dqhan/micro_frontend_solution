import React from "react";
import Layout from "./pages/layout";
import PageA from "./pages/page_a";
import PageB from "./pages/page_b";
import Home from "./pages/home";

const baseUrl = "react-app-b/";

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
        path: "/page_a",
        element: <PageA />,
      },
      {
        path: "/page_b",
        element: <PageB />,
      },
    ],
  },
];
