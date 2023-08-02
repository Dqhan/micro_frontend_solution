import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Error from "./pages/error";
import React from "react";
import { ConfigProvider } from "antd";
import { store, persistor } from "../store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import Layout from "./pages/layout";
import PageA from "./pages/page_a";
import PageB from "./pages/page_b";
import PageC from "./pages/page_c";
import Home from "./pages/home";
import "../styles/index.scss";

const App = (props) => {
  const { prefixCls, basePath, shared } = props;

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ConfigProvider prefixCls={`${prefixCls}`}>
          <React.Suspense fallback={<div>Loading...</div>}>
            <BrowserRouter basename={basePath}>
              <Layout>
                <Routes>
                  <Route path="/" element={<Navigate to="home" />} />
                  <Route path="home" element={<Home />} />
                  <Route path="page_a" element={<PageA shared={shared} />} />
                  <Route path="page_b" element={<PageB shared={shared} />} />
                  <Route path="page_c" element={<PageC shared={shared}  />} />
                  <Route path="*" element={<Error />} />
                </Routes>
              </Layout>
            </BrowserRouter>
          </React.Suspense>
        </ConfigProvider>
      </PersistGate>
    </Provider>
  );
};

const mount = (el, { basePath, prefixCls, shared }) => {
  const root = createRoot(el);
  root.render(
    <App prefixCls={prefixCls} shared={shared} basePath={basePath} />
  );
};

const unmount = (el) => {};

const el = document.getElementById("application-react-a-root");
el &&
  mount(el, {
    basePath: "/",
    prefixCls: "",
  });

export { mount };
