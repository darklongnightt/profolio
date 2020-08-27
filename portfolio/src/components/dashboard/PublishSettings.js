import React, { Component } from "react";
import { connect } from "react-redux";
import { updateSettings } from "../../store/actions/profileActions";
import M from "materialize-css";

class PublishSettings extends Component {
  state = {
    publishEmployments: true,
    publishEducations: true,
    publishProjects: true,
    publishCustoms: true,
  };

  constructor(props) {
    super(props);
    const { profile } = this.props;
    this.state = {
      publishEmployments: true && profile.publishEmployments,
      publishEducations: true && profile.publishEducations,
      publishProjects: true && profile.publishProjects,
      publishCustoms: true && profile.publishCustoms,
    };
    M.AutoInit();
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.checked,
    });
  };

  handleSubmit = (e) => {
    const err = this.props.updateSettings(this.state);
    if (!err) {
      M.toast({ html: "Updated profile settings!" });
    } else {
      M.toast({ html: "Error while updating profile settings!" });
    }
  };

  render() {
    return (
      <div className="card z-depth-0 modal-container">
        <div className="card-content">
          <h5 className="bold center">Profile Settings</h5>
          <br />
            <div className="switch">
              <span className="blue-text brand-text bold publish-section">
                Show My Educations
              </span>

              <label>
                <input
                  type="checkbox"
                  id="publishEducations"
                  onChange={this.handleChange}
                  checked={this.state.publishEducations}
                />
                <span className="lever"></span>
              </label>
            </div>

            <div className="switch">
              <span className="blue-text brand-text bold publish-section">
                Show My Employments
              </span>

              <label>
                <input
                  type="checkbox"
                  id="publishEmployments"
                  onChange={this.handleChange}
                  checked={this.state.publishEmployments}
                />
                <span className="lever"></span>
              </label>
            </div>

            <div className="switch">
              <span className="blue-text brand-text bold publish-section">
                Show My Projects
              </span>

              <label>
                <input
                  type="checkbox"
                  id="publishProjects"
                  onChange={this.handleChange}
                  checked={this.state.publishProjects}
                />
                <span className="lever"></span>
              </label>
            </div>

            <div className="switch">
              <span className="blue-text brand-text bold publish-section">
                Show Custom Section
              </span>

              <label>
                <input
                  type="checkbox"
                  id="publishCustoms"
                  onChange={this.handleChange}
                  checked={this.state.publishCustoms}
                />
                <span className="lever"></span>
              </label>
            </div>
        </div>

        <br />

        <button
          className="btn-floating halfway-fab btn-large waves-effect waves-light red lighten-1"
          onClick={this.handleSubmit}
        >
          <i className="material-icons">publish</i>
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateSettings: (settings) => dispatch(updateSettings(settings)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PublishSettings);
