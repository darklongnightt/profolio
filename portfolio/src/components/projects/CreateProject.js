import React, { Component } from "react";

class CreateProject extends Component {
  state = {
    title: "",
    content: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="container center">
        <div className="row">
          <div className="col offset-m3 m6 s12">
            <form onSubmit={this.handleSubmit} className="white auth-form">
              <h5>Create Project</h5>
              <div className="grey-text">to be part of your Portfolio</div>
              <div className="input-field">
                <i className="material-icons prefix">title</i>
                <label htmlFor="title">Project Title</label>
                <input type="text" id="title" onChange={this.handleChange} />
              </div>

              <div className="input-field">
                <i className="material-icons prefix">book</i>
                <label htmlFor="content">Project Content</label>
                <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
              </div>

              <div className="input-field">
                <button className="btn z-depth-0 blue darken-2 form-btn">
                  <i className="material-icons">send</i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateProject;
