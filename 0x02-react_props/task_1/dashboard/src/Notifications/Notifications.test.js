import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';


describe('Notifications component testing', () => {
  it('Notifications renders without crashing', () => {
    const component = shallow(<Notifications />);
    expect(component).toMatchSnapshot();
  });

  it('Notifications renders a list with three items', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('ul')).toHaveLength(1);
    expect(wrapper.find('li')).toHaveLength(3);
  });

  it('Notifications renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.find('p').text()).toBe('Here is the list of notifications');
  });
});
