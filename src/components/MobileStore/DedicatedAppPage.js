import React from "react";
import { useSelector } from "react-redux";
import { FaArrowAltCircleDown } from "react-icons/fa";

function DedicatedAppPage() {
  const dedicatedApp = useSelector((state) => state.master.dedicatedApp);
  const callback = () => {
    window.open(dedicatedApp.downloadPath);
  };

  return (
    <div className=" h-fit w-screen mt-20 transition-all duration-500">
    
      <div className=" flex flex-row h-fit w-[95%] md:w-[80%] md:max-w-[600px] mx-auto md:mr-auto md:ml-10 bg-[#121212] p-5 md:px-10 rounded-xl">
        <img
          src={dedicatedApp.appImagePath}
          className=" rounded-full h-[80px] w-[80px] border-2 border-l-pink-500/60 border-t-pink-500/60 border-b-orange-500/60 border-r-orange-500/60 "
        ></img>
        <div className=" ml-5">
          <h1 className=" text-pink-600 text-3xl font-[CherrySwash]">
            {dedicatedApp.appTitle}
          </h1>
          <h1 className=" text-orange-600 font-[CherrySwash] text-lg">
            {dedicatedApp.appDesc}
          </h1>
          <h1 className=" text-white/70 mt-5 ">
            {dedicatedApp.longAppDesc == null
              ? "No Description Available"
              : dedicatedApp.longAppDesc}
          </h1>

          <div className="flex flex-row items-center w-fit mt-3 hover:scale-110 transition-all duration-300">
            <button
              onClick={callback}
              className=" text-white px-3 py-1 text-sm bg-black hover:bg-gradient-to-r to-pink-500 from-orange-500 rounded-l-full "
            >
              Download
            </button>
            <span className=" bg-white text-black h-7 pt-[7px]  px-1 rounded-r-lg">
              <FaArrowAltCircleDown className=" my-auto" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export { DedicatedAppPage };
