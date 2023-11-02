import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

export default function App({ isLoggedIn }) {
  return (
    <Fragment>
      <Notifications />
      <div className="App">
        <Header />
        {isLoggedIn ? ( <CourseList /> ) : ( <Login /> ) }
        <Footer />
      </div>
    </Fragment>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
}

App.defaultProps = {
  isLoggedIn: false,
}