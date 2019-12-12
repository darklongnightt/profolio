import React from "react";
import moment from "moment";

const Notifications = props => {
  const { notifications } = props;

  return (
    <React.Fragment>
      {notifications &&
        notifications.map(item => {
          return (
            <li key={item.id}>
              <div className="notification-item">
                <div>
                  <b>{item.user}</b> {item.content}
                </div>
                <div className="grey-text">
                  {moment(item.time.toDate()).fromNow()}
                </div>
              </div>
              <div className="divider"></div>
            </li>
          );
        })}
    </React.Fragment>
  );
};

export default Notifications;
