import { createSlice } from "@reduxjs/toolkit";

const authSlicer = createSlice({
    name: 'auth',
    initialState: {},
    reducers: {
        LoginAction(state, action){
            return state = action.payload
        },

        LogoutAction(state, action){
            return state = action.payload
        },
        RefreshAction(state, action){
            return state = action.payload
        },
        RegisterAction(state, action){
            return state = action.payload
        },
        BannerUserAction(state, action){
            return state = action.payload
        },
        TakedownUserAction(state, action){
            return state = action.payload
        },
        ApproveSubmissionAction(state, action){
            return state = action.payload
        },
    }
    
})

export const { actions, reducer } = authSlicer;

export const { 
    LoginAction, 
    LogoutAction,
    RefreshAction,
    RegisterAction,
    BannerUserAction,
    TakedownUserAction,
    ApproveSubmissionAction
} = actions;

export default reducer;