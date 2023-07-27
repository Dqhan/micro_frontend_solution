import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routers } from "./routers";
import Error from "./pages/error";
import React from "react";
import "../styles/index.scss";
import { ConfigProvider } from "antd";

const mount = (el, { basePath, prefixCls }) => {
  const router = createBrowserRouter(routers, {
    basename: basePath,
  });

  const App = () => {
    return (
      <>
        <ConfigProvider prefixCls={`${prefixCls}`}>
          <RouterProvider router={router} fallbackElement={<Error />} />
        </ConfigProvider>
      </>
    );
  };

  const root = createRoot(el);

  root.render(<App />);
};

const el = document.getElementById("application-react-b-root");
el && mount(el, {
  basePath: '/',
  prefixCls: ''
});

export { mount };
