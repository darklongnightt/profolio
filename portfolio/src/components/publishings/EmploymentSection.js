import React from "react";
import moment from "moment";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import UnavailableError from "./UnavailableError";

const EmploymentSection = props => {
  const { employments, active } = props;
  const colors = ["#e57373", "#64b5f6 ", "#66bb6a", "#fbc02d", "1de9b6"];
  if (active && employments.length > 0) {
    return (
      <div className="center">
        <h4 className="grey-text">Employment History</h4>
        <Timeline lineColor={"#ddd"}>
          {employments &&
            employments.map(employment => {
              var color = colors[Math.floor(Math.random() * colors.length)];
              console.log(color);
              const date = `${moment(employment.fromDate).format(
                "MMMM YYYY"
              )} - 
            ${
              employment.current === true
                ? "Present"
                : moment(employment.toDate).format("MMMM YYYY")
            }`;

              return (
                <TimelineItem
                  key={employment.id}
                  dateText={date}
                  dateInnerStyle={{ background: `${color}`, color: "white" }}
                >
                  <h3>{employment.title}</h3>
                  <h4>{employment.company}</h4>
                  <p className="grey-text">{employment.content}</p>
                </TimelineItem>
              );
            })}
        </Timeline>
      </div>
    );
  } else {
    return <UnavailableError />;
  }
};

export default EmploymentSection;
