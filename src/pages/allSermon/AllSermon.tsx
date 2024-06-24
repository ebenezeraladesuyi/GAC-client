// import React from 'react'

import { IoCloudDownloadOutline } from "react-icons/io5"
// import { FaPlay, FaPause } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosPerson } from "react-icons/io";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../utils/Api";
import { iAudio } from "../../types/interface";
import { FaMusic } from "react-icons/fa";
import { LuDownloadCloud } from "react-icons/lu";
import { DatasIsaLoading } from "../isLoading/DataIsLoading";
// import { AiFillAudio } from "react-icons/ai";
import { PiFileAudio } from "react-icons/pi";


const AllSermon = () => {

    const [audio, setAudio] = useState<iAudio[]>([]);
    const [loading, setLoading] = useState(false);
    // const [currentAudio, setCurrentAudio] = useState<iAudio | null>(null);
    // const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);
    // const [isPlaying, setIsPlaying] = useState(false);

    // get all audios
    useEffect(() => {
        async function fetchAudios() {
            setLoading(true)
            try {
                const response = await axios.get(`${url}/audio/allaudios`);
                setAudio(response.data.data);
            } catch (error) {
                console.error("Error getting audios:", error);
            }
            
        setLoading(false)
        }
        fetchAudios();
    }, []);

    
    // function to set current audio and load audio element
    // const selectAudio = (aud: iAudio) => {
    //     setCurrentAudio(aud);

    //     if (audioElement) {
    //         audioElement.pause();
    //         setIsPlaying(false);
    //     }

    //     const newAudioElement = new Audio(`${url}/audio/getoneaudio/${aud._id}`);
    //     setAudioElement(newAudioElement)
    // }

    // function for audio playback
    // const handlePlayPause = () => {
    //     if (!audioElement || !currentAudio) return;

    //     if(isPlaying) {
    //         audioElement.pause();
    //         setIsPlaying(false);
    //     } else {
    //         audioElement.play();
    //         setIsPlaying(true);
    //     }
    // }

    // download one audio
    const downloadAudio = async (audioId: string, title: string, author: string) => {
        try {
            
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
        } catch (error) {
            console.error('Error downloading audio:', error);
        }
    };




  return (
    <div className="w-full py-[30px] bg-white flex flex-col items-center">
        <div className="w-full h-[60vh] bg-black text-white bg-hero-bg bg-center bg-cover relative flex items-end justify-center pb-[30px]">
            <div className="absolute bg-black w-full h-full top-0 left-0 opacity-75"></div>

            {audio && audio.slice(0, 1).map((aud) => (
            <div key={aud?._id} className="z-20 w-[90%] flex flex-col items-center gap-4 justify-end md:items-start">
                <h6 className="font-bold text-[22px] flex items-center gap-2 md:text-[30px] lg:text-[40px]">
                    <PiFileAudio />
                    { loading ? (<div className="w-full flex justify-center items-center"><DatasIsaLoading /></div>) :
                    <span>{aud?.title}</span>
                    }
                </h6>
                <h6 className="text-[18px] flex items-center gap-2 border-b-[1px] border-b-white px-2 pb-1 md:text-[23px] lg:text-[26px] text-center md:text-left">
                    <IoIosPerson />
                    { loading ? (<div><DatasIsaLoading /></div>) :
                    <span>{aud?.author}</span>
                    }
                </h6>

                <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between w-full">
                    <h6 className="flex items-center text-[14px] gap-2 md:text-[17px] lg:text-[19px] text-[#d5ebf6]"><span><IoLocationOutline /></span>Grace Access Church</h6>

                    <div className="flex items-center gap-4">

                        <button className="h-[40px] md:h-[60px] lg:h-[70px] md:w-[170px] lg:w-[190px] md:text-[20px] flex items-center gap-2 text-center text-[#00a4f2] hover:bg-[#00a4f2] hover:text-white hover:border-none transition-all duration-300 ease-in-out"  onClick={() => downloadAudio(aud?._id, aud?.title, aud?.author)}>
                            <span><IoCloudDownloadOutline /></span>Download
                        </button>

                        {/* <div className="bg-whit text-[#00a4f2 text-white rounded-full text-center flex items-center justify-center text-[40px] md:text-[55px] lg:text-[70px] h-[40px w-[40px animate-pulse transition-all duration-300 ease-in-out hover:text-[#00a4f2] cursor-pointer" onClick={handlePlayPause}>
                             { currentAudio && currentAudio?._id === aud._id && isPlaying ? <FaPause /> : <FaPlay />}
                        </div> */}
                    </div>
                </div>
            </div>
            ))}
        </div>

        <div className="w-[90%] bg-white py-[30px] relative">
            <div className="w-full md:w-[70%]">
                
                    { loading ? (
                        <div className="w-full fle xjustify-center items-center">
                            <DatasIsaLoading />
                        </div>
                     ) : (
                        <div className=" mt-[30px]">
                            {audio && audio.slice(1).map((aud) => (
                            <div key={aud?._id} className="w-full flex justify-between items-center border-[#848282fe] border-[1px] py- h-[60px]">
                                <div className="w-[10%] flex justify-center bg-[#4c4b4bfe] h-full font-bold bg- py-3 items-center text-white">
                                    <FaMusic />
                                </div>

                                <h6 className="w-[80%] border-[1px border-white flex justify-center items-center h-full py-3 px-1 md:py-2 text-white bg-[#063e60] text-[10px] md:text-[13px] overflow-x-scrol md:">
                                    {aud?.title} -- {aud?.author}
                                </h6>

                                <div className="w-[10%] border-[1px border-white flex justify-center items-center h-full py-3 bg-[#4c4b4bfe] cursor-pointer text-white" onClick={() => downloadAudio(aud?._id, aud?.title, aud?.author)}>
                                    <LuDownloadCloud />
                                </div>
                            </div>
                            ))}
                        </div>
                    )}

            </div>
            
            <div className="hidden lg:flex absolute w-[300px] h-[300px] bg-whit shadow-md right-0 top-[60px] border-[1px] border-gray-200 shadow-gray-400 flex-col justify-center items-center gap-3 p-4 bg-[#23a1db] text-white">
                <h5 className="font-bold text-[20px] text-center text-[#fff]">Do Not Miss Our Next Service!!</h5>

                {/* <h6 className="text-[14px] text-center flex flex-col">Sunday School: <span className="text-[#b6f4d1]">9:30am</span></h6> */}
                <h6 className="text-[14px] text-center flex flex-col font-bold">Sunday Service: <span className="text-[#b6f4d1]">08:30am</span></h6>
                <h6 className="text-[14px] text-center font-bold">Wednesday: Midweek Service: <span className="text-[#b6f4d1]">5:00pm</span></h6>
            </div>
        </div>

        <hr className="w-[90%] border-[1px] border-gray-200 mt-[30px]" />
    </div>
  )
}

export default AllSermon