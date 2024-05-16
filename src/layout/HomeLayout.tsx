// import React from 'react'

import { Outlet } from "react-router-dom"
import { Header } from "../componets"

const HomeLayout = () => {
  return (
    <div>
        <Header />
        <Outlet />
    </div>
  )
}

export default HomeLayout