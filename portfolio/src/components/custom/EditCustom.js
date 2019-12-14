import React, { Component } from "react";

class EditCustom extends Component {
  state = {
    title: "",
    content: "",
    error: "",
    id: ""
  };

  constructor(props) {
    super(props);
    const { custom } = this.props;

    this.state = {
      title: custom.title || "",
      content: custom.content || "",
      id: custom.id || "",
      createdAt: custom.createdAt
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.title === "" || this.state.content === "") {
      this.setState({
        ...this.state,
        error: "Custom title and content are required."
      });
    } else {
      this.props.onEdit(this.state);
      this.props.onSetMode("VIEW");
    }
  };

  render() {
    const { custom, onDelete, onSetMode, active } = this.props;

    if (active) {
      return (
        <div>
          <a
            href="#!"
            className="right grey-text text-darken-2 action-icon"
            onClick={() => onDelete(custom.id)}
          >
            <i className="material-icons">delete</i>
          </a>
          <a
            href="#!"
            className="right blue-text action-icon"
            onClick={() => onSetMode("VIEW")}
          >
            <i className="material-icons">chrome_reader_mode</i>
          </a>

          <h5>Edit Custom</h5>

          <br />
          <form onSubmit={this.handleSubmit} className="white">
            <div className="input-field">
              <i className="material-icons prefix">title</i>
              <label className="active" htmlFor="title">
                Custom Title
              </label>
              <input
                type="text"
                id="title"
                onChange={this.handleChange}
                value={this.state.title}
              />
            </div>

            <div className="input-field">
              <i className="material-icons prefix">book</i>
              <label className="active" htmlFor="content">
                Custom Content
              </label>
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
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default EditCustom;
