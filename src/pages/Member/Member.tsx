// import React from 'react'

const Member = () => {
  return (
    <div className="w-full h-[100vh] md:h-screen flex justify-center items-center border-b-[1px  bg-member-bg bg-center bg-cover lg:bg-none relative ">
        
        <div className="absolute lg:hidden h-full w-full bg-black top-0 left-0 opacity-30"></div>

        <div className="hidden h-full lg:block  bg-member-bg bg-center bg-cover w-[50%] bg-gray-300 relative">
            <div className="absolute h-full w-full bg-black top-0 left-0 opacity-30"></div>
        </div>

        <div className="w-[90%] h-full lg:w-[50%] flex justify-center items-center z-20">
            <div className="w-[90%]  md:w-[70%] lg:shadow-md lg:mt-[50px] md:p-6 rounded-md ">

                <div className="font-bold text-center mt-[0px] md:mt-0 text-white lg:text-[#23a1db] mb-[20px] ">Registration for <br /><span className="lg:text-[20px]">Grace Access Membership Class (GAMA)</span></div>

                <form action="" className="w-full flex flex-col gap-4">
                    <input className="w-full h-[40px] border-[1px] border-[#23a1db] rounded-md p-2 text-[12px] outline-none" type="text" placeholder="Name" />
                    <input className="w-full h-[40px] border-[1px] border-[#23a1db] rounded-md p-2 outline-none text-[12px]"  type="text" placeholder="Phone Number" />
                    <input className="w-full h-[40px] border-[1px] border-[#23a1db] rounded-md outline-none p-2 text-[12px]"  type="email" placeholder="E-mail" />
                    <textarea className="w-full p-2 h-[100px] border-[1px] border-[#23a1db] rounded-md outline-none text-[12px]" placeholder="Why do you want to take the Membership Class?" />

                    <button className="w-full h-[40px] text-[12px] text-white bg-[#23a1db] rounded-md outline-none ">Submit</button>
                </form>

            </div>
        </div>
    </div>
  )
}

export default Member