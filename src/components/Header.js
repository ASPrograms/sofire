import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAllFalse, setShowAndroidStore, setShowHome, setShowLandingScreen, showLandingExceptAll } from '../state/masterSlice';
import "../styles/style.css"

function Header() {
    const dispatch = useDispatch();
    const showHome = useSelector((state) => state.master.showHome);
    const showAndroid = useSelector((state) => state.master.showAndroidStore);

    const toggleShowHome = () => {
        dispatch(setShowHome(!showHome));
    };

    const [showMenu, setShowMenu] = useState(false)
    const handleMenuClick = () => {
        setShowMenu(!showMenu);
    };
    return (
        <div className="flex flex-row place-content-stretch bg-black/30 backdrop-blur-md">
            <img src={"/Logo.png"} alt="Logo" className=' md:h-52 h-24 w-fit mt-10 ml-10'></img>

            <nav className=" mt-10 py-auto h-fit flex flex-row ml-auto mr-5 space-x-10 justify-center">
                <h1 className="hidden md:flex w-fit h-fit my-auto  text-white  hover:text-[#ff7895] underLine cursor-pointer "> WINDOWS STORE </h1>
                {showAndroid ? (
                    <h1 className="w-fit  h-fit my-auto  cursor-pointer text-white  underLined" onClick={() => { dispatch(showLandingExceptAll()); }}> ANDROID & IOS</h1>) : (
                    <h1 className="w-fit  h-fit my-auto   text-white underLine hover:text-[#FF69B4] cursor-pointer  " onClick={() => { dispatch(setAllFalse()); dispatch(setShowAndroidStore(true)); }}>ANDROID & IOS </h1>
                )}
                {showHome ? (
                    <h1 className="w-fit  h-fit my-auto  cursor-pointer text-white  underLined" onClick={() => { dispatch(showLandingExceptAll()) }}> HOME</h1>) : (
                    <h1 className="w-fit  h-fit my-auto   text-white underLine hover:text-[#FF69B4] cursor-pointer  " onClick={() => { dispatch(setAllFalse()); dispatch(setShowHome(true)); }}> HOME </h1>
                )}
                <input placeholder='Search' className=' placeholder-[#777] bg-[#1e1e1e] text-white py-2 px-2 min-w-14 rounded-lg md:inline hidden'></input>
                <div className=' h-[42px] cursor-pointer w-[42px] rounded-full bg-[#1e1e1e] translate-x-[-20px]'></div>
            </nav>


        </div >
    );
}

export default Header;
