import React from 'react'

import conImg from "../../assets/images/contact/contact.png";
import axios from 'axios';
import { url } from '../../utils/Api';
import { DatasIsaLoading } from '../isLoading/DataIsLoading';
import { iContact } from '../../types/interface';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaFacebookF, FaInstagram, FaTelegram } from "react-icons/fa";
// import mixlr from "../../assets/images/logo/mixlr.png";
import { FiYoutube } from 'react-icons/fi';


const Contact = () => {
    
  const [formData, setFormData] = React.useState<iContact>({
    reason: '',
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleSubmit2 = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${url}/contact/createcontactmail`, formData);
      console.log('message sent successfully:', response.data);
      // Reset form data
      setFormData({
        reason: '',
        name: '',
        email: '',
        message: ''
      });
      setError(null);

    //   for success notification
    toast.success('Message Sent Successfully')

    } catch (err) {
      console.error('Error sending message:', err);
      setError('Failed to send mail. Please try again.');

    //   for error registration notification
    toast.error('Error Sending Message. Please, Try Again.')

    } finally {
      setLoading(false);
    }
  };

    
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  

  return (
    <div id="" className="w-full md:h-[100vh] flex flex-col justify-center items-center font-mont py-[30px] bg-white relative overflow-hidden">
      <div className="w-[90%] z-10 flex flex-col md:flex-row justify-center md:justify-between items-center md:mt-[50px] lg:mt-[70px] gap-5 mt-[50px]">

        <div className="hidden md:block w-full md:w-[60%]">
          <img className="w-full" src={conImg} alt="" />
        </div>

        <div className='md:hidden w-full p-6 rounded-md bg-[#2a2828] text-white'>
          <h2 className='font-bold text-center mb-[25px]'>OUR SOCIALS</h2>
          
          <div className='flex flex-col gap-2 items-center'>
            <div className='flex gap-3'>
              <div className='w-[30px] h-[30px] bg-[#00AFEF]  rounded-full flex justify-center items-center'><FaFacebookF /></div>
              
              <div className='w-[30px] h-[30px] bg-[#00AFEF]  rounded-full flex justify-center items-center'><FaInstagram /></div>

              <div className='w-[30px] h-[30px] bg-[#00AFEF]  rounded-full flex justify-center items-center'><FaTelegram /></div>

              <div className='w-[30px] h-[30px] bg-[#00AFEF]  rounded-full flex justify-center items-center'>
                {/* <img className='w-[60%]' src={mixlr} alt="" />*/}
                <FiYoutube />
              </div>
            </div>
            
            <span className='font-bold'>@graceaccesschurch</span>
          </div>
        </div>

        <form onSubmit={handleSubmit2} className="w-full md:w-[38%] flex flex-col gap-4">

          <h5 className="text-[18px] font-bold md:text-[22px] lg:text-[27px] text-[#00AFEF] animate-bounce text-center md:text-left">CONTACT US</h5>

          <select className="w-full h-[43px] px-3 rounded-md outline-none text-[12px] lg:text-[15px] border-[1px] border-[#00AFEF]  bg-[#ffffff] text-[#000000]"
          name="reason" value={formData.reason} onChange={handleChange}
          >
            <option value="">-- Select --</option>
            <option value="Testimony">Testimony</option>
            <option value="Prayer Request">Prayer Request</option>
          </select>

          <input className="w-full h-[43px] px-3 rounded-md outline-none text-[12px] lg:text-[15px] border-[1px] border-[#00AFEF] bg-[#ffffff] text-[#000000]" type="text" id="" placeholder="Name"
          name="name" value={formData.name} onChange={handleChange}
          />

          <input className="w-full h-[43px] px-3 rounded-md outline-none text-[12px] lg:text-[15px] border-[1px] border-[#00AFEF] bg-[#ffffff] text-[#000000]" type="email" id="" placeholder="Email" 
          name="email" value={formData.email} onChange={handleChange}
          />

          <textarea className="w-full h-[130px] py-3 px-3 text-[12px] md:text-[15px] rounded-md border-[1px] border-[#00AFEF] bg-[#ffffff] text-[#000000]" id="" placeholder="Enter your message" 
          name="message" value={formData.message} onChange={handleChange}
          />

          {loading ? (
            <div className='w-full flex justify-center items-center'>
              <DatasIsaLoading />
            </div>
          
          ) : (

          <button type="submit" className="bg-[#00AFEF] hover:bg-[#50519f] text-white rounded-md font-bold">
              Submit
          </button>
          )}
                    
          {error && <p className='text-[6px]'>{error}</p>}

        </form>

      </div>
    </div>
  )
}

export default Contact