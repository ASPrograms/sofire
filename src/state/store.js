import { configureStore } from '@reduxjs/toolkit';
import masterReducer from './masterSlice';

export default configureStore({
    reducer: {
        master: masterReducer,
    },
});
