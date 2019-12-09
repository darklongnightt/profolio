import React from "react";
import moment from "moment";

const ViewEmployment = props => {
  const { employment, onDelete, onSetMode } = props;
  return (
    <React.Fragment>
      <a
        href="# "
        className="right grey-text text-darken-2 action-icon"
        onClick={() => onDelete(employment.id)}
      >
        <i className="material-icons">delete</i>
      </a>
      <a
        href="# "
        className="right blue-text action-icon"
        onClick={() => onSetMode("EDIT")}
      >
        <i className="material-icons">edit</i>
      </a>

      <div>
        <i className="material-icons action-icon">business_center</i>
        <span className="large-text">{employment.title}</span>
        <span className="grey-text"> at </span>
        <span className="large-text">{employment.company}</span>
      </div>
      <br/>
      <div className="divider"></div>
      
      <div className="grey-text">
        <i className="material-icons action-icon">date_range</i>
        {moment(employment.fromDate).format("MMMM YYYY")} to{" "}
        {employment.current === true
          ? "Present"
          : moment(employment.toDate).format("MMMM YYYY")}
      </div>

      <div>
        <i className="material-icons action-icon">format_list_bulleted</i>
        {employment.content}
      </div>

      <br />
      <div className="grey-text brand-text">
        <div>
          {employment.modifiedAt &&
            "Modified " + moment(employment.modifiedAt.toDate()).calendar()}
        </div>
        <div>Created {moment(employment.createdAt.toDate()).calendar()}</div>
      </div>
    </React.Fragment>
  );
};

export default ViewEmployment;
