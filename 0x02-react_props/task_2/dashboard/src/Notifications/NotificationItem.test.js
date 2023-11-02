import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

describe("Notifications component testing", () => {
  it("NotificationItem renders without crashing", () => {
    const component = shallow(<NotificationItem />);
    expect(component).toMatchSnapshot();
  });

  it('renders the correct html with type and value props', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the correct html', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
    expect(wrapper).toMatchSnapshot();
  });
});