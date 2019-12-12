import React from "react";
import moment from "moment";

const Notifications = props => {
  const { notifications, auth } = props;

  if (notifications && notifications.length > 0) {
    return (
      <React.Fragment>
        {notifications &&
          notifications.map(item => {
            return (
              <li key={item.id}>
                <div className="notification-item">
                  <div>
                    <b>{item.userId === auth.uid ? "You" : item.user}</b>{" "}
                    {item.content}
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
  } else {
    return (
      <li className="notification-item">
        You have no notifications currently.
      </li>
    );
  }
};

export default Notifications;
