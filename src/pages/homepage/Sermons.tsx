/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from 'react'

import phone from "../../assets/images/sermons/iPhone-2.png";
import { FaMusic } from "react-icons/fa";
import { LuDownloadCloud } from "react-icons/lu";
import { iAudio } from "../../types/interface";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../utils/Api";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { DatasIsaLoading } from "../isLoading/DataIsLoading";
import { toast } from "react-toastify";



const Sermons = () => {

    const [audio, setAudio] = useState<iAudio[]>([]);
    const [loading, setLoading] = useState(false);

    // get all audios
    useEffect(() => {
        async function fetchAudios() {
            setLoading(true)
            try {
                const response = await axios.get(`${url}/audio/allaudios`);
                setAudio(response.data.data);

                console.log(response.data)

                setLoading(false)
            } catch (error) {
                console.error("Error getting audios:", error);

                setLoading(false)
            }
        }
        fetchAudios();
    }, []);

    // download one audio
    const downloadAudio = async (audioId: string, title: string, author: string) => {
        try {
            toast.success("Downloading...")

            const response = await axios.get(`${url}/audio/getoneaudio/${audioId}`, {
                responseType: 'blob',
            });
            const audioData = response.data;
            const filenameHeader = response.headers['content-disposition'];
            let filename = `${title} - ${author}.mp3`; // Default filename
    
            if (filenameHeader) {
                const filenameMatch = filenameHeader.match(/filename="(.+)"/);
                if (filenameMatch) {
                    filename = filenameMatch[1];
                }
            }
    
            const blob = new Blob([audioData], { type: 'audio/mpeg' });
            const urll = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = urll;
            link.download = filename;
            link.click();

            toast.success("Downloaded successfully")

        } catch (error) {
            console.error('Error downloading audio:', error);
            toast.error("Error while downloading. Please, try again")

        }
    };

  return (
    <div className="w-full py-[30px] lg:h-[74vh bg-lad bg-center bg-cover bg-black flex flex-col items-center font-pop">

        <h6 className="lg:hidden text-white w-[70%]  text-center  font-bold text-[20px] md:text-[25px]">DOWNLOAD & LISTEN TO OUR MESSAGES</h6>


        <div className="w-[90%] flex flex-col lg:flex-row justify-between">

            <div className="w-full lg:w-[50%">
                <img src={phone} className="w-ful" alt="" />
            </div>

            <div className=" w-full lg:w-[65%] text-white">
                <h6 className="hidden lg:block text-[28px] leading-[35px] font-bold">DOWNLOAD & LISTEN TO OUR MESSAGES</h6>

                <div className=" mt-[30px]">
                    { loading ? 
                        (<div>
                            <DatasIsaLoading />
                        </div>)
                    :
                        <>
                            {audio && audio.slice(0, 5).map((aud) => (
                            <div key={aud?._id} className="w-full flex justify-between items-center border-[#848282fe] border-[1px] py- h-[60px]">
                                <div className="w-[10%] flex justify-center bg-[#4c4b4bfe] h-full font-bold bg- py-3 items-center">
                                    <FaMusic />
                                </div>

                                <h6 className="w-[80%] border-[1px border-white flex justify-center items-center h-full py-3 px-1 md:py-2 text-white bg-[#063e60] text-[10px] md:text-[13px] overflow-x-scrol md:">
                                    {aud?.title} -- {aud?.author}
                                </h6>

                                
                                <div className="w-[10%] border-[1px border-white flex justify-center items-center h-full py-3 bg-[#4c4b4bfe] cursor-pointer hover:bg-[#00AFEF]" onClick={() => downloadAudio(aud?._id, aud?.title, aud?.author)}>
                                    <LuDownloadCloud />
                                </div>
                                
                            </div>
                            ))}
                        </>
                    }

                    <NavLink to='/sermons'>
                        <button className="p-2 border-none bg-transparent text-white text-[13px] md:text-[15px] font-bold flex items-center gap-2 animate-bounce outline-none mt-[20px] hover:text-[#c5c3c3]">
                            See Older Messages
                            <span><FaArrowRightLong /></span>
                        </button>
                    </NavLink>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Sermons;