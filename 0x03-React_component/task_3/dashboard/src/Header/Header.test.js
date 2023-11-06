import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';


describe('Header component testing', () => {
  it('Header renders without crashing', () => {
    const component = shallow(<Header />);
    expect(component).toMatchSnapshot();
  });

  it('Header renders a div with the class App-header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('.App-header')).toHaveLength(1);
  });

  it('Header renders a div with h1 tag', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1')).toHaveLength(1);
  });
});
