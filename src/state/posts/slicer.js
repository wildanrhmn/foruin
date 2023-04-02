import { createSlice } from "@reduxjs/toolkit";

const PostsSlicer = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {
        GetAllPosts(state, action){
            return state = action.payload
        },
        CreatePost(state, action){
            return state = action.payload
        },
        EditPost(state, action){
            return state = action.payload
        },
        RemovePost(state, action){
            return state = action.payload
        },
        LikeUnlikePost(state, action){
            return state = action.payload
        },
        VerifiedTakeDownPost(state, action){
            return state = action.payload
        },
        SysAdminTakeDownPost(state, action){
            return state = action.payload
        },
    }
    
})

export const { actions, reducer } = PostsSlicer;

export const { GetAllPosts, CreatePost, EditPost, RemovePost, LikeUnlikePost, VerifiedTakeDownPost, SysAdminTakeDownPost } = actions

export default reducer;