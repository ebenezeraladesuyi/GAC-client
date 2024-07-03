// import React from 'react'

import bank from "../../assets/images/pay/firstBank.png";

const PayAccount = () => {
  return (
    <div className="w-full flex justify-center items-center mt-[90px]">
        <div className="w-[90%] md:w-[60%] lg:w-[50%] flex flex-col gap-3">
            <h4 className="font-bold text-[20px] text-center">GIVE ONLINE</h4>

            <h5 className="font-bold text-[13px] md:text-[16px] text-center text-white bg-black p-1">Make a Direct Transfer</h5>

            <div className="w-full bg-white shadow-md p-4 flex flex-col md:flex-row gap-4">
                <img className="w-full md:w-[35%]" src={bank} alt="" />

                <div className="text-[20px] lg:text-[23px] flex flex-col items-center md:items-start">
                    <h6 className="font-bold">FIRST BANK</h6>
                    <h6 className="font-bold text-[24px] md:text-30px]">2038405981</h6>
                    <h6 className="text-center md:text-left">GRACE ACCESS CHURCH</h6>
                </div>
            </div>

            <h4 className="text-[13px] md:text-[16px] mt-[40px] font-bold text-center text-white bg-black p-1 mb-[0px]">OR MAKE AN ONLINE TRANSACTION (card, ussd etc.)
                <br /><span className="text-[#23a1db] text-[11px]">coming soon!</span>
            </h4>
        </div>
    </div>
  )
}

export default PayAccount