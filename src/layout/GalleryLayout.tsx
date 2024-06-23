// import React from 'react'

import { Outlet } from "react-router-dom"
import { Footer, Header } from "../componets"

const GalleryLayout = () => {
  return (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default GalleryLayout