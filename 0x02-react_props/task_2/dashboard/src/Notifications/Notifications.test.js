import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';


describe('Notifications component testing', () => {
  it('Notifications renders without crashing', () => {
    const component = shallow(<Notifications />);
    expect(component).toMatchSnapshot();
  });

  it('Notifications renders a list with three items', () => {
    const component = shallow(<Notifications />);
    expect(component.contains(<NotificationItem />)).exist;
  });

  it('Notifications renders the text "Here is the list of notifications"', () => {
    const component = shallow(<Notifications />);
    expect(component.find('p')).toHaveLength(1);
    expect(component.find('p').text()).toBe('Here is the list of notifications');
  });
});
