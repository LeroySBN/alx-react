import { shallow } from 'enzyme';
// import { screen } from '@testing-library/react-18';
import App from './App';


// test('App renders without crashing', () => {
//   render(<App />);
//   const appComponent = screen.getByTestId('App');
//   expect(appComponent).toBeInTheDocument();
// });

// test('App renders a div with the class App-header', () => {
//   render(<App />);
//   const appHeader = screen.getByTestId('App-header');
//   expect(appHeader).toBeInTheDocument();
// });

// test('App renders a div with the class App-body', () => {
//   render(<App />);
//   const appBody = screen.getByTestId('App-body');
//   expect(appBody).toBeInTheDocument();
// });

// test('App renders a div with the class App-footer', () => {
//   render(<App />);
//   const appFooter = screen.getByTestId('App-footer');
//   expect(appFooter).toBeInTheDocument();
// });

describe('App component testing', () => {
  it('App renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('App renders a div with the class App-header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-header')).toHaveLength(1);
  });

  it('App renders a div with the class App-body', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-body')).toHaveLength(1);
  });

  it('App renders a div with the class App-footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-footer')).toHaveLength(1);
  });
});
