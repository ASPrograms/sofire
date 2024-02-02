import React from 'react';
import { Provider, useSelector } from 'react-redux';
import store from './state/store';
import Header from './components/Header';
import Home from './components/Home';
import LandingScreen from './components/LandingScreen';
import './App.css'

function App() {
        const showLandingScreen = useSelector(state => state.master.showLandingScreen);
        const showHome = useSelector(state => state.master.showHome);

        return (
                <Provider store={store}>
                        <div className=' bg-[#1e1e1e]  overflow-hidden h-screen flex flex-col md:flex-row pr-2 md:pt-2 md:pb-4'>
                                <Header className=" w-fit " />
                                <div className=' w-full h-full mx-2 bg-[#000] mb-2 md:my-2 md:mr-2 rounded-xl p-5 overflow-y-scroll overflow-x-hidden'>
                                        {showLandingScreen && <LandingScreen />}
                                        {showHome && <Home />}
                                </div>
                        </div>
                </Provider>
        );
}

export default App;


