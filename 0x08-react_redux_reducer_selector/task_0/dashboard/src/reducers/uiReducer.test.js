import uiReducer from '../reducers/uiReducer';
import { 
    LOGIN,
    LOGOUT,
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from "../actions/uiActionTypes";

describe('uiReducer tests', () => {
  it('should return the initial state when no action is passed', () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };
    const newState = uiReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  it('should return the initial state when SELECT_COURSE action is passed', () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };
    const newState = uiReducer(initialState, { type: 'SELECT_COURSE' });
    expect(newState).toEqual(initialState);
  });

  it('should correctly change isNotificationDrawerVisible property when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };
    const expectedState = {
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: {},
    };
    const newState = uiReducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(newState).toEqual(expectedState);
  });

  // Add more tests for other actions (LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT) if needed
});
