import React from "react";
import moment from "moment";

const TodayViews = props => {
  const { views } = props;
  const today = moment().format("YYYY-MM-DD");
  return (
    <div className="card z-depth-0 modal-container">
      <div className="card-content center">
        <h4>Profile Views Today</h4>
        <div className="grey-text">{today}</div>
        <h3 className="blue-text brand-text">{views}</h3>
      </div>
    </div>
  );
};

export default TodayViews;
