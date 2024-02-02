// src/components/LandingScreen.js
import React, { useState, useEffect } from 'react';
import { FaHome } from 'react-icons/fa';
import '../styles/main.css';
import { setShowHome, setShowLandingScreen } from '../state/masterSlice';
import { useDispatch } from 'react-redux';
import "../App.css"
function LandingScreen() {

    const [SofireMessage, setSofireMessage] = useState("");
    useEffect(() => {
        const text = "So";
        let i = 0;
        const interval = setInterval(() => {
            setSofireMessage(text.substring(0, i + 1));
            i++;
            if (i == text.length) clearInterval(interval);
        }, 150);
        return () => clearInterval(interval);
    }, []);

    const [fireMessage, setfireMessage] = useState("");
    useEffect(() => {
        const text = "Fire";
        let i = 0;
        const timeout = setTimeout(() => {
            const interval = setInterval(() => {
                setfireMessage(text.substring(0, i + 1));
                i++;
                if (i == text.length) clearInterval(interval);
            }, 150);
            return () => clearInterval(interval);
        }, 320);
        return () => clearTimeout(timeout);
    }, []);


    const [fireMessage2, setfireMessage2] = useState("");
    useEffect(() => {
        const text = "Ignite The Software";
        let i = 0;
        const timeout = setTimeout(() => {
            const interval = setInterval(() => {
                setfireMessage2(text.substring(0, i + 1));
                i++;
                if (i == text.length) clearInterval(interval);
            }, 100);
            return () => clearInterval(interval);
        }, 1000);
        return () => clearTimeout(timeout);
    }, []);

    let dispatcher = useDispatch()

    return (
        < div className=' h-screen w-full place-content-center py-auto ' >
            <h1 className=' my-auto mt-[35%] md:mt-[5%] font-[CherrySwash] mx-auto h-fit w-fit  text-3xl transition-all duration-300 text-white animate-fade-in'> Welcome to </h1>
            {/* <img src='Logo.png' className=' mx-auto mt-16'></img> */}

            <h1 className=' w-fit mx-auto font-[CherrySwash] text-[#ff4171] text-7xl md:text-9xl transition-all duration-200'><span className="text-white">{SofireMessage}</span>{fireMessage}</h1>
            <h1 className=' w-fit mx-auto font-[CherrySwash] text-[#ff9147] text-xl md:text-3xl transition-all duration-200'>{fireMessage2}</h1>
            <br></br>
            {/* <h1 className=' w-fit mx-auto text-[#ff4171] text-3xl'> By - <span className=' text-white'>Ashwin Sharma</span></h1> */}
            <h1 className=' w-fit mx-auto  text-xl text-white mt-32  mb-5'> New to this site? Start with Home <span className=' text-[#ff4171] text-sm'> <FaHome onClick={() => { dispatcher(setShowHome(true)); dispatcher(setShowLandingScreen(false)); }} className=' text-4xl mx-auto mt-5 cursor-pointer hover:fill-orange-400 hover:scale-110 transition-all duration-300' /></span> </h1>

            <h1 className=' absolute bottom-14 right-5 w-fit font-[CherrySwash] text-4xl text-white'>Created by</h1>
            <h1 className=' absolute bottom-5 right-5  w-fit  font-[CherrySwash] text-2xl text-[#ff4171]'>Ashwin Sharma</h1>


        </ div>
    );
}
export default LandingScreen;