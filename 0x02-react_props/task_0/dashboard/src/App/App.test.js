import { mount, shallow, render } from 'enzyme';
// import { screen } from '@testing-library/react-18';
import App from './App';


describe('App component testing', () => {
  it('App renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toEqual(true);
  });
});
