// import React from 'react'

import conImg from "../../assets/images/contact/contact.png";

const Contact = () => {
  return (
    <div id="" className="w-full md:h-[100vh] flex flex-col justify-center items-center font-mont py-[30px] bg-white relative overflow-hidden">
      <div className="w-[90%] z-10 flex flex-col md:flex-row justify-center md:justify-between items-center md:mt-[50px] lg:mt-[70px] gap-5 mt-[50px]">

        <div className="hidden md:block w-full md:w-[60%]">
          <img className="w-full" src={conImg} alt="" />
        </div>

        <form action="" className="w-full md:w-[38%] flex flex-col gap-4">

          <h5 className="text-[18px] font-bold md:text-[22px] lg:text-[27px] text-[#00AFEF] animate-bounce text-center md:text-left">CONTACT US</h5>

          <select className="w-full h-[43px] px-3 rounded-md outline-none text-[12px] lg:text-[15px] border-[1px] border-[#00AFEF]">
            <option value="Testimony">Testimony</option>
            <option value="Prayer Request">Prayer Request</option>
          </select>

          <input className="w-full h-[43px] px-3 rounded-md outline-none text-[12px] lg:text-[15px] border-[1px] border-[#00AFEF]" type="text" name="" id="" placeholder="Name" />

          <input className="w-full h-[43px] px-3 rounded-md outline-none text-[12px] lg:text-[15px] border-[1px] border-[#00AFEF]" type="email" name="" id="" placeholder="Email" />

          <textarea className="w-full h-[130px] py-3 px-3 text-[12px] md:text-[15px] rounded-md border-[1px] border-[#00AFEF]" name="" id="" placeholder="Enter your message" />

          <button type="submit" className="bg-[#00AFEF] hover:bg-[#50519f] text-white rounded-md font-bold">
              Submit
          </button>

        </form>

      </div>
    </div>
  )
}

export default Contact