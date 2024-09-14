// src/routes/routes.jsx
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "../layout/AppLayout"; // Your main layout component
import Home from "../pages/Home"; // Your Home page component
import AboutUs from "../pages/AboutUs";
import Blogs from "../pages/Blogs"; // Your Blogs page component
import ContactUs from "../pages/ContactUs"; // Your ContactUs page component
//import IndvBlog from "../pages/IndvBlog"; // Ensure this file exists or adjust path
import Services from "../pages/Services"; // Your Services page component

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, // Layout component that wraps around pages
    children: [
      { path: "/", element: <Home /> }, // Home page route
      { path: "/about-us", element: <AboutUs /> }, // AboutUs page route
      { path: "/blogs", element: <Blogs /> }, // Blogs page route
      { path: "/contact-us", element: <ContactUs /> }, // ContactUs page route
      { path: "/services", element: <Services /> }, // Services page route
      // { path: "blogs/:blogName", element: <IndvBlog /> }, // Individual blog page route with dynamic parameter
    ],
  },
]);

export default appRouter;
