import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DanceFloor from "./pages/DanceFloor";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/characters",
        element: <DanceFloor />,
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
