// import React from 'react'

// import { NavLink } from "react-router-dom"
import RevealMap from "../../animation/RevealMap"
import React, { useState } from "react"
import { iSalvation } from "../../types/interface";
import axios from "axios";
import { toast } from "react-toastify";
import { url } from "../../utils/Api";
import { DatasIsaLoading } from "../isLoading/DataIsLoading";

const Beleieve = () => {

  const [show, setShow] = useState(false);

  const showForm = () => {
    setShow(!show)
  }
      
    const [formData, setFormData] = React.useState<iSalvation>({
      name: '',
      phoneNumber: '',
      email: '',
      prayer: ''
    });

    const [loading, setLoading] = React.useState(false);
    // const [error, setError] = React.useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      try {
        const response = await axios.post(`${url}/salvation/createsalvationmail`, formData);
        console.log('message sent successfully:', response.data);
        // Reset form data
        setFormData({
          name: '',
          phoneNumber: '',
          email: '',
          prayer: ''
        });
        // setError(null);
  
      //   for success notification
      toast.success('Message Sent Successfully')
  
      } catch (err) {
        console.error('Error sending message:', err);
        // setError('Failed to send mail. Please try again.');
  
      //   for error registration notification
      toast.error('Error Sending Message. Please, Try Again.')
  
      } finally {
        setLoading(false);
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

  return (
    <RevealMap>
      <div className="w-full min-h-[50vh] flex justify-center items-center bg-be bg-center bg-cover relative font-pop py-[30px]">
          <div className="w-[90%] flex flex-col md:flex-row justify-between items-center md:items-start gap-5">
              <div className="flex flex-col gap-3 text-center md:text-left w-full md:w-[60%]">
                <h1 className="text-center md:text-left text-[20px] md:text-[30px] lg:text-[35px] leading-[25px] md:leading-[40px] font-bold  lg:w-[90%]">
                    Ready to Begin A New Experience with Christ?
                </h1>

                <h2 className="text-[15px] lg:text-[17px]">Please, Say This Out Loud!</h2>

                <p className="text-[13px] lg:text-[15px]">
                  Lord Jesus, I come to you today confessing that I am a sinner. I believe that you died for my sin and you were raised for my justification; beacuse of what you did, my sins were paid for.
                </p>

                <p className="text-[13px] lg:text-[15px]">
                  Right Now, come into my heart, be my Lord and Saviour. wash me with your blood from my sins, write my name in the book of life. From now on, I confess that Jesus is the Lord of my life, and I receive the grace to follow him for the rest of my life, in Jesus Name. Amen.
                </p>

                <p className="text-[12px] lg:text-[14px] bg-[#000] p-1 py-3 rounded-[6px] text-white">
                  If you had said this Prayer, we welcome you to the family of our Lord Jesus. Please click the "Call To Salvation" button. We would love to have your name, email, phone number.
                </p>
              </div>

              <div className="flex flex-col gap-3 items-center">
                {/* <NavLink to="/becomeamember" > */}
                  <button onClick={showForm} className="p-2 px-3 md:px-5 md:py-2 lg:px-6 lg:py-4 bg-[#23a1db] text-white rounded-[20px] animate-pulse transition-all duration-700 ease-in-out outline-none border-none">Call To Salvation</button>
                {/* </NavLink> */}

                {show ?
                  <div className={`flex w-full flex-col gap-2 mt-[20px] transition-all duration-500 ease-in-out ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}`}>
                    <p className="text-center md:text-left">
                      Please, fill this form, and we will reach out to you.
                    </p>

                    <form onSubmit={handleSubmit} action="" className="flex flex-col gap-2">
                      <input type="text" className="w-full h-[45px] border-[#919090] border-[1px] rounded-md p-2 text-[13px] outline-none" placeholder="FullName" name="name" value={formData.name} onChange={handleChange} required />

                      <input type="email" className="w-full h-[45px] border-[#919090] border-[1px] rounded-md p-2 text-[13px] outline-none" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required />

                      <input type="number" className="w-full h-[45px] border-[#919090] border-[1px] rounded-md p-2 text-[13px] outline-none" placeholder="Phone Number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />

                      <textarea className="w-full h-[105px] border-[#919090] border-[1px] rounded-md p-2 text-[13px] outline-none" placeholder="Prayer Request" name="prayer" value={formData.prayer} onChange={handleChange} required />

                      {/* <button className="w-full h-[45px] bg-[#23a1db] border-[1px] rounded-md p-2 text-[13px] outline-none hover:bg-white hover:border-[1px] hover:border-[#23a1db] text-white hover:text-[#23a1db] transition-all duration-700 ease-in-out" type="submit">
                        {loading ? "Loading" : "Submit"}
                      </button> */}
                                
                      {loading ? (
                        <div className='w-full flex justify-center items-center'>
                            <DatasIsaLoading />
                        </div>
                                
                      ) : (
                      
                        <button type="submit" className="bg-[#00AFEF] hover:bg-[#50519f] text-white rounded-md font-bold">
                            Submit
                        </button>
                      )}

                      {/* {error && <p className='text-[6px]'>{error}</p>} */}
                    </form>
                  </div>
                :
                  null
                }
              </div>
          </div>
      </div>
    </RevealMap>
  )
}

export default Beleieve