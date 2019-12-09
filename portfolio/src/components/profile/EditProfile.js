import React, { Component } from "react";

class EditProfile extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    industry: "",
    summary: "",
    socialUrl: "",
    error: ""
  };

  constructor(props) {
    super(props);
    const { profile } = this.props;

    this.state = {
      firstName: profile.firstName || "",
      lastName: profile.lastName || "",
      email: profile.email || "",
      industry: profile.industry || "",
      summary: profile.summary || "",
      socialUrl: profile.socialUrl || "",
      photoUrl: profile.photoUrl || ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (
      this.state.firstName === "" ||
      this.state.lastName === "" ||
      this.state.email === ""
    ) {
      this.setState({
        ...this.state,
        error: "First name, last name and email are required."
      });
    } else {
      this.props.onEdit(this.state);
      this.props.onCloseModal();
    }
  };

  render() {
    const { profile } = this.props;

    if (profile) {
      return (
        <div className="row">
          <div className="col m12 s12">
            <h5 className="center">Edit Profile</h5>

            <form onSubmit={this.handleSubmit}>
              <br />
              <div className="row">
                <div className="col s12 m6">
                  <div className="input-field">
                    <i className="material-icons prefix">account_circle</i>
                    <label htmlFor="firstName" className="active">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      onChange={this.handleChange}
                      value={this.state.firstName}
                    />
                  </div>
                </div>

                <div className="col s12 m6">
                  <div className="input-field">
                    <i className="material-icons prefix"></i>
                    <label htmlFor="lastName" className="active">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      onChange={this.handleChange}
                      value={this.state.lastName}
                    />
                  </div>
                </div>
              </div>

              <div className="input-field">
                <i className="material-icons prefix">email</i>
                <label htmlFor="email" className="active">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  onChange={this.handleChange}
                  value={this.state.email}
                />
              </div>

              <div className="input-field">
                <i className="material-icons prefix">insert_link</i>
                <label htmlFor="socialUrl" className="active">
                  LinkedIn
                </label>
                <input
                  type="text"
                  id="socialUrl"
                  onChange={this.handleChange}
                  value={this.state.socialUrl}
                />
              </div>

              <div className="input-field">
                <i className="material-icons prefix">business</i>
                <label htmlFor="industry" className="active">
                  Industry
                </label>
                <input
                  type="text"
                  id="industry"
                  onChange={this.handleChange}
                  value={this.state.industry}
                />
              </div>

              <div className="input-field">
                <i className="material-icons prefix">book</i>
                <label htmlFor="summary" className="active">
                  Summary
                </label>
                <textarea
                  id="summary"
                  className="materialize-textarea"
                  onChange={this.handleChange}
                  value={this.state.summary}
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
        </div>
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

export default EditProfile;
