import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

describe('CourseList component testing', () => {
  it('CourseList renders without crashing', () => {
    const component = shallow(<CourseList />);
    expect(component).toMatchSnapshot();
  });

  it('renders a table', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find('table')).toHaveLength(1);
    expect(wrapper.find('CourseListRow')).toHaveLength(5);
  });
});