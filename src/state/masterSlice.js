import { createSlice } from '@reduxjs/toolkit';

export const masterSlice = createSlice({
    name: 'master',
    initialState: {
        showHome: false,
        showLandingScreen: true,
        showAndroidStore: false
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
        showLandingExceptAll: (state) => {
            state.showHome = false;
            state.showLandingScreen = true;
            state.showAndroidStore = false;
        },
        setAllFalse: (state) => {
            state.showLandingScreen = false;
            state.showHome = false;
            state.showAndroidStore = false;
        }
    }
});

export const { setShowHome, setShowLandingScreen, setShowAndroidStore, showLandingExceptAll, setAllFalse } = masterSlice.actions;

export default masterSlice.reducer;