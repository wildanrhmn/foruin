import { LoginAction, RegisterAction, RefreshTokenAction, LogoutAction } from '../auth/action'

import api from "../../utils/api";
import cookies from "./../../utils/cookie";
import axios from "axios";

function AsyncLogin({ email, password }) {
  return async dispatch => {
    try {
      const response = await api.Login(email, password);
      console.info(response)
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
}

function AsyncCheckLogin() {
  return async dispatch => {
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
    } catch (err) {
      console.error(err)
    }
  }
}

function AsyncRefreshToken() {
  return async dispatch => {
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

      dispatch(RefreshTokenAction(response.data.access_token));
    } catch (err) {
      dispatch(LogoutAction());
      cookies.remove("RefreshToken");
      sessionStorage.clear();

      window.location.assign("/");
    }
  }
}

function AsyncRegister({ email, password }) {
  return async dispatch => {
    try {
      const response = await api.Register(email, password);

      if (response.info !== undefined) {
        throw new Error()
      }

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

      dispatch(RegisterAction(data));

    } catch (err) {
      console.error(err);
    }
  }
}

function AsyncLogout() {
  return async dispatch => {
    try {
      cookies.remove("refreshToken");
      sessionStorage.clear();
      delete axios.defaults.headers.common["Authorization"];

      await api.Logout();
      dispatch(LogoutAction());

      window.location.assign("/");
    } catch (err) {
      console.error(err);
    }
  }
}

export { AsyncLogin, AsyncCheckLogin, AsyncRefreshToken, AsyncRegister, AsyncLogout }