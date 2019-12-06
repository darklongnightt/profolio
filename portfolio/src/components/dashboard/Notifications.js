import React from "react";
import moment from "moment";

const Notifications = props => {
  const { notifications } = props;
  
  return (
    <div className="section">
      <div className="card z-depth-0 notification-board">
        <div className="card-content">
          <h5 className="bold">
            <i className="material-icons">notifications_none</i> Notifications
          </h5>
          <ul className="notifications brand-text">
            {notifications &&
              notifications.map(item => {
                return (
                  <li key={item.id}>
                    <span className="blue-text bold">{item.user}</span>
                    <span> {item.content}</span>
                    <div className="grey-text">{moment(item.time.toDate()).fromNow()}</div>
                    <br/>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
