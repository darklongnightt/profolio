import React, { Component } from "react";
import M from "materialize-css";

class CreateEmployment extends Component {
  state = {
    title: "",
    content: "",
    company: "",
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
      this.state.title === "" ||
      this.state.content === "" ||
      this.state.company === "" ||
      this.state.fromDate === "" ||
      (this.state.toDate === "" && this.state.current===false)
    ) {
      this.setState({
        ...this.state,
        error: "All employment fields are required."
      });
    } else {
      this.props.onCreate(this.state);
      this.setState({
        title: "",
        content: "",
        company: "",
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
              <h5>Create Employment</h5>
              <div className="grey-text">to be part of your Portfolio</div>

              <p>
                <label>
                  <input
                    type="checkbox"
                    id="current"
                    onChange={this.handleCheck}
                  />
                  <span>Currently Work Here</span>
                </label>
              </p>

              <div className="input-field">
                <i className="material-icons prefix">business_center</i>
                <label htmlFor="title">Job Title</label>
                <input
                  type="text"
                  id="title"
                  onChange={this.handleChange}
                  value={this.state.title}
                />
              </div>

              <div className="input-field">
                <i className="material-icons prefix"></i>
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  onChange={this.handleChange}
                  value={this.state.company}
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
                <label htmlFor="content">Job Description</label>
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

export default CreateEmployment;
