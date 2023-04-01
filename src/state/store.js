import { configureStore } from "@reduxjs/toolkit";
import authSlicer from './auth/slicer';

export const store = configureStore({
    reducer: {
        auth : authSlicer,
        
    }
})