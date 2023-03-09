import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Ferrie from "./containers/Ferrie/Ferrie";
import Hotel from "./containers/Hotel/Hotel";
import Destail from "./containers/Detail/Detail";
import HotelDetail from "./containers/HotelDetail/HotelDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/ferrie",
    element: <Ferrie />,
  },
  {
    path: "/hotel",
    element: <Hotel />,
  },
  {
    path: "/detail",
    element: <Destail />,
  },
  {
    path: "/hoteldetail",
    element: <HotelDetail />,
  },
  {
    path: "/detail",
    element: <Destail />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
