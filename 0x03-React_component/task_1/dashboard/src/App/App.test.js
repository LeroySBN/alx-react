/**
 * @jest-environment jsdom
 */

import React from 'react';
// import { expect } from 'chai';
import { mount, shallow, render } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';


describe('App component tests', () => {
  it('App renders without crashing', () => {
    const component = shallow(<App />);
    expect(component).toBeDefined();
  });

  it('App renders with Notifications component', () => {
    const component = shallow(<App />);
    expect(component.contains(<Notifications displayDrawer={true} listNotifications={[]} />)).exist;
  });

  it('App renders with Header component', () => {
    const component = shallow(<App />);
    expect(component.contains(<Header />)).toBe(true);
  });

  it('App renders with Login component', () => {
    const component = shallow(<App />);
    expect(component.contains(<Login />)).toBe(true);
  });

  it('App renders with Footer component', () => {
    const component = shallow(<App />);
    expect(component.contains(<Footer />)).toBe(true);
  });

  it('CourseList not displayed when isLoggedIn is false', () => {
    const component = shallow(<App />);
    expect(component.find('CourseList')).toHaveLength(0);
  });

  it('Ctrl+h keydown event calls logOut function and displays an alert', () => {
    const logOut = jest.fn(() => undefined);
    const alert = jest.spyOn(window, 'alert');
    const component = mount(<App logOut={logOut} />);
    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
    window.dispatchEvent(event);
    expect(alert).toHaveBeenCalledWith('Logging you out');
    expect(logOut).toHaveBeenCalled();
    alert.mockRestore();
  });

  it('ctrl+h key press with incorrect props does not call logOut function', () => {
    const logOut = jest.fn(() => undefined);
    const component = mount(<App />);
    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
    window.dispatchEvent(event);
    expect(logOut).not.toHaveBeenCalled();
  });

});
