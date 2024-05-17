import React from 'react'

interface iPrayerCard {
    content? : string,
    buttonContent? : string
}

const PrayerCard:React.FC<iPrayerCard> = ({content, buttonContent}) => {
  return (
    <div className="w-[100%] h-[100%] relative">

        {/* <div className="absolute h-full w-full bg-gradient-to-t from-black from-10% via-[#1515159f] via-20% to-transparent to-70%"></div> */}


        <div className="flex flex-col gap-5 items-center">
            <h6 className="text-white font-bold text-[20px] text-center leading-6 w-[50%] ">
                {/* Share your <br/>Testimony <br/>with us */}
                {content}
            </h6>

            <a href="" className="bg-white text-[#23a1db] p-2 w-[200px] flex justify-center items-center rounded-md font-bold animate-bounce ">
                {/* Share With Us */}
                {buttonContent}
            </a>
        </div>

    </div>
  )
}

export default PrayerCard