import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { showLandingExceptAll } from '../../state/masterSlice';
import { AppCard } from './AppCard';
import "../../styles/main.css"
import "../../styles/style.css"
import { DedicatedAppPage } from './DedicatedAppPage';

function AndroidStore() {
    const dispatcher = useDispatch()
    const [apps, setApps] = useState([]);

    useEffect(() => {
        fetch('apps.json')
            .then(response => response.json())
            .then(data => {
                setApps(data);
                console.log(data);
            })
            .catch(err => console.error(err));
    }, []);

    // Filter apps for Android and iOS
    const androidApps = apps.filter(app => app.appAvailableForAndroid);
    const iosApps = apps.filter(app => app.appAvailableForIOS);
    const dedicatedPageToBeShown = useSelector((state) => state.master.showDedicatedAppPage)
    // Ensure there are apps before attempting to access their properties
    const latestApps = apps.length > 1 ? [apps[0], apps[1]] : [];

    return (
        <div>
            <h1 className='my-auto mt-5 mx-auto w-fit text-5xl text-pink-700 font-[CherrySwash]'>
                <span onClick={() => { dispatcher(showLandingExceptAll()); }}
                    className='hover:text-orange-500 hover:text-6xl cursor-pointer duration-300 transition-all'>
                    Sofire/
                </span>
                <span className='text-white text-3xl'>Android & iOS</span>
            </h1>

            {dedicatedPageToBeShown && (<DedicatedAppPage />)}
            <h1 className=' font-[CherrySwash] text-3xl mt-20 text-white translate-y-5 ml-10'> Latest Launches </h1>
            <div className='flex overflow-x-auto mt-10 p-4 space-x-4 scrollbar-hide'>
                {latestApps.map((app, index) => (
                    <div key={index} className='min-w-[200px]'>
                        <AppCard
                            appTitle={app.appTitle}
                            appDesc={app.appDesc}
                            longDesc={app.longDesc}
                            downloadPath={app.downloadPath}
                            appImagePath={app.appImagePath}
                            appAvailableForAndroid={app.appAvailableForAndroid}
                            appAvailableForIOS={app.appAvailableForIOS}
                        />
                    </div>
                ))}
            </div>


            <h1 className=' font-[CherrySwash] text-3xl mt-20 text-white translate-y-5 ml-10'> All Mobile Apps </h1>
            <div className='flex overflow-x-auto mt-10 p-4 space-x-4 scrollbar-hide'>
                {apps.map((app, index) => (
                    <div key={index} className='min-w-[200px]'>
                        <AppCard
                            appTitle={app.appTitle}
                            appDesc={app.appDesc}
                            longDesc={app.longDesc}
                            downloadPath={app.downloadPath}
                            appImagePath={app.appImagePath}
                            appAvailableForAndroid={app.appAvailableForAndroid}
                            appAvailableForIOS={app.appAvailableForIOS}
                        />
                    </div>
                ))}
            </div>

            <h1 className=' font-[CherrySwash] text-3xl mt-20 text-white translate-y-5 ml-10'> Android Apps </h1>
            <div className='flex overflow-x-auto mt-10 p-4 space-x-4 scrollbar-hide'>
                {androidApps.map((app, index) => (
                    <div key={index} className='min-w-[200px]'>
                        <AppCard
                            appTitle={app.appTitle}
                            appDesc={app.appDesc}
                            appImagePath={app.appImagePath}
                            longDesc={app.longDesc}
                            downloadPath={app.downloadPath}
                            appAvailableForAndroid={app.appAvailableForAndroid}
                            appAvailableForIOS={app.appAvailableForIOS}
                        />
                    </div>
                ))}
            </div>

            <h1 className=' font-[CherrySwash] text-3xl mt-20 text-white translate-y-5 ml-10'> iOS Apps </h1>
            <div className='flex overflow-x-auto mt-10 p-4 space-x-4 scrollbar-hide'>
                {iosApps.map((app, index) => (
                    <div key={index} className='min-w-[200px]'>
                        <AppCard
                            appTitle={app.appTitle}
                            appDesc={app.appDesc}
                            appImagePath={app.appImagePath}
                            appAvailableForAndroid={app.appAvailableForAndroid}
                            appAvailableForIOS={app.appAvailableForIOS}
                        />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default AndroidStore;