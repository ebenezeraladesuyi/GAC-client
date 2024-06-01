// import React from 'react'

import phone from "../../assets/images/sermons/lady4.png";
import { FaMusic } from "react-icons/fa";
import { LuDownloadCloud } from "react-icons/lu";

const Sermons = () => {
  return (
    <div className="w-full py-[30px] lg:h-[74vh] bg-lad bg-center bg-cover bg-black flex flex-col items-center font-pop">

        <h6 className="lg:hidden text-white w-[70%]  text-center  font-bold text-[20px] md:text-[25px]">DOWNLOAD & LISTEN TO OUR MESSAGES</h6>


        <div className="w-[90%] flex flex-col lg:flex-row justify-between">

            <div className="w-full lg:w-[50%">
                <img src={phone} className="w-ful" alt="" />
            </div>

            <div className=" w-full lg:w-[65%] text-white">
                <h6 className="hidden lg:block text-[28px] leading-[35px] font-bold">DOWNLOAD & LISTEN TO OUR MESSAGES</h6>

                <div className=" mt-[30px]">

                    <div className="w-full flex justify-between items-center border-[#848282fe] border-[1px]">
                        <div className="w-[10%] flex justify-center bg-[#4c4b4bfe] font-bold bg- py-3">
                            <FaMusic />
                        </div>

                        <h6 className="w-[80%] border-[1px border-white flex justify-center py-3  md:py-2 text-white bg-[#063e60] text-[12px] md:text-[16px] overflow-x-scrol md:">
                            Who is Your Guy? -- Rev'd Ayo Awe
                        </h6>

                        <div className="w-[10%] border-[1px border-white flex justify-center py-3 bg-[#4c4b4bfe]">
                            <LuDownloadCloud />
                        </div>
                    </div>

                    <div className="w-full flex justify-between items-center border-[#848282fe] border-[1px]">
                        <div className="w-[10%] flex justify-center bg-[#4c4b4bfe] font-bold bg- py-3">
                            <FaMusic />
                        </div>

                        <h6 className="w-[80%] border-[1px border-white flex justify-center py-3 md:py-2 text-white bg-[#063e60] overflow-x-scrol text-[12px] md:text-[16px] ">
                            Who is Your Guy? -- Rev'd Ayo Awe
                        </h6>

                        <div className="w-[10%] border-[1px border-white flex justify-center py-3 bg-[#4c4b4bfe]">
                            <LuDownloadCloud />
                        </div>
                    </div>

                    <div className="w-full flex justify-between items-center border-[#848282fe] border-[1px] overflow-x-visible text-[12px] md:text-[16px]">
                        <div className="w-[10%] flex justify-center bg-[#4c4b4bfe] font-bold bg- py-3">
                            <FaMusic />
                        </div>

                        <h6 className="w-[80%] border-[1px border-white flex justify-center py-3 md:py-2 text-white bg-[#063e60] overflow-hidden">
                            Who is Your Guy? -- Rev'd Ayo Awe
                        </h6>

                        <div className="w-[10%] border-[1px border-white flex justify-center py-3 bg-[#4c4b4bfe]">
                            <LuDownloadCloud />
                        </div>
                    </div>

                    <div className="w-full flex justify-between items-center border-[#848282fe] border-[1px]">
                        <div className="w-[10%] flex justify-center bg-[#4c4b4bfe] font-bold bg- py-3">
                            <FaMusic />
                        </div>

                        <h6 className="w-[80%] border-[1px border-white flex justify-center py-3 md:py-2 text-white bg-[#063e60] text-[12px] md:text-[16px] overflow-x-scrol">
                            Who is Your Guy? -- Rev'd Ayo Awe
                        </h6>

                        <div className="w-[10%] border-[1px border-white flex justify-center py-3 bg-[#4c4b4bfe]">
                            <LuDownloadCloud />
                        </div>
                    </div>

                    <div className="w-full flex justify-between items-center border-[#848282fe] border-[1px]">
                        <div className="w-[10%] flex justify-center bg-[#4c4b4bfe] font-bold bg- py-3">
                            <FaMusic />
                        </div>

                        <h6 className="w-[80%] border-[1px border-white flex justify-center py-3 md:py-2 text-white bg-[#063e60] text-[12px] md:text-[16px] overflow-x-scrol">
                            Who is Your Guy? -- Rev'd Ayo Awe
                        </h6>

                        <div className="w-[10%] border-[1px border-white flex justify-center py-3 bg-[#4c4b4bfe]">
                            <LuDownloadCloud />
                        </div>
                    </div>

                    <div className="w-full flex justify-between items-center border-[#848282fe] border-[1px]">
                        <div className="w-[10%] flex justify-center bg-[#4c4b4bfe] font-bold bg- py-3">
                            <FaMusic />
                        </div>

                        <h6 className="w-[80%] border-[1px border-white flex justify-center py-3 md:py-2 text-white bg-[#063e60] text-[12px] md:text-[16px] overflow-x-scrol">
                            Who is Your Guy? -- Rev'd Ayo Awe
                        </h6>

                        <div className="w-[10%] border-[1px border-white flex justify-center py-3 bg-[#4c4b4bfe]">
                            <LuDownloadCloud />
                        </div>
                    </div>

                    {/* <div className="w-full flex justify-between items-center border-white border-[1px]">
                        <div className="w-[10%] flex justify-center bg-[#4c4b4bfe] font-bold bg- py-3">
                            <FaMusic />
                        </div>

                        <h6 className="w-[80%] border-[1px border-white flex justify-center py-2 text-white bg-[#063e60]">
                            Who is Your Guy? -- Rev'd Ayo Awe
                        </h6>

                        <div className="w-[10%] border-[1px border-white flex justify-center py-3 bg-[#4c4b4bfe]">
                            <LuDownloadCloud />
                        </div>
                    </div> */}

                </div>
            </div>

        </div>
    </div>
  )
}

export default Sermons;