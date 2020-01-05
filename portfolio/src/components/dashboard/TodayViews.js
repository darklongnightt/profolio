import React from "react";
import moment from "moment";

const TodayViews = props => {
  const { views } = props;
  const today = moment().format("YYYY-MM-DD");
  return (
    <div>
      <h5 className="red-text">Views Today</h5>
      <div className="grey-text">{today}</div>
      <h4 className="blue-text brand-text">{views}</h4>
    </div>
  );
};

export default TodayViews;
