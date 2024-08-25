import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout"; // Your main layout component

// Lazy loading components
const Home = lazy(() => import("../pages/Home")); // Home page component
const AboutUs = lazy(() => import("../pages/AboutUs")); // About Us page component
const Blogs = lazy(() => import("../pages/Blogs")); // Blogs page component
const ContactUs = lazy(() => import("../pages/ContactUs")); // Contact Us page component
const Services = lazy(() => import("../pages/Services")); // Services page component
const IndvBlog = lazy(() => import("../pages/IndvBlog")); // Individual blog page component
const ErrorPage = lazy(() => import("../components/ErrorPage/ErrorPage")); // Error page component

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, // Layout component that wraps around pages
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/about-us",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "/blogs",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Blogs />
          </Suspense>
        ),
      },
      {
        path: "/contact-us",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <ContactUs />
          </Suspense>
        ),
      },
      {
        path: "/services",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Services />
          </Suspense>
        ),
      },
      //The following route if you want to add dynamic routing for individual blogs
      {
        path: "blogs/:id",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <IndvBlog />
          </Suspense>
        ),
      },
    ],
    errorElement: (
      <Suspense fallback={<p>Loading...</p>}>
        <ErrorPage />
      </Suspense>
    ),
  },
]);

export default appRouter;
