import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setShowHome, setShowLandingScreen } from '../state/masterSlice';
import "../styles/main.css"
import { InfoCard } from './InfoCard';

function Home() {
    const dispatcher = useDispatch();
    return (
        <div className='h-full pb-10 w-full place-content-center px-5'>
            <h1 className='my-auto mt-5 mx-auto w-fit text-5xl text-pink-700 font-[CherrySwash]'>
                <span onClick={() => { dispatcher(setShowHome(false)); dispatcher(setShowLandingScreen(true)); }}
                    className='hover:text-orange-500 hover:text-6xl cursor-pointer duration-300 transition-all'>
                    Sofire/
                </span>
                <span className='text-white text-3xl'>HOME</span>
            </h1>
            <h1 className=' font-[CherrySwash] text-3xl text-white mt-10 translate-y-5'>Information</h1>
            <div className="md:flex md:flex-wrap">
                <InfoCard title="Q. What is Sofire?" desc="SoFire is a platform to publish the Apps and APIs that I create. The platform has a dedicated inbuilt store i.e. Products section, where you can install and update all. SoFire is abbreviation for SoFtware-Fire" />
                <InfoCard callback={() => { console.log("Working") }} title=" Know more about Ashwin Sharma" buttonVisible={true} buttonTitle='View Portfolio' desc="Ashwin is an Android Developer, as well as he's comfortable in Static&Dynamic Web Development and partial windows development" />
                <InfoCard title='Q. How do I join the team, if I want to contribute or collaborate?' desc='For the same, we provide our form here. You can fill it up to apply for the same. ' buttonVisible={true} buttonTitle='Fill up the form'></InfoCard>
            </div>

            <h1 className=' font-[CherrySwash] text-3xl text-white mt-10 translate-y-5'>Updates</h1>
            <div className="md:flex md:flex-wrap pb-10">
                <InfoCard title='Launched Notebird ( Android )' desc="It is a note taking app with real-time syncing, inspired from Google Keep Notes ( RealTime ) and Microsoft One Note ( Structured )."></InfoCard>
                <InfoCard title='Coming soon!' desc='Notebird Web-app and Windows CLI are coming soon!'></InfoCard>
            </div>
        </div>
    )
}

export default Home;