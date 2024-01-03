import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";

export const login = (email, password) => {
  return {
    type: LOGIN,
    user: { email, password }
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

const dispatch = useDispatch();
const boundLogin = bindActionCreators(login, dispatch);
const boundLogout = bindActionCreators(logout, dispatch);
const boundDisplayNotificationDrawer = bindActionCreators(displayNotificationDrawer, dispatch);
const boundHideNotificationDrawer = bindActionCreators(hideNotificationDrawer, dispatch);
