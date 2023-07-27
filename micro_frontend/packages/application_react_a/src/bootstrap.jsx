import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { excuteRouter } from "./routers";
import Error from "./pages/error";
import React, { useEffect, useState } from "react";
import "../styles/index.scss";
import { ConfigProvider } from "antd";
import { store, persistor } from "../store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

const App = (props) => {
  const { router, prefixCls, shared } = props;
  const [sharedState, setSharedState] = useState(shared.getShared());

  useEffect(() => {
    shared.onSharedChange((state) => {
      setSharedState(state)
    });
  }, []);

  useEffect(() => {
    console.log('1', 1)
  }, [sharedState])

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ConfigProvider prefixCls={`${prefixCls}`}>
          <React.Suspense fallback={<div>Loading...</div>}>
            <RouterProvider router={router} fallbackElement={<Error />} />
          </React.Suspense>
        </ConfigProvider>
      </PersistGate>
    </Provider>
  );
};

const mount = (el, { basePath, prefixCls, shared }) => {
  const router = createBrowserRouter(excuteRouter(shared), {
    basename: basePath,
  });

  const root = createRoot(el);
  root.render(<App router={router} prefixCls={prefixCls} shared={shared} />);
};

const unmount = (el) => {};

const el = document.getElementById("application-react-a-root");
el &&
  mount(el, {
    basePath: "/",
    prefixCls: "",
  });

export { mount };
