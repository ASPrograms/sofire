import { createSlice } from '@reduxjs/toolkit';

export const masterSlice = createSlice({
    name: 'master',
    initialState: {
        showHome: false,
        showLandingScreen: true,
        showAndroidStore: false,
        showDedicatedAppPage: false,
        dedicatedApp: null
    },
    reducers: {
        setShowHome: (state, action) => {
            state.showHome = action.payload;
        },
        setShowLandingScreen: (state, action) => {
            state.showLandingScreen = action.payload;
        },
        setShowAndroidStore: (state, action) => {
            state.showAndroidStore = action.payload;
        },
        setShowDedicatedAppPage: (state, action) => {
            state.showDedicatedAppPage = action.payload;
        },

        setDedicatedApp: (state, action) => {
            state.dedicatedApp = action.payload;
        },

        showLandingExceptAll: (state) => {
            state.showHome = false;
            state.showLandingScreen = true;
            state.showAndroidStore = false;
            state.showDedicatedAppPage = false;
        },
        setAllFalse: (state) => {
            state.showLandingScreen = false;
            state.showHome = false;
            state.showAndroidStore = false;
            state.showDedicatedAppPage = false;
        }
    }
});

export const { setShowHome, setShowLandingScreen, setShowAndroidStore, showLandingExceptAll, setAllFalse, setShowDedicatedAppPage, setDedicatedApp } = masterSlice.actions;

export default masterSlice.reducer;