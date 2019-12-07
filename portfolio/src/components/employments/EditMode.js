import React, { Component } from "react";

class EditMode extends Component {
  state = {
    title: "",
    content: "",
    company: "",
    fromDate: "",
    toDate: "",
    current: false,
    error: "",
    id: ""
  };

  constructor(props) {
    super(props);
    const { employment } = this.props;

    this.state = {
      title: employment.title || "",
      content: employment.content || "",
      company: employment.company || "",
      fromDate: employment.fromDate || "",
      toDate: employment.toDate || "",
      current: employment.current || false,
      id: employment.id || "",
      createdAt: employment.createdAt || ""
    };
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

    if (
      this.state.title === "" ||
      this.state.content === "" ||
      this.state.company === "" ||
      this.state.fromDate === "" ||
      (this.state.toDate === "" && this.state.current === false)
    ) {
      this.setState({
        ...this.state,
        error: "Employment title and content are required."
      });
    } else {
      this.props.onEdit(this.state);
      this.props.onSetMode("VIEW");
    }
  };

  render() {
    const { employment, onDelete, onSetMode } = this.props;

    if (employment) {
      return (
        <React.Fragment>
          <a
            href="# "
            className="right grey-text text-darken-2 action-icon"
            onClick={() => onDelete(employment.id)}
          >
            <i className="material-icons">delete</i>
          </a>
          <a
            href="# "
            className="right blue-text action-icon"
            onClick={() => onSetMode("VIEW")}
          >
            <i className="material-icons">chrome_reader_mode</i>
          </a>

          <h5>Edit Employment</h5>

          <form onSubmit={this.handleSubmit} className="white">

            <p>
              <label>
                <input
                  type="checkbox"
                  id="current"
                  checked={this.state.current}
                  onChange={this.handleCheck}
                />
                <span>Currently Work Here</span>
              </label>
            </p>

            <br/>
            <div className="input-field">
              <i className="material-icons prefix">business_center</i>
              <label htmlFor="title" className="active">Job Title</label>
              <input
                type="text"
                id="title"
                onChange={this.handleChange}
                value={this.state.title}
              />
            </div>

            <div className="input-field">
              <i className="material-icons prefix"></i>
              <label htmlFor="company" className="active">Company</label>
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
              <label htmlFor="content" className="active">Job Description</label>
              <textarea
                id="content"
                className="materialize-textarea"
                onChange={this.handleChange}
                value={this.state.content}
              ></textarea>
            </div>

            <div className="red-text">{this.state.error}</div>

            <div className="input-field center">
              <button className="btn z-depth-0 blue darken-2 form-btn waves-effect waves-light">
                <i className="material-icons">send</i>
              </button>
            </div>
          </form>
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

export default EditMode;
