import { useDispatch } from 'react-redux';
import { bindActionCreators, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import fetch from 'node-fetch';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from "./uiActionTypes";
import rootReducer from "../reducers/rootReducer";

const middlewareEnhancer = applyMiddleware(thunkMiddleware)
export const store = configureStore(rootReducer, middlewareEnhancer)

export const login = (email, password) => {
  return {
    type: LOGIN,
    user: { email, password }
  };
}

export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
  };
}

export const loginFailure = () => {
  return {
    type: LOGIN_FAILURE,
  };
}

export const logout = ()=> {
    return {
        type: LOGOUT,
    };
}

export const displayNotificationDrawer = () => {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  };
}

export const hideNotificationDrawer = () => {
  return {
    type: HIDE_NOTIFICATION_DRAWER,
  };
}

export const useUIActionCreators = () => {
  const dispatch = useDispatch();

  return {
    boundLogin: bindActionCreators(login, dispatch),
    boundLogout: bindActionCreators(logout, dispatch),
    boundDisplayNotificationDrawer: bindActionCreators(displayNotificationDrawer, dispatch),
    boundHideNotificationDrawer: bindActionCreators(hideNotificationDrawer, dispatch),
    boundLoginSuccess: bindActionCreators(loginSuccess, dispatch),
    boundLoginFailure: bindActionCreators(loginFailure, dispatch),
  };
};

export async function loginRequest(email, password) {
  dispatch(login(email, password));
  const res = await fetch('http://localhost:8564/login-success.json');
  const data = await res.json();
  if (data.email) {
    dispatch(loginSuccess());
  } else {
    dispatch(loginFailure());
  }
}
