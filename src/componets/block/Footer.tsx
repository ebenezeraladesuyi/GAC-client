// import React from 'react'

import logo from "../../assets/images/logo/GAC-logo.png";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import mixlr from "../../assets/images/logo/mixlr.png";

const Footer = () => {
  return (
    <div className="w-full h-[60vh pt-[30px] bg- flex flex-col justify-center items-center font-pop shadow-md">
      <div className="w-[90%] flex flex-col md:flex-row gap-8 mb-[25px] md:mb-">

        <div className="flex flex-col gap-5 w-full md:w-[40%] ">
          <div className="w-[160px]">
            <img className="w-full" src={logo} alt="" />
          </div>

          {/* <h6 className="text-[12px] md:text-[15px] text-justify text-[#50519f]">
            Volatic Academy. We are a supportive and inclusive Academy, where every student is inspired to dream big, while challenging them and the status quo, equipping them with business skill, technology skills, leadership skills and life skills.
          </h6> */}

          <h5 className="text-[11px] lg:text-[14px] text-cente mb-[0px] flex flex-col text-[#50519f]">
            <span className="text-[#80c41c]">Address:</span>2nd Floor, Vita Foam Building, Adebayo, Ado-Ekiti.  <span className="text-[#80c41c]">Phone:</span> +234 (0) 703 775 0000 || +234 (0) 814 888 5333 <span className="text-[#80c41c]">Email:</span> graceaccesschurch@gmail.com
          </h5>

          <div className="flex flex-col gap-3 text-[11px] md:text-[14px] text-[#50519f]">
            <h6 className="cursor-pointr mb-[0px] text-[16px] md:text-[18px] font-bold md:mt-[20px] text-[#80c41c]">Service Schedule</h6>
            <h6 className="cursor-pointr">Sunday Service <span>8:30am</span></h6>
            <h6 className="cursor-pointr">Mid-Week Service (Wednesdays) <span>5:00pm</span></h6>
            {/* <h6 className="cursor-pointe">Product Engineering</h6>
            <h6 className="cursor-pointr">Product Strategy</h6>
            <h6 className="cursor-pointr">Creative Design</h6>
            <h6 className="cursor-pointr">Digital Marketing</h6>
            <h6 className="cursor-poiner">Professional Training</h6> */}
          </div>

          <div className="flex gap-3 items-center">
            <a href="" className="w-[30px] h-[30px] border-[1px] p-2 flex items-center justify-center bg-[#23a1db] text-white  rounded-full">
              <FaFacebookF />
            </a>
            <a href="" className="w-[30px] h-[30px] border-[1px] p-2 flex items-center justify-center  bg-[#23a1db] text-white rounded-full">
              <FaInstagram />
            </a>
            <a href="" className="w-[30px] h-[30px] border-[1px] p-2 flex items-center justify-center  bg-[#23a1db] text-white rounded-full">
              <img src={mixlr} />
            </a>
            <a href="" className="w-[30px] h-[30px] border-[1px] p-2 flex items-center justify-center bg-[#23a1db] text-white rounded-full">
              <MdAttachEmail />
            </a>
          </div>
        </div>

        {/* <div className="flex flex-col font-semibold gap-3 text-[13px] md:text-[15px] text-[#50519f] md:ml-[30px]">
          <h6 className="cursor-pointr mb-[0px] text-[16px] md:text-[18px] font-bold md:mt-[20px]">Service Schedule</h6>
          <h6 className="cursor-pointr">Sunday Service <span>8:30am</span></h6>
          <h6 className="cursor-pointr">Mid-Week Service (Wednesdays) <span>5:00pm</span></h6>
          {/* <h6 className="cursor-pointe">Product Engineering</h6>
          <h6 className="cursor-pointr">Product Strategy</h6>
          <h6 className="cursor-pointr">Creative Design</h6>
          <h6 className="cursor-pointr">Digital Marketing</h6>
          <h6 className="cursor-poiner">Professional Training</h6> */}
        {/* </div> */} 

      </div>

      <div className="bg-[#23a1db] py-5 w-full flex items-center justify-center">
        <h5 className="text-[12px] md:text-[15px] text-white mt-[30px w-[90%] text-center md:text-left">
          Copyright &#169; 2024 Grace Access Church
        </h5>
      </div>
    </div>
  )
}

export default Footer