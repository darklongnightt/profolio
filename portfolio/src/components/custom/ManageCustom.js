import React, { Component } from "react";
import ViewCustom from "./ViewCustom";
import EditCustom from "./EditCustom";

class ManageCustom extends Component {
  state = {
    mode: "VIEW"
  };

  handleSetMode = mode => {
    this.setState({ mode });
  };

  render() {
    const { custom, onDelete, onEdit } = this.props;

    if (custom) {
      return (
        <React.Fragment>
          <ViewCustom
            custom={custom}
            onDelete={onDelete}
            onSetMode={this.handleSetMode}
            active={this.state.mode === "VIEW"}
            className="section-height"
          />

          <EditCustom
            custom={custom}
            onDelete={onDelete}
            onSetMode={this.handleSetMode}
            onEdit={onEdit}
            active={this.state.mode === "EDIT"}
            className="section-height"
          />
        </React.Fragment>
      );
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

export default ManageCustom;
