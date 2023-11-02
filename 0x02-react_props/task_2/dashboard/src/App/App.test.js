import React from 'react';
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
    expect(component.contains(<Notifications />)).toBe(true);
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
});
