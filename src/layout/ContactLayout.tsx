// import React from 'react'

import { Outlet } from "react-router-dom"
import { Footer, Header } from "../componets"

const ContactLayout = () => {
  return (
    <div className="font-pop">
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default ContactLayout