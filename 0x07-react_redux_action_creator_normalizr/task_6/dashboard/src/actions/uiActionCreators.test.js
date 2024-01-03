import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from "./uiActionCreators";
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";

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
});
