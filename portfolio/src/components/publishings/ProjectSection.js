import React from "react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import UnavailableError from "./UnavailableError";

const ProjectSection = props => {
  const { projects, active } = props;
  const colors = ["#e57373", "#64b5f6 ", "#66bb6a", "#fbc02d", "1de9b6"];
  const date = <i className="material-icons">code</i>;

  if (active && projects.length > 0) {
    return (
      <div className="center">
        <h4 className="grey-text">Project History</h4>
        <Timeline lineColor={"#ddd"}>
          {projects &&
            projects.map(project => {
              var color = colors[Math.floor(Math.random() * colors.length)];

              return (
                <TimelineItem
                  key={project.id}
                  dateText={date}
                  dateInnerStyle={{ background: `${color}`, color: "white" }}
                >
                  <h3>{project.title}</h3>
                  <p className="grey-text">{project.content}</p>
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

export default ProjectSection;
