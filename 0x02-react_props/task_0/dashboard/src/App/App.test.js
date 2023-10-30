import { shallow } from 'enzyme';
// import { screen } from '@testing-library/react-18';
import App from './App';


// test('App renders without crashing', () => {
//   render(<App />);
//   const appComponent = screen.getByTestId('App');
//   expect(appComponent).toBeInTheDocument();
// });

describe('App component testing', () => {
  it('App renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toEqual(true);
  });
});
