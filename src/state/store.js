import { configureStore } from "@reduxjs/toolkit";
import authSlicer from './auth/slicer';
import PostsSlicer from './posts/slicer';

export const store = configureStore({
    reducer: {
        auth : authSlicer,
        posts: PostsSlicer,
    }
})