import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

export default function Notifications({ displayDrawer }) {
  return (
    <>
      <div className="notificationContainer">
        <div className="menuItem">
          <p>Your notifications</p>
        </div>
        {displayDrawer ? (
          <div className="Notifications">
            <button 
              style={{ background: "none", border: "none", cursor: "pointer", position: "absolute", top: "2px", right: "2px" }}
              aria-label="Close" 
              onClick={() => console.log('Close button has been clicked')}
            >
              <img src={closeIcon} alt='closeIcon' />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
              <NotificationItem type="default" value="New course available" />
              <NotificationItem type="default" value="New course available" />
              <NotificationItem type="urgent" html={ getLatestNotification() } />
            </ul>
          </div>
        ) : (
          null
          )}
      </div>
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};
