import React from "react";
import PropTypes from 'prop-types';


class NotificationItem extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const{ type, value, html, markAsRead, id } = this.props;
    return (
      <React.Fragment>
        {type && value ? 
          <li
            onClick={()=> markAsRead(id)}
            data-notification-type={type} >{value}
          </li>
        : null}
        {html ?
          <li
            onClick={()=> markAsRead(id)}
            data-notification-type="urgent"
            dangerouslySetInnerHTML={{__html: html}}
          />
        : null}
      </React.Fragment>
    );
  }
}

NotificationItem.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  __html: PropTypes.shape({ html: PropTypes.string }),
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {},
  id: 0,
};

export default NotificationItem;
