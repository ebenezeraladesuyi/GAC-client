// import React from 'react'

import bank from "../../assets/images/pay/wema.png";

const PayAccount = () => {
  return (
    <div className="w-full flex justify-center items-center mt-[90px]">
        <div className="w-[90%] md:w-[60%] lg:w-[50%] flex flex-col gap-3">
            <h4 className="font-bold text-[20px] text-center">GIVE ONLINE</h4>

            <h5 className="font-bold text-[13px] md:text-[16px] text-center text-white bg-black p-1">Make a Direct Transfer</h5>

            <div className="w-full bg-[#000000 shadow-md p-4 flex flex-col md:flex-row gap-4">
                <img className="w-full md:w-[43%]" src={bank} alt="" />

                <div className="text-[20px] lg:text-[23px] flex flex-col items-center md:items-start bg-[#000000] p-[14px]">
                    {/* <h6 className="font-bold">FIRST BANK</h6> */}
                    <h6 className="font-bold text-[#d5d2d2] text-[18px] md:text-30px]">Naira (N) <br /><span className="text-[24px] text-[#ffffff]">0126808955</span></h6>

                    <hr className="w-full border-[2px] my-[4px]" />

                    <h6 className="font-bold text-[#d5d2d2] text-[18px] md:text-30px]">Naira ($) <br /><span className="text-[24px] text-[#ffffff]">0622056117</span></h6>

                    <hr className="w-full border-[2px] my-[4px]" />
                    
                    <h6 className="font-bold text-[#d5d2d2] text-[18px] md:text-30px]">Pounds (#) <br /><span className="text-[24px] text-[#ffffff]">0622056100</span></h6>

                    <hr className="w-full border-[2px] my-[4px]" />

                    <h6 className="text-center md:text-left">GRACE ACCESS CHURCH</h6>
                </div>
            </div>

            <h4 className="text-[13px] md:text-[16px] mt-[40px] font-bold text-center text-white bg-black p-1 mb-[0px]">OR MAKE AN ONLINE TRANSACTION (Card, USSD etc.)
                {/* <br /><span className="text-[#23a1db] text-[11px]">coming soon!</span> */}
            </h4>
        </div>
    </div>
  )
}

export default PayAccount