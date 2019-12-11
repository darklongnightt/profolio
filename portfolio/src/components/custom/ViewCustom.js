import React from "react";
import moment from "moment";

const ViewCustom = props => {
  const { custom, onDelete, onSetMode, active } = props;

  if (active) {
    return (
      <div>
        <a
          href="#!"
          className="right grey-text text-darken-2 action-icon"
          onClick={() => onDelete(custom.id)}
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

        <div className="large-text">{custom.title}</div>

        <br />
        <div className="divider"></div>

        <div>
          <i className="fa fa-list-ul action-icon" aria-hidden="true"></i>
          {custom.content}
        </div>

        <br />
        <div className="grey-text brand-text">
          <div>
            {custom.modifiedAt &&
              "Modified " + moment(custom.modifiedAt.toDate()).calendar()}
          </div>
          <div>Created {moment(custom.createdAt.toDate()).calendar()}</div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default ViewCustom;
