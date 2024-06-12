// import React from 'react'

import { NavLink } from "react-router-dom"

const Beleieve = () => {
  return (
    <div className="w-full h-[50vh] flex justify-center items-center bg-be bg-center bg-cover relative font-pop">
        <div className="w-[90%] flex flex-col md:flex-row justify-between items-center gap-5">
            <h6 className="text-center md:text-left text-[30px] md:text-[40px] lg:text-[45px] leading-[35px] md:leading-[50px] font-bold md:w-[60%] lg:w-[50%]">
                Ready to Begin A New Experience with Christ?
            </h6>

            <NavLink to="/becomeamember"><a href="" className="p-2 px-5 bg-[#23a1db] text-white rounded-[20px] animate-pulse">Become A Believer</a></NavLink>
        </div>
    </div>
  )
}

export default Beleieve