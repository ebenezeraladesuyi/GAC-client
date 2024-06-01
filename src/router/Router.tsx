/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import HomeLayout from "../layout/HomeLayout";
import MemberLayout from "../layout/MemberLayout";
// import Member from "../pages/Member/Member";
// import HomeComp from "../pages/homepage/HomeComp";


const HomeComp = lazy(() => import("../pages/homepage/HomeComp"));
const Member = lazy(() => import("../pages/Member/Member"));


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
])
