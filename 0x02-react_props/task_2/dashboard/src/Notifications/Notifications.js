import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

export default function Notifications() {
  return (
    <>
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
          <NotificationItem />
        </ul>
      </div>
    </>
  );
}
