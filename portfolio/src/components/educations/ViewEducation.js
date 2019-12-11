import React from "react";
import moment from "moment";

const ViewEducation = props => {
  const { education, onDelete, onSetMode } = props;
  return (
    <React.Fragment>
      <a
        href="#!"
        className="right grey-text text-darken-2 action-icon"
        onClick={() => onDelete(education.id)}
      >
        <i className="material-icons">delete</i>
      </a>
      <a
        href="#!"
        className="right blue-text action-icon"
        onClick={() => onSetMode("EDIT")}
      >
        <i className="material-icons">edit</i>
      </a>

      <div className="large-text">{education.course}</div>
      <div className="medium-text">{education.institute}</div>

      <br />
      <div className="divider"></div>

      <div className="grey-text">
        <i className="material-icons action-icon">date_range</i>
        {moment(education.fromDate).format("MMMM YYYY")} to{" "}
        {education.current === true
          ? "Present"
          : moment(education.toDate).format("MMMM YYYY")}
      </div>

      <div>
        <i className="material-icons action-icon">format_list_bulleted</i>
        {education.content}
      </div>

      <br />
      <div className="grey-text brand-text">
        <div>
          {education.modifiedAt &&
            "Modified " + moment(education.modifiedAt.toDate()).calendar()}
        </div>
        <div>Created {moment(education.createdAt.toDate()).calendar()}</div>
      </div>
    </React.Fragment>
  );
};

export default ViewEducation;
