import { bindActionCreators, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { useDispatch } from 'react-redux';
import fetch from 'node-fetch';
import configureStore from 'redux-mock-store'
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from "./uiActionTypes";

const middlewares = [thunk] // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares)

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

// export function loginRequest(email, password) {
//   const dispatch = useDispatch();
//   dispatch(login(email, password));
//   const res = await fetch('http://localhost:8564/login-success.json');
//   const data = await res.json();
//   if (data.email === email) {
//     dispatch(loginSuccess());
//   } else {
//     dispatch(loginFailure());
//   }
// }

export function loginRequest(email, password) {
  return async (dispatch) => {
    dispatch(login(email, password));
    const res = await fetch('http://localhost:8564/login-success.json');
    const data = await res.json();
    if (data.email) {
      dispatch(loginSuccess());
    } else {
      dispatch(loginFailure());
    }
  }
}

export async function logoutRequest() {
  const dispatch = useDispatch();
  dispatch(logout());
}
