/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import React from 'react'
import { url } from '../../utils/Api';
import { DatasIsaLoading } from '../isLoading/DataIsLoading';
import { iMember } from '../../types/interface';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';



const Member = () => {

    const navigate = useNavigate();
    
  const [formData, setFormData] = React.useState<iMember>({
    name: '',
    phoneNumber: '',
    email: '',
    why: ''
  });
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
          const response = await axios.post(`${url}/member/memberregister`, formData);
          console.log('Member created successfully:', response.data);
          // Reset form data
          setFormData({
            name: '',
            phoneNumber: '',
            email: '',
            why: ''
          });
          setError(null);

        //   for success notification
        toast.success('Registration Successfull')

        // navigate to homepage
        navigate("/")

        } catch (err) {
          console.error('Error creating member:', err);
          setError('Failed to create member. Please try again.');

        //   for error registration notification
        toast.error('Error while registering. Please, try again.')

        } finally {
          setLoading(false);
        }
      };
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

  return (
    <div className="w-full h-[100vh] md:h-screen flex justify-center items-center border-b-[1px  bg-member-bg bg-center bg-cover lg:bg-none relative font-pop">
        
        <div className="absolute lg:hidden h-full w-full bg-black top-0 left-0 opacity-30"></div>

        <div className="hidden h-full lg:block  bg-member-bg bg-center bg-cover w-[50%] bg-gray-300 relative">
            <div className="absolute h-full w-full bg-black top-0 left-0 opacity-30"></div>
        </div>

        <div className="w-[90%] h-full lg:w-[50%] flex justify-center items-center z-20">
            <div className="w-[90%]  md:w-[70%] lg:shadow-md lg:mt-[50px] md:p-6 rounded-md ">

                <div className="font-bold text-center mt-[0px] md:mt-0 text-white lg:text-[#23a1db] mb-[20px] ">Registration for <br /><span className="lg:text-[20px]">Grace Access Membership Class (GAMA)</span></div>

                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
                    <input className="w-full h-[40px] lg:border-[1px] border-[#23a1db] rounded-md p-2 text-[12px] outline-none" type="text" placeholder="Name" 
                        //  onChange={(e) => setName(e.target.value)}
                        name="name" value={formData.name} onChange={handleChange} required
                    />
                    <input className="w-full h-[40px] lg:border-[1px] border-[#23a1db] rounded-md p-2 outline-none text-[12px]"  type="text" placeholder="Phone Number" 
                    // onChange={(e) => setPhoneNumber(e.target.value)}
                    name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required
                    />
                    <input className="w-full h-[40px] lg:border-[1px] border-[#23a1db] rounded-md outline-none p-2 text-[12px]"  type="email" placeholder="E-mail" 
                    // onChange={(e) => setEmail(e.target.value)}
                    name="email"  value={formData.email} onChange={handleChange} required
                    />
                    <textarea className="w-full p-2 h-[100px] lg:border-[1px] border-[#23a1db] rounded-md outline-none text-[12px]" placeholder="Why do you want to take the Membership Class?" 
                    // onChange={(e) => setWhy(e.target.value)}
                    name="why" value={formData.why} onChange={handleChange} required
                    />

                    {loading ? (
                        <div className='w-full flex justify-center items-center'>
                        <DatasIsaLoading />
                        </div>
                    
                    ) : (
                        <button className="w-full h-[40px] text-[12px] text-white bg-[#23a1db] border-none rounded-md outline-none " type="submit">Submit</button>
                    )}
                    
                    {error && <p>{error}</p>}
                </form>

            </div>
        </div>
    </div>
  )
}

export default Member