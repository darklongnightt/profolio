import React from "react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import UnavailableError from "./UnavailableError";

const CustomSection = props => {
  const { customs, active } = props;
  const colors = ["#e57373", "#64b5f6 ", "#66bb6a", "#fbc02d", "1de9b6"];
  const date = <i className="fa fa-trophy" aria-hidden="true"></i>;

  if (active && customs.length > 0) {
    return (
      <div className="center">
        <h4 className="grey-text">Others</h4>
        <Timeline lineColor={"#ddd"}>
          {customs &&
            customs.map(custom => {
              var color = colors[Math.floor(Math.random() * colors.length)];

              return (
                <TimelineItem
                  key={custom.id}
                  dateText={date}
                  dateInnerStyle={{ background: `${color}`, color: "white" }}
                >
                  <h3>{custom.title}</h3>
                  <p className="grey-text">{custom.content}</p>
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

export default CustomSection;
