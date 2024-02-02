import React from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';

function InfoCard({ title = "Title", desc = "Description", buttonTitle = "Button", buttonVisible = false, callback = null }) {
    return (
        <div className=' mt-10 rounded-lg cursor-pointer mx-10 md:ml-3 hover:from-pink-500/40 hover:to-orange-500/40 bg-gradient-to-r from-pink-500/30 to-orange-500/30 hover:scale-105 transition-all duration-500 p-7 w-fit max-w-[90%] md:max-w-[400px]'>
            <h1 className='font-[CherrySwash] text-xl text-white'>{title} </h1>
            <h1 className=' text-white ml-6 mt-2 border-l-2 pl-2 border-white/20 '>{desc}</h1>
            {buttonVisible && (
                <div className='flex flex-row items-center w-fit mt-3 ml-6 hover:scale-110 transition-all duration-300'>
                    <button onClick={callback} className=' text-white px-3 py-1 text-sm bg-black rounded-l-full '>
                        {buttonTitle}
                    </button>
                    <span className=" bg-white text-black py-1 px-1 rounded-r-lg"><FaArrowAltCircleRight /></span>
                </div>
            )
            }
        </div >
    )
}

export { InfoCard };
