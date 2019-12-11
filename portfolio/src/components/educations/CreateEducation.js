import React, { Component } from "react";
import M from "materialize-css";

class CreateEducation extends Component {
  state = {
    course: "",
    content: "",
    institute: "",
    fromDate: "",
    toDate: "",
    current: false,
    error: ""
  };

  componentDidMount() {
    var elems = document.querySelectorAll(".datepicker");
    M.Datepicker.init(elems, {});
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleCheck = e => {
    this.setState({
      [e.target.id]: e.target.checked
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    // Error checking before dispatching action and close modal
    if (
      this.state.course === "" ||
      this.state.content === "" ||
      this.state.institute === "" ||
      this.state.fromDate === "" ||
      (this.state.toDate === "" && this.state.current === false)
    ) {
      this.setState({
        ...this.state,
        error: "All education fields are required."
      });
    } else {
      this.props.onCreate(this.state);
      this.setState({
        course: "",
        content: "",
        institute: "",
        fromDate: "",
        toDate: "",
        error: ""
      });
    }
  };

  render() {
    return (
      <div className="section center">
        <div className="row">
          <div className="col m12 s12">
            <form onSubmit={this.handleSubmit} className="white">
              <h5>Create Education</h5>
              <div className="grey-text">to be part of your Portfolio</div>

              <p>
                <label>
                  <input
                    type="checkbox"
                    id="current"
                    onChange={this.handleCheck}
                  />
                  <span>Currently Study Here</span>
                </label>
              </p>

              <div className="input-field">
                <i className="material-icons prefix">school</i>
                <label htmlFor="institute">Institute</label>
                <input
                  type="text"
                  id="institute"
                  onChange={this.handleChange}
                  value={this.state.institute}
                />
              </div>

              <div className="input-field">
                <i className="material-icons prefix"></i>
                <label htmlFor="course">Course</label>
                <input
                  type="text"
                  id="course"
                  onChange={this.handleChange}
                  value={this.state.course}
                />
              </div>

              <div className="input-field">
                <i className="material-icons prefix">date_range</i>
                <label htmlFor="fromDate" className="active">
                  From
                </label>
                <input
                  type="date"
                  id="fromDate"
                  onChange={this.handleChange}
                  value={this.state.fromDate}
                />
              </div>

              <div className="input-field">
                <i className="material-icons prefix"></i>
                <label htmlFor="toDate" className="active">
                  To
                </label>
                <input
                  disabled={this.state.current}
                  type="date"
                  id="toDate"
                  onChange={this.handleChange}
                  value={this.state.toDate}
                />
              </div>

              <div className="input-field">
                <i className="material-icons prefix">book</i>
                <label htmlFor="content">Description</label>
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
        </div>
      </div>
    );
  }
}

export default CreateEducation;
