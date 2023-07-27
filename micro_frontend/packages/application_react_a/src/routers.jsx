import React from "react";
import Layout from "./pages/layout";
import PageA from "./pages/page_a";
import PageB from "./pages/page_b";
import PageC from "./pages/page_c";
import Home from "./pages/home";


export const excuteRouter = (shared) => {
  return [
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
          element: <PageA shared={shared} />,
        },
        {
          path: "/page_b",
          element: <PageB />,
        },
        {
          path: "/page_c",
          element: <PageC />,
        },
      ],
    },
  ];
}

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
      {
        path: "/page_c",
        element: <PageC />,
      },
    ],
  },
];