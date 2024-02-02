import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';
import "../../styles/main.css"

function AppCard({ appTitle, appDesc, appImagePath = "/Background.png", appAvailableForAndroid, appAvailableForIOS }) {
    return (
        <div className='   text-white/50 h-[260px] w-[200px] ml-10 '>
            <img src={appImagePath} className=' w-[180px] h-[180px] rounded-lg border-2 border-t-pink-500/20 border-l-pink-500/20 border-r-orange-500/20 border-b-orange-500/20 p-1 hover:border-t-pink-500 hover:border-l-pink-500 hover:border-r-orange-500 hover:border-b-orange-500 hover:scale-105 transition-all duration-300 cursor-pointer'></img>
            <h1 className=' font-[CherrySwash] text-xl mt-3 ml-2 text-pink-700'>{appTitle}</h1>
            <h1 className=' font-[CherrySwash] text-sm  ml-2 text-orange-600/70'>{appDesc}</h1>
            <div className=' flex flex-row  mt-2 ml-2 space-x-2'>
                {appAvailableForIOS && (
                    <h1 className=' text-xs bg-[#1e1e1e] px-2 py-1 rounded-full'>iOS </h1>
                )}
                {appAvailableForAndroid && (
                    <h1 className='  text-xs bg-[#1e1e1e] px-2 py-1 rounded-full'>Android </h1>
                )}
            </div>
        </div>
    )
}

export { AppCard };
