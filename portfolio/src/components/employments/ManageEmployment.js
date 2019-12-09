import React, { Component } from "react";
import ViewEmployment from "./ViewEmployment";
import EditEmployment from "./EditEmployment";

class ManageEmployment extends Component {
  state = {
    mode: "VIEW"
  };

  handleSetMode = mode => {
    this.setState({ mode });
  };

  render() {
    const { employment, onDelete, onEdit } = this.props;
    
    if (employment) {
      switch (this.state.mode) {
        case "VIEW":
          return (
            <ViewEmployment
              employment={employment}
              onDelete={onDelete}
              onSetMode={this.handleSetMode}
            />
          );

        case "EDIT":
          return (
            <EditEmployment
              employment={employment}
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

export default ManageEmployment;
