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
    expect(component.contains(<p>Here is the list of notifications</p>)).exist
  });

  it('menu item is being displayed when displayDrawer is false', () => {
    const component = shallow(<Notifications />);
    expect(component.find('.menuItem')).toHaveLength(1);
  });

  it('div.Notifications is not being displayed when displayDrawer is false', () => {
    const component = shallow(<Notifications />);
    expect(component.find('.Notifications')).toHaveLength(0);
  });

  it('menu item is being displayed when displayDrawer is true', () => {
    const component = shallow(<Notifications displayDrawer={true} />);
    expect(component.find('.menuItem')).toHaveLength(1);
  });

  it('div.Notifications is being displayed when displayDrawer is true', () => {
    const component = shallow(<Notifications displayDrawer={true} />);
    expect(component.find('.Notifications')).toHaveLength(1);
  });
});
