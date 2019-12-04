import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { emailRegister } from "../../store/actions/authActions";

class Register extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    error: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.firstName === "" || this.state.lastName === "") {
      console.log("HERE");
      this.setState({
        ...this.state,
        error: "First name and last name are required."
      });
    } else {
      this.props.emailRegister(this.state);
    }
  };

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    console.log(this.state.error);

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

              <div className="red-text">
                {authError ? authError : this.state.error}
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
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    emailRegister: newUser => dispatch(emailRegister(newUser))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
