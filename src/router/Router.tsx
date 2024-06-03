/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import HomeLayout from "../layout/HomeLayout";
import MemberLayout from "../layout/MemberLayout";
import AboutLayout from "../layout/AboutLayout";
import ContactLayout from "../layout/ContactLayout";
// import Contact from "../pages/contact/Contact";
// import AboutComp from "../pages/about/AboutComp";
// import Member from "../pages/Member/Member";
// import HomeComp from "../pages/homepage/HomeComp";


const HomeComp = lazy(() => import("../pages/homepage/HomeComp"));
const Member = lazy(() => import("../pages/Member/Member"));
const AboutComp = lazy(() => import("../pages/about/AboutComp"));
const Contact = lazy(() => import("../pages/contact/Contact"));


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
])
