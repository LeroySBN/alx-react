import React from "react";
import PropTypes from 'prop-types';


export default function NotificationItem({ type, value, html }) {
  return (
    <React.Fragment>
      {type && value ? <li data-notification-type={type}>{value}</li> : null}
      {html ? <li data-notification-type="urgent" dangerouslySetInnerHTML={{__html: html}} /> : null}
    </React.Fragment>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  __html: PropTypes.shape({ html: PropTypes.string }),
};

NotificationItem.defaultProps = {
  type: 'default',
};
