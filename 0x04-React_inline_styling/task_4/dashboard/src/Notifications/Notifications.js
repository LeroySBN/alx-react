import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import { NotificationItemShape } from './NotificationItemShape';

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() {
    return (
      <React.Fragment>
        <div className={this.props.displayDrawer ? css(styles.hide) : css(styles.show)}>
          <p>Your notifications</p>
        </div>
        {this.props.displayDrawer ? (
          <div className={css(styles.Notifications)}>
            <button 
              style={{ display: "flex", justifyContent: "flex-end", margin: "10px 10px 0 0", padding: "0", border: "none", cursor: "pointer", position: "absolute", top: "2px", right: "2px" }}
              aria-label="Close" 
              onClick={() => console.log('Close button has been clicked')}
            >
              <img className={css(styles.closeIcon)} src={closeIcon} alt='closeIcon' />
            </button>

            {this.props.listNotifications && this.props.listNotifications.length > 0 ? (
              <div>
                <p>Here is the list of notifications</p>
                <ul className={css(styles.ul)}>
                  {this.props.listNotifications.map(({ id, type, value, html }) => (
                    <NotificationItem
                      id={id}
                      key={id}
                      type={type}
                      value={value}
                      html={html}
                      markAsRead={this.markAsRead}
                    />
                  ))}
                </ul>
              </div>
            ) : (
            <p>No new notification for now</p>
            )}
          </div>
        ) : (
          null
          )
        }
      </React.Fragment>
    );
  }
}

const opacityKeyframes = {
  'from': {
      opacity: 0.5,
  },

  'to': {
      opacity: 1,
  }
};

const translateKeyframes = {
  '0%': {
      transform: 'translateY(0)',
  },

  '50%': {
      transform: 'translateY(-5px)',
  },

  '100%': {
      transform: 'translateY(5)',
  },
};

const colorKeyframes = {
  '0%': {
      color: '#ff0000',
  },

  '50%': {
      color: '#00ff00',
  },

  '100%': {
      color: '#0000ff',
  },
};

const styles = StyleSheet.create({
  hide: {
    display: 'none',
  },
  show: {
    display: 'block',
    position: 'absolute',
    top: '0.5rem',
    right: '0.5rem',
    padding: '4px 16px',
    ':hover': {
      cursor: 'pointer',
      backgroundColor: '#fff8f8',
      animationName: [opacityKeyframes, translateKeyframes, colorKeyframes],
      animationDuration: '1s, 0.5s, 0.3s',
      animationIterationCount: '3',
    },
  },
  Notifications: {
    position: 'absolute',
    top: '1rem',
    right: '1em',
    padding: '4px 16px',
    border: '2px #e1003c dotted',
    color: '#000000',
    fontFamily: 'Helvetica, sans-serif',
    fontSize: '1rem',
    textAlign: 'left',
    backgroundColor: '#fff8f8',
    '@media (max-width: 900px)': {
      top: '0',
      right: '0',
      margin: '0',
      padding: '0',
      width: '100%',
      height: '100%',
      border: 'none',
      zIndex: '3',
    },
  },
  closeIcon: {
    margin: '0',
    height: '15px',
  },
  ul: {
    '@media (max-width: 900px)': {
      listStyle: 'none',
      padding: '0',
      fontSize: '20px',
    },
  }
});

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
