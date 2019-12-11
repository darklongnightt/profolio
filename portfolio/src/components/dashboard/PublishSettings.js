import React, { Component } from "react";

class PublishSettings extends Component {
  state = {
    employments: true,
    educations: true,
    projects: true,
    customs: true
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.checked
    });
  };

  handleSubmit = e => {
    console.log(this.state);
  };

  render() {
    return (
      <div className="section">
        <div className="card z-depth-0 modal-container">
          <div className="card-content">
            <h5 className="bold">
              <i className="fa fa-cog nav-icon" aria-hidden="true"></i>
              Publish Settings
            </h5>

            <div className="switch">
              <span className="blue-text brand-text bold publish-section">
                Education Section
              </span>

              <label>
                <input
                  type="checkbox"
                  id="educations"
                  onChange={this.handleChange}
                  checked={this.state.educations}
                />
                <span className="lever"></span>
              </label>
            </div>

            <div className="switch">
              <span className="blue-text brand-text bold publish-section">
                Employment Section
              </span>

              <label>
                <input
                  type="checkbox"
                  id="employments"
                  onChange={this.handleChange}
                  checked={this.state.employments}
                />
                <span className="lever"></span>
              </label>
            </div>

            <div className="switch">
              <span className="blue-text brand-text bold publish-section">
                Project Section
              </span>

              <label>
                <input
                  type="checkbox"
                  id="projects"
                  onChange={this.handleChange}
                  checked={this.state.projects}
                />
                <span className="lever"></span>
              </label>
            </div>

            <div className="switch">
              <span className="blue-text brand-text bold publish-section">
                Custom Sections
              </span>

              <label>
                <input
                  type="checkbox"
                  id="customs"
                  onChange={this.handleChange}
                  checked={this.state.customs}
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
      </div>
    );
  }
}

export default PublishSettings;
