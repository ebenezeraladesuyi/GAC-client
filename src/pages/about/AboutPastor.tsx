// import React from 'react'

import raa from "../../assets/images/sermons/RAA-3.png";

const AboutPastor = () => {
  return (
    <div className="w-full h-[100%] flex justify-center items-center bg-[#23a1db] py-[20px] mt-[20px]">
        <div className="w-[90%] text-white">
            <h6 className="text-[20px] font-bold text-center md:text-left mb-[20px]">Meet Our Lead Pastor</h6>

            <div className="w-full">
                <div className="w-full flex flex-col md:flex-row mb-[20px] gap-6">
                    <div className="w-full md:w-[30%] bg-white rounded-md ">
                        <img src={raa} className="w-full" alt="" />
                    </div>

                    <h6 className="text-[12px] text-justify md:text-[16px] md:w-[65%]"><span className="text-[17px] md:text-[22px] font-bold">Rev'd Ayo Awe</span>
                        <p className="mt-[10px] mb-[15px]">
                            Rev’d Ayo Awe is the Lead Pastor and Founder of Grace Access Church, with the mandate of bringing men into deep intimacy with the Father, living the totally good life God has ordained for His children. Married to Tolu Ayo-Awe, he is passionate about building a total man in Christ.
                        </p>

                        <p className="mb-[15px]">
                            Rev’d Ayo Awe is a practical teacher of God’s word. He believes in teaching kingdom realities in simplicity and passionate about soul winning. With numerous sermons to his credit, all of which are accessible for free on this website or on our telegram page, He has authored three books: Smart guys Smart ladies; Demystifying Generational Curses; and Embers of love.
                        </p>

                        <p>
                            Having served in the Redeemed Christian Church of God as a fulltime pastor for over a decade, the Lord would have Rev’d Ayo Awe found the Grace Access Church in April 24, 2021 in the city of Ado-Ekiti where the ministry is headquartered.
                        </p>
                    
                    </h6>
                </div>

                {/* <div className="w-full flex gap-6 flex-col md:flex-row ">
                    <div className="w-full md:w-[30%] bg-white rounded-md">
                        <img src={raa} className="w-full" alt="" />
                    </div>

                    <h6 className="text-[12px] text-justify md:text-[16px] md:w-[65%]"><span className="text-[17px] md:text-[22px] font-bold ">Rev'd Mrs. Tolu Ayo-Awe</span><br />Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam sed, laudantium aut cupiditate quidem consequatur id expedita dolores odio dignissimos voluptatum provident fuga tenetur atque temporibus voluptatem eum minima et quod blanditiis quo. Inventore minus ullam ducimus laborum. Inventore, ullam odio dignissimos cumque eaque quos facere quidem magnam debitis cupiditate.</h6>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default AboutPastor;