import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { emailSignIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";

class SignIn extends Component {
  state = {
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
    this.props.emailSignIn(this.state);
  };

  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/dashboard/signed_in" />;

    return (
      <div className="container center">
        <div className="row">
          <div className="col offset-m3 m6 s12">
            <form onSubmit={this.handleSubmit} className="white auth-form">
              <h5>Sign In</h5>
              <div className="grey-text">to continue to Portfolio Manager</div>
              <br />
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

              <div className="red-text">{authError}</div>

              <div className="input-field">
                <button className="btn z-depth-0 blue darken-2 form-btn waves-effect waves-light">
                  Sign In
                </button>
              </div>

              <span className="grey-text">
                Not a member? <Link to="/register">Register</Link>
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
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    emailSignIn: credentials => dispatch(emailSignIn(credentials))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
