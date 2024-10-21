// import React from 'react'

import { NavLink } from "react-router-dom"
import RevealMap from "../../animation/RevealMap"

const Beleieve = () => {
  return (
    <RevealMap>
      <div className="w-full min-h-[50vh] flex justify-center items-center bg-be bg-center bg-cover relative font-pop py-[30px]">
          <div className="w-[90%] flex flex-col md:flex-row justify-between items-center gap-5">
              <div className="flex flex-col gap-3 text-center md:text-left w-full md:w-[60%]">
                <h1 className="text-center md:text-left text-[20px] md:text-[30px] lg:text-[35px] leading-[25px] md:leading-[40px] font-bold  lg:w-[90%]">
                    Ready to Begin A New Experience with Christ?
                </h1>

                <h2 className="text-[15px] lg:text-[17px]">Please, Say This Out Loud!</h2>

                <p className="text-[13px] lg:text-[15px]">
                  Lord Jesus, I come to you today confessing that I am a sinner. I believe that you died for my sin and you were raised fro my justification; beacuse of what you did, my sins were paid for.
                </p>

                <p className="text-[13px] lg:text-[15px]">
                  Right Now, come into my heart, be my Lord and Saviour. wash me with your blood from my sins, write my name in the book of life. From now on, I confess that Jesus is the Lord of my life, and I receive the grace to follow him for the rest of my life, in Jesus Name. Amen.
                </p>

                <p className="text-[12px] lg:text-[14px] bg-[#000] p-1 py-3 rounded-[6px] text-white">
                  If you had said this Prayer, you welcome you to the family of our Lord Jesus. Please click the "Call To Salvation" button. We would love to have you name, email, phone number.
                </p>
              </div>

              <NavLink to="/becomeamember"><a href="" className="p-2 px-5 md:px-7 md:py-4 lg:px-9 lg:py-6 bg-[#23a1db] text-white rounded-[20px] animate-pulse">Call To Salvation</a></NavLink>
          </div>
      </div>
    </RevealMap>
  )
}

export default Beleieve