import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./pages/error";
import React from "react";
import "../styles/index.scss";
import { ConfigProvider } from "antd";
import LOGIN from "./pages/login";

import INFO from "./pages/info";

const App = (props) => {
  const { prefixCls, basePath, shared } = props;

  return (
    <ConfigProvider prefixCls={`${prefixCls}`}>
      <React.Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter basename={basePath}>
          <Routes path="/" element={<Navigator to="login" />}>
            <Route path="login" element={<LOGIN shared={shared} />} />
            <Route path="info" element={<INFO shared={shared} />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </React.Suspense>
    </ConfigProvider>
  );
};

const mount = (el, { basePath, prefixCls, shared }) => {
  const root = createRoot(el);
  root.render(
    <App prefixCls={prefixCls} shared={shared} basePath={basePath} />
  );
};

const unmount = (el) => {};

const el = document.getElementById("application-user-management");
el &&
  mount(el, {
    basePath: "/",
    prefixCls: "",
  });

export { mount };
