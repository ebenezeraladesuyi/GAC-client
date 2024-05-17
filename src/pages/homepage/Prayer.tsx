// import React from 'react'

import PrayerCard from "../../componets/static/PrayerCard"

const Prayer = () => {
  return (
    <div className="w-full h-scree py-[30px] flex justify-center items-center font-pop">
        <div className="w-[90%] flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="w-[300px] md:w-[32%] h-[400px] bg-prayer3  bg-center bg-cover shadow-md relative rounded-md flex flex-col justify-between">

                <div className="absolute h-full w-full bg-gradient-to-t from-black from-10% via-[#1515159f] via-20% to-transparent to-70%"></div>

                <div className="text-[#1515157e]"></div>

                <div className="mb-[20px]">
                    <PrayerCard 
                        content="Share your Testimony with us"
                        buttonContent="Share With Us"
                    />
                </div>

            </div>

            <div className="w-[300px] md:w-[32%] h-[400px] bg-prayer2  bg-center bg-cover shadow-md relative rounded-md flex flex-col justify-between">

                <div className="absolute h-full w-full bg-gradient-to-t from-black from-10% via-[#1515159f] via-20% to-transparent to-70%"></div>

                <div className="text-[#1515157e]"></div>

                <div className="mb-[20px]">
                    <PrayerCard 
                        content="Want to send a Prayer Request?"
                        buttonContent="Send Prayer Request"
                    />
                </div>

            </div>

            <div className="w-[300px] md:w-[32%] h-[400px] bg-prayer4  bg-center bg-cover shadow-md relative rounded-md flex flex-col justify-between">

                <div className="absolute h-full w-full bg-gradient-to-t from-black from-10% via-[#1515159f] via-20% to-transparent to-70%"></div>

                <div className="text-[#1515157e]"></div>

                <div className="mb-[20px]">
                    <PrayerCard 
                        content="Join Grace Access Membership Class (GAMA)"
                        buttonContent="Start Here"
                    />
                </div>

            </div>
        </div>
    </div>
  )
}

export default Prayer