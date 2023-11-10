import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});


describe('Footer component testing', () => {
    it('Footer renders without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Footer renders a div with the class App-footer', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('.App-footer').text()).toContain('Copyright');
  });
});
