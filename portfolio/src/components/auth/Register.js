import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Register extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
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
    const { auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;

    return (
      <div className="container">
        <div className="row">
          <div className="col offset-m2 m8 s12 center">
            <form onSubmit={this.handleSubmit} className="white auth-form">
              <h5>Register</h5>

              <div className="row">
                <div className="col s12 m6">
                  <div className="input-field">
                    <i className="material-icons prefix">account_circle</i>
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="col s12 m6">
                  <div className="input-field">
                    <i className="material-icons prefix"></i>
                    <label htmlFor="email">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="input-field">
                <i className="material-icons prefix">email</i>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={this.handleChange} />
              </div>

              <div className="input-field">
                <i className="material-icons prefix">vpn_key</i>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  onChange={this.handleChange}
                />
              </div>

              <div className="input-field">
                <i className="material-icons prefix"></i>
                <label htmlFor="passwordVerify">Confirm Password</label>
                <input
                  type="password"
                  id="passwordVerify"
                  onChange={this.handleChange}
                />
              </div>

              <div className="input-field">
                <button className="btn z-depth-0 blue darken-2 form-btn">
                  Register
                </button>
              </div>

              <span className="grey-text">
                Already a member? <Link to="/signin">Sign In</Link>
              </span>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Register);
