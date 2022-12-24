import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Host from "./routes/host";
import Listen from "./routes/listen";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
    },
    {
        path: "/host",
        element: <Host />,
    },
    {
        path: "/listen",
        element: <Listen />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);