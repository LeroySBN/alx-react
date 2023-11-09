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
        <div className={this.props.displayDrawer ? css(styles.fullWidth) : css(styles.notificationContainer)}>
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
            )}
        </div>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  notificationContainer: {
    position: 'absolute',
    top: '0.5rem',
    right: '0.5rem',
    backgroundColor: '#ffffff',
    boxShadow: '0px 0px 4px 2px rgba(0, 0, 0, 0.25)',
    padding: '4px 16px',
  },
  fullWidth: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    zIndex: '3',
  },
  hide: {
    display: 'none',
  },
  show: {
    display: 'block',
  },
  Notifications: {
    fontFamily: 'Helvetica, sans-serif',
    textAlign: 'left',
  },
  closeIcon: {
    margin: '0',
    height: '15px',
  },
  ul: {
    listStyle: 'none',
    padding: '0',
    fontSize: '20px',
  }
});

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: true,
  listNotifications: [],
};

export default Notifications;
