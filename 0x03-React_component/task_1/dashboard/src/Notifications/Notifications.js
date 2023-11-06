import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import { NotificationItemShape } from './NotificationItemShape';

export default function Notifications({ displayDrawer, listNotifications }) {
  return (
    <>
      <div className="notificationContainer">
        <div className="menuItem">
          <p>Your notifications</p>
        </div>
        {displayDrawer ? (
          <div className="Notifications">
            <button 
              style={{ background: "none", display: "flex", justifyContent: "flex-end", margin: "10px 10px 0 0", padding: "0", border: "none", cursor: "pointer", position: "absolute", top: "2px", right: "2px" }}
              aria-label="Close" 
              onClick={() => console.log('Close button has been clicked')}
            >
              <img src={closeIcon} alt='closeIcon' />
            </button>

            {listNotifications && listNotifications.length > 0 ? (
              <div>
                <p>Here is the list of notifications</p>
                <ul>
                  {listNotifications.map(({ id, type, value, html }) => (
                    <NotificationItem key={id} type={type} value={value} html={html} />
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
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
};
