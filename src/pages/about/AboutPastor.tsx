// import React from 'react'

import raa from "../../assets/images/sermons/RAA-3.png";

const AboutPastor = () => {
  return (
    <div className="w-full h-[100%] flex justify-center items-center bg-[#23a1db] py-[20px] mt-[20px]">
        <div className="w-[90%] text-white">
            <h6 className="text-[20px] font-bold text-center md:text-left mb-[20px]">Meet Our Lead Pastors</h6>

            <div className="w-full">
                <div className="w-full flex flex-col md:flex-row mb-[20px] gap-6">
                    <div className="w-full md:w-[30%] bg-white rounded-md ">
                        <img src={raa} className="w-full" alt="" />
                    </div>

                    <h6 className="text-[12px] text-justify md:text-[16px] md:w-[65%]"><span className="text-[17px] md:text-[22px] font-bold">Rev'd Ayo-Awe</span><br />Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam sed, laudantium aut cupiditate quidem consequatur id expedita dolores odio dignissimos voluptatum provident fuga tenetur atque temporibus voluptatem eum minima et quod blanditiis quo. Inventore minus ullam ducimus laborum. Inventore, ullam odio dignissimos cumque eaque quos facere quidem magnam debitis cupiditate.</h6>
                </div>

                <div className="w-full flex gap-6 flex-col md:flex-row ">
                    <div className="w-full md:w-[30%] bg-white rounded-md">
                        <img src={raa} className="w-full" alt="" />
                    </div>

                    <h6 className="text-[12px] text-justify md:text-[16px] md:w-[65%]"><span className="text-[17px] md:text-[22px] font-bold ">Rev'd Mrs. Tolu Ayo-Awe</span><br />Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam sed, laudantium aut cupiditate quidem consequatur id expedita dolores odio dignissimos voluptatum provident fuga tenetur atque temporibus voluptatem eum minima et quod blanditiis quo. Inventore minus ullam ducimus laborum. Inventore, ullam odio dignissimos cumque eaque quos facere quidem magnam debitis cupiditate.</h6>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutPastor;