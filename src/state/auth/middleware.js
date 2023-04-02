import {
  LoginAction,
  RefreshAction,
  LogoutAction,
  RegisterAction,
} from "./slicer";
import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";
import cookies from "./../../utils/cookie";
import axios from "axios";

export const AsyncLogin = createAsyncThunk(
  "async/login",
  async ({ email, password }, { dispatch }) => {
    try {
      const response = await api.Login(email, password);

      cookies.remove("refreshToken");
      cookies.add("refreshToken", response.data.access_token, 7);

      const data = {
        role: response.data.role,
        username: response.data.username,
        token: response.data.access_token,
      };

      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.access_token}`;
      sessionStorage.setItem("login_forum_info", JSON.stringify(data));

      dispatch(LoginAction(data));
    } catch (err) {
      console.error(err);
    }
  }
);

export const CheckLogin = createAsyncThunk(
  "async/checklogin",
  async (_, { dispatch }) => {
    try {
      let auth_data = JSON.parse(sessionStorage.getItem("login_forum_info"));

      //Setup Cookies
      cookies.remove("refreshToken");
      cookies.add("refreshToken", auth_data.token, 7);

      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${auth_data.token}`;
      sessionStorage.setItem("login_forum_info", JSON.stringify(auth_data));

      // Pass to Action
      dispatch(LoginAction(auth_data));
    } catch (err) {}
  }
);

export const RefreshToken = createAsyncThunk(
  "async/refreshtoken",
  async (_, { dispatch }) => {
    try {
      const response = await api.Refresh();

      cookies.remove("refreshToken");
      cookies.add("refreshToken", response.data.access_token, 7);

      let auth_data = JSON.parse(sessionStorage.getItem("login_forum_info"));
      auth_data.token = response.data.access_token;

      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.access_token}`;
      sessionStorage.setItem("login_forum_info", JSON.stringify(auth_data));

      dispatch(RefreshAction(response.data.access_token));
    } catch (err) {
      dispatch(LogoutAction());
      cookies.remove("RefreshToken");
      sessionStorage.clear();

      window.location.assign("/");
    }
  }
);

export const asyncLogout = createAsyncThunk(
  "async/refreshtoken",
  async (_, { dispatch }) => {
    try {
      cookies.remove("refreshToken");
      sessionStorage.clear();
      delete axios.defaults.headers.common["Authorization"];

      await api.Logout();
      dispatch(LogoutAction());

      window.location.assign("/");
    } catch (err) {}
  }
);

export const asyncRegister = createAsyncThunk(
  "async/register",
  async (userData, { dispatch }) => {
    try {
      // eslint-disable-next-line
      const response = await api.Register(userData);
      dispatch(RegisterAction());
    } catch (err) {
      console.error(err);
    }
  }
);
