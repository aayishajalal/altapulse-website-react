import React from "react";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import ReactDOM from "react-dom/client";
import appRouter from "./routes/routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
