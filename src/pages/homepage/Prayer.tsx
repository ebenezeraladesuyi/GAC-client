// import React from 'react'

import { NavLink } from "react-router-dom"
import PrayerCard from "../../componets/static/PrayerCard"
import RevealMap from "../../animation/RevealMap"

const Prayer = () => {
  return (
    // <RevealMap>
        <div className="w-full h-scree py-[30px] flex justify-center items-center font-pop">
            <div className="w-[90%] flex flex-col md:flex-row justify-between items-center gap-4">

                <RevealMap className="w-[300px] md:w-[32%]">
                    <div className="w-[300px md:w-[32% h-[400px] bg-prayer7  bg-center bg-cover shadow-md relative rounded-md flex flex-col justify-between">

                        <div className="absolute h-full w-full bg-gradient-to-t from-black from-10% via-[#1515159f] via-20% to-transparent to-70%"></div>

                        <div className="text-[#1515157e]"></div>

                        <NavLink to="/contact">
                            <div className="mb-[20px]">
                                <PrayerCard 
                                    content="Share your Testimony with us"
                                    buttonContent="Share With Us"
                                />
                            </div>
                        </NavLink>

                    </div>
                </RevealMap>

                <RevealMap className="w-[300px] md:w-[32%]">
                    <div className="w-[300px md:w-[32% h-[400px] bg-prayer6  bg-center bg-cover shadow-md relative rounded-md flex flex-col justify-between">

                        <div className="absolute h-full w-full bg-gradient-to-t from-black from-10% via-[#1515159f] via-20% to-transparent to-70%"></div>

                        <div className="text-[#1515157e]"></div>

                        <NavLink to="/contact">
                            <div className="mb-[20px]">
                                <PrayerCard 
                                    content="Want to send a Prayer Request?"
                                    buttonContent="Send Prayer Request"
                                />
                            </div>
                        </NavLink>

                    </div>
                </RevealMap>

                <RevealMap className="w-[300px] md:w-[32%]">
                    <div className="w-[300px md:w-[32% h-[400px] bg-prayer5  bg-center bg-cover shadow-md relative rounded-md flex flex-col justify-between">

                        <div className="absolute h-full w-full bg-gradient-to-t from-black from-10% via-[#1515159f] via-20% to-transparent to-70%"></div>

                        <div className="text-[#1515157e]"></div>

                        <NavLink to="/becomeamember">
                            <div className="mb-[20px]">
                                <PrayerCard 
                                    content="Want To Be A Member?"
                                    buttonContent="Start Here"
                                />
                            </div>
                        </NavLink>

                    </div>
                </RevealMap>
            </div>
        </div>
    // </RevealMap>
  )
}

export default Prayer