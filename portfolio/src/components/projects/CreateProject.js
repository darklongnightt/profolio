import React, { Component } from "react";

class CreateProject extends Component {
  state = {
    title: "",
    content: "",
    error: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    // Error checking before dispatching action and close modal
    if (this.state.title === "" || this.state.content === "") {
      this.setState({
        ...this.state,
        error: "Project title and content are required."
      });
    } else {
      this.props.onCreate(this.state);
      this.setState({
        title: "",
        content: "",
        error: ""
      });
    }
  };

  render() {
    return (
      <div className="section center">
        <form onSubmit={this.handleSubmit} className="white">
          <h5>Create Project</h5>
          <div className="grey-text">to be part of your Portfolio</div>
          <div className="input-field">
            <i className="material-icons prefix">title</i>
            <label htmlFor="title">Project Title</label>
            <input
              type="text"
              id="title"
              onChange={this.handleChange}
              value={this.state.title}
            />
          </div>

          <div className="input-field">
            <i className="material-icons prefix">book</i>
            <label htmlFor="content">Project Content</label>
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.handleChange}
              value={this.state.content}
            ></textarea>
          </div>

          <div className="red-text">{this.state.error}</div>

          <div className="input-field">
            <button className="btn z-depth-0 blue darken-2 form-btn waves-effect waves-light">
              <i className="material-icons">send</i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateProject;
