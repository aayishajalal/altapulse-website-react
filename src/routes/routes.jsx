import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy";
import DeliveryPolicies from "../components/DeliveryPolicies/DeliveryPolicies";
import TermsAndConditions from "../components/TermsAndConditions/TermsAndConditions";
import RefundPolicies from "../components/RefundPolicies/RefundPolicies";

// Lazy loading components
const Home = lazy(() => import("../pages/Home"));
const AboutUs = lazy(() => import("../pages/AboutUs"));
const Blogs = lazy(() => import("../pages/Blogs"));
const ContactUs = lazy(() => import("../pages/ContactUs"));
const Services = lazy(() => import("../pages/Services"));
const IndvBlogs = lazy(() => import("../pages/IndvBlogs")); // Lazy load IndvBlogs
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
      {
        path: "/blogs/:id", // Dynamic individual blog route
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <IndvBlogs />
          </Suspense>
        ),
      },
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
      {
        path: "/privacy-policy", // Privacy Policy page route
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <PrivacyPolicy />
          </Suspense>
        ),
      },
      {
        path: "/delivery-policies", // Delivery Policies page route
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <DeliveryPolicies />
          </Suspense>
        ),
      },
      {
        path: "/terms", // Terms and Conditions page route
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <TermsAndConditions />
          </Suspense>
        ),
      },
      {
        path: "/refund-policy", // Refund Policy page route
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <RefundPolicies />
          </Suspense>
        ),
      },
    ],
  },
]);

export default appRouter;
  