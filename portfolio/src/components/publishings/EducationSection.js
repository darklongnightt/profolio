import React from "react";
import moment from "moment";
import error from "../../img/error.png";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";

const EducationSection = props => {
  const { educations, active } = props;
  const colors = ["#e57373", "#64b5f6 ", "#66bb6a", "#fbc02d", "1de9b6"];

  if (active && educations.length > 0) {
    return (
      <div className="center">
        <h4 className="grey-text">Education History</h4>
        <Timeline lineColor={"#ddd"}>
          {educations &&
            educations.map(education => {
              var color = colors[Math.floor(Math.random() * colors.length)];
              console.log(color);
              const date = `${moment(education.fromDate).format("MMMM YYYY")} - 
              ${
                education.current === true
                  ? "Present"
                  : moment(education.toDate).format("MMMM YYYY")
              }`;

              return (
                <TimelineItem
                  key={education.id}
                  dateText={date}
                  dateInnerStyle={{ background: `${color}`, color: "white" }}
                >
                  <h3>{education.institute}</h3>
                  <h4>{education.course}</h4>
                  <p className="grey-text">{education.content}</p>
                </TimelineItem>
              );
            })}
        </Timeline>
      </div>
    );
  } else {
    return <img src={error} className="auth-form" />;
  }
};

export default EducationSection;
