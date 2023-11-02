import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';

export default function Notifications() {
  return (
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
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    </div>
  );
}
