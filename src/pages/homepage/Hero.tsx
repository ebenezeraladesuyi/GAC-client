// import React from 'react'

import { motion } from "framer-motion";
import { FaFacebookSquare, FaTelegram } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import mixlr from "../../assets/images/logo/mixlr.png";


const Hero = () => {
  return (
    <motion.div className="w-full h-screen flex justify-center items-center bg-mobile-bg md:bg-hero-bg bg-center bg-cover relative font-pop"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    >

        <div className="absolute bg-black w-full h-full opacity-20 "></div>

        <div className="w-[90%] z-30 flex flex-col items-center md:items-start gap-5 mt-[100px] ">

            <motion.h5 className='text-[17px] text-center md:text-left tracking-[7px] md:text-[16px] font-bold lg:text-[22px] md:tracking-[9px] text-[#23a1db] bg-white w-[250px] lg:w-[300px] p-1 rounded-[20px] flex justify-center items-center'
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                WELCOME TO
            </motion.h5>

            <div className="text-white text-[40px] md:text-[60px] lg:text-[70px] font-bold flex flex-col md:flex-ro gap-2 md:gap-6 lg:gap-8 leading-[45px] text-center md:text-left mt-[px]">
                <div className="flex flex-col md:flex-row items-center gap-2">
                    <motion.h5 className="" 
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >GRACE</motion.h5>

                    <motion.h5 className=""
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                    >ACCESS</motion.h5>
                </div>

                    <motion.h5 className="md:hidde"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.4 }}
                    >CHURCH</motion.h5>

                    {/* <p>
                        <motion.h5 className="hidden md:block"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.4 }}
                        >CHURCH</motion.h5>
                    </p> */}
            </div>

            <motion.h6 className="text-white font-bold text-[16px] md:text-[20px]"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.7 }}
            >
                ...helped by GOD
            </motion.h6>

            <motion.button className="w-[150px] md:w-[200px] py-3 bg-[#23a1db] text-white rounded-lg text-[15px] md:text-[18px] animate-pulse"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.9 }}
            >
                About Us
            </motion.button>

            <div className="flex gap-3 items-center">
                <motion.a href="" className="text-white text-[20px] md:text-[30px]"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.2 }}
            >
                    <FaSquareInstagram />
                </motion.a>
                <motion.a href="" className="text-white text-[20px] md:text-[30px]"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.5 }}
            >
                    <FaFacebookSquare />
                </motion.a>
                <motion.a href="" className="text-white text-[20px] md:text-[30px]"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.8 }}
            >
                    <FaTelegram />
                </motion.a>
                <motion.a href="" className="text-white w-[19px] md:w-[27px]"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 3.1 }}
            >
                    <img src={mixlr} />
                </motion.a>
            </div>

        </div>
    </motion.div>
  )
}

export default Hero