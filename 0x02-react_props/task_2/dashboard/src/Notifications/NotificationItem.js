import React, { Fragment } from "react";
import { getLatestNotification } from '../utils/utils';


export default function NotificationItem({ type, value, html }) {
  return (
    <Fragment>
      {type && value ? <li data-notification-type={type}>{value}</li> : null}
      {html ? <li dangerouslySetInnerHTML={{__html: html}} /> : null}
    </Fragment>
  );
}
