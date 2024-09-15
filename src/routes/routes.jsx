import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import { Outlet } from "react-router-dom"; // Required for nested routes

// Lazy loading components
const Home = lazy(() => import("../pages/Home"));
const AboutUs = lazy(() => import("../pages/AboutUs"));
const Blogs = lazy(() => import("../pages/Blogs"));
const ContactUs = lazy(() => import("../pages/ContactUs"));
const Services = lazy(() => import("../pages/Services"));
// const IndvBlog = lazy(() => import("../pages/IndvBlog"));
const ErrorPage = lazy(() => import("../components/ErrorPage/ErrorPage"));

const appRouter = createBrowserRouter([
  {
    path: "/", // Base route
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <AppLayout />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<p>Loading...</p>}>
        <ErrorPage />
      </Suspense>
    ),
    children: [
      {
        path: "/", // Home page route
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/about-us", // About Us page route
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "/blogs", // Blogs page route
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Blogs />
          </Suspense>
        ),
      },
      // {
      //   path: "/blogs/:id", // Dynamic individual blog route
      //   element: (
      //     <Suspense fallback={<p>Loading...</p>}>
      //       <IndvBlog />
      //     </Suspense>
      //   ),
      // },
      {
        path: "/contact-us", // Contact Us page route
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <ContactUs />
          </Suspense>
        ),
      },
      {
        path: "/services", // Services page route
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Services />
          </Suspense>
        ),
      },
    ],
  },
]);

export default appRouter;
