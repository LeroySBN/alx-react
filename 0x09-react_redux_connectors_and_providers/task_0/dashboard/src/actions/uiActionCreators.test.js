import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";
import { login, logout, displayNotificationDrawer, hideNotificationDrawer, loginRequest } from "./uiActionCreators";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Test uiActionCreators.js", () => {
    it("test login", () => {
        const result = login("email", "password");
        expect(result).toEqual({ type: LOGIN, user: { email: "email", password: "password" } });
    });

    it("test logout", () => {
        const result = logout();
        expect(result).toEqual({ type: LOGOUT });
    });

    it("test displayNotificationDrawer", () => {
        const result = displayNotificationDrawer();
        expect(result).toEqual({ type: DISPLAY_NOTIFICATION_DRAWER });
    });

    it("test hideNotificationDrawer", () => {
        const result = hideNotificationDrawer();
        expect(result).toEqual({ type: HIDE_NOTIFICATION_DRAWER });
    });

    it("test loginRequest", () => {
        const store = mockStore({});

      fetchMock.mock("http://localhost:8564/login-success.json", 500);

      const user = {
        email: "test@test.com",
        password: "123456",
      };

      return store
        .dispatch(loginRequest(user.email, user.password, store.dispatch))
        .then(() => {
          const actions = store.getActions();
          expect(actions[0]).toEqual(login(user.email, user.password));
          expect(actions[1]).toEqual(loginFailure());
        });
    });
});
