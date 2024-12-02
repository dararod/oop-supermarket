import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./components/App";
import { Basket } from "./components/Basket";

import "./index.css";
import { BasketContextProvider } from "./context/BasketContext";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/basket",
    element: <Basket />,
  }
]);

root.render(
  <React.StrictMode>
    <BasketContextProvider>
      <RouterProvider router={router} />
    </BasketContextProvider>
  </React.StrictMode>
);
