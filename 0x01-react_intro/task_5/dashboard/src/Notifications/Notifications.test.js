import { shallow } from 'enzyme';
// import { render, screen } from '@testing-library/react-18';
import Notifications from './Notifications';

// test('Notifications renders without crashing', () => {
//   render(<Notifications />);
//   const notificationsComponent = screen.getByTestId('Notifications');
//   expect(notificationsComponent).toBeInTheDocument();
// });

// test('Notifications renders a list with three items', () => {
//   render(<Notifications />);
//   const notificationsItems = screen.getAllByRole('li');
//   expect(notificationsItems).toHaveLength(3);
// });

// test('Notifications renders the text "Here is the list of notifications"', () => {
//   render(<Notifications />);
//   const notificationsParagraph = screen.getByText(
//     'Here is the list of notifications'
//   );
//   expect(notificationsParagraph).toBeInTheDocument();
// });

describe('Notifications component testing', () => {
  it('Notifications renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('Notifications renders a list with three items', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('ul')).toHaveLength(1);
    expect(wrapper.find('li')).toHaveLength(3);
  });

  it('Notifications renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.find('p').text()).toEqual(
      'Here is the list of notifications'
    );
  });
});
