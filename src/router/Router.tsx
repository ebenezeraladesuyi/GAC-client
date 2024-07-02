/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import HomeLayout from "../layout/HomeLayout";
import MemberLayout from "../layout/MemberLayout";
import AboutLayout from "../layout/AboutLayout";
import ContactLayout from "../layout/ContactLayout";
import GalleryLayout from "../layout/GalleryLayout";
import AllSermonLayout from "../layout/AllSermonLayout";
import PaymentLayout from "../layout/PaymentLayout";
// import PaymentForm from "../pages/payment/PaymentForm";
import StripePayment from "../pages/payment/StripePayment";


const HomeComp = lazy(() => import("../pages/homepage/HomeComp"));
const Member = lazy(() => import("../pages/Member/Member"));
const AboutComp = lazy(() => import("../pages/about/AboutComp"));
const Contact = lazy(() => import("../pages/contact/Contact"));
const Gallery = lazy(() => import("../pages/gallery/Gallery"));
const AllSermon = lazy(() => import("../pages/allSermon/AllSermon"));
// const StripeApp = lazy(() => import("../pages/payment/StripeApp"));


export const element = createBrowserRouter([
    {
        path:"/",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <HomeComp />
            }
        ]
    },
    {
        path:"/becomeamember",
        element: <MemberLayout />,
        children: [
            {
                index: true,
                element: <Member />
            }
        ]
    },
    {
        path:"/aboutus",
        element: <AboutLayout />,
        children: [
            {
                index: true,
                element: <AboutComp />
            }
        ]
    },
    {
        path:"/contact",
        element: <ContactLayout />,
        children: [
            {
                index: true,
                element: <Contact />
            }
        ]
    },
    {
        path:"/gallery",
        element: <GalleryLayout />,
        children: [
            {
                index: true,
                element: <Gallery />
            }
        ]
    },
    {
        path:"/sermons",
        element: <AllSermonLayout />,
        children: [
            {
                index: true,
                element: <AllSermon />
            }
        ]
    },
    {
        path:"/payonline",
        element: <PaymentLayout />,
        children: [
            {
                index: true,
                element: <StripePayment />
            }
        ]
    },
])
