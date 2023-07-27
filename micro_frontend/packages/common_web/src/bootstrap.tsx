import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routers } from "./routers";
import Error from "./pages/error";
import React from "react";
import "../styles/index.scss";
import { store, persistor } from "../store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const router = createBrowserRouter(routers);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <React.Suspense fallback={<div>Loading...</div>}>
          <RouterProvider router={router} fallbackElement={<Error />} />
        </React.Suspense>
      </PersistGate>
    </Provider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
