import { LoginAction } from "./slicer";
import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";
import cookies from './../../utils/cookie';
import axios from "axios";

export const AsyncLogin = createAsyncThunk(
    'async/login',
    async({ email, password }, { dispatch }) => {
       
        try {
            const response = await api.Login(email, password);
            
            cookies.remove('refreshToken');
            cookies.add('refreshToken', response.data.access_token, 7);

            const data = {
                role: response.data.role,
                username: response.data.username,
                token: response.data.access_token,
            }

            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`
            sessionStorage.setItem('login_forum_info', JSON.stringify(data))

            dispatch(LoginAction(data));
        }
        catch(err){
            console.error(err);
            console.info("error disini")
        }
    }
)
