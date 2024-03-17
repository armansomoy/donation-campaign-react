import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Root from "./components/Root/Root.jsx";
import Error from "./components/Error/Error.jsx";
import Donation from "./components/Donation/Donation.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";
import DonationDetails from "./components/DonationDetails/DonationDetails.jsx";
import AppliedDonations from "./components/AppliedDonations/AppliedDonations.jsx";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/donation/:id",
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch('donations.json')
      },{
        path: "/donation",
        element: <AppliedDonations></AppliedDonations>,
        loader: () => fetch('donations.json')
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
