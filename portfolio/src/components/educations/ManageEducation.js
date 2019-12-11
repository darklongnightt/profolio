import React, { Component } from "react";
import ViewEducation from "./ViewEducation";
import EditEducation from "./EditEducation";

class ManageEducation extends Component {
  state = {
    mode: "VIEW"
  };

  handleSetMode = mode => {
    this.setState({ mode });
  };

  render() {
    const { education, onDelete, onEdit } = this.props;
    
    if (education) {
      switch (this.state.mode) {
        case "VIEW":
          return (
            <ViewEducation
              education={education}
              onDelete={onDelete}
              onSetMode={this.handleSetMode}
            />
          );

        case "EDIT":
          return (
            <EditEducation
              education={education}
              onDelete={onDelete}
              onSetMode={this.handleSetMode}
              onEdit={onEdit}
            />
          );

        default:
          console.log("Not a valid mode!");
      }
    } else {
      return (
        <div className="container center">
          <div className="preloader-wrapper big active preloader-margin">
            <div className="spinner-layer spinner-blue-only">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div>
              <div className="gap-patch">
                <div className="circle"></div>
              </div>
              <div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default ManageEducation;
