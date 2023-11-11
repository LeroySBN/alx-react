import React from 'react';
import $ from 'jquery';
import { StyleSheet, css } from 'aphrodite';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import { Login } from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { user, AppContext } from './AppContext';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayDrawer: false,
      user: user,
      logOut: this.logOut,
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    
    this.listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];
    
    this.listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", html: getLatestNotification() },
    ];
  }

  componentDidMount() {
    $(document).on('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    $(document).off('keydown', this.handleKeyPress);
  }
  
  handleKeyPress = (event)=> {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.state.logOut();
    }
  }

  handleDisplayDrawer = ()=> {
    // console.log('handleDisplayDrawer called');
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer = ()=> {
    this.setState({ displayDrawer: false });
  }

  logIn = (email, password)=> {
    this.setState({ user: { email, password, isLoggedIn: true }})
  }

  logOut = ()=> {
    this.setState({ user: user})
  }

  render() {
    return (
      <AppContext.Provider value={{
        user: this.state.user,
        logOut: this.state.logOut,
      }}>
        <React.Fragment>
          <Notifications 
            displayDrawer={this.state.displayDrawer}
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer}
            listNotifications={this.listNotifications}
          />
          <div className={css(styles.App)}>
            <Header user={this.context.user} logOut={this.context.logOut} />
            {this.state.user.isLoggedIn ? ( 
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={this.listCourses} />
              </BodySectionWithMarginBottom>
            ) : ( 
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={this.logIn} />
              </BodySectionWithMarginBottom>
            ) }
            <BodySection title="News from the school">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Donec mollis non risus quis semper. Donec ac lectus in magna 
                faucibus lobortis. Morbi sed accumsan arcu. Pellentesque 
                habitant morbi tristique senectus et netus et malesuada fames 
                ac turpis egestas. Donec pellentesque tincidunt facilisis. 
                Nam eu mauris enim. Nullam et bibendum ipsum, eget lobortis 
                metus. In congue, nunc sed pretium porta, ligula lacus 
                sollicitudin lorem, in pellentesque metus est quis arcu. 
                Nulla imperdiet eget dui nec consequat. Etiam non consequat ex. 
                Nullam eget accumsan ante, eu lacinia sapien. Integer vel 
                tincidunt nunc. Class aptent taciti sociosqu ad litora torquent 
                per conubia nostra, per inceptos himenaeos.
              </p>
            </BodySection>
            <Footer />
          </div>
        </React.Fragment>
        </AppContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  App: {
    minHeight: '100vh',
    fontFamily: 'Courier New, Courier, monospace',
    margin: '0 8px',
  },
});

export default App;
