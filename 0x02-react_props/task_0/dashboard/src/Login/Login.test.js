import { shallow } from 'enzyme';
// import { screen } from '@testing-library/react-18';
import Login from './Login';


// test('Login renders a div with the class App-body', () => {
//   render(<Login />);
//   const appBody = screen.getByTestId('App-body');
//   expect(appBody).toBeInTheDocument();
// });

describe('Login component testing', () => {
  it('Login renders a div with the class App-body', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('.App-body')).toHaveLength(1);
  });
});
