import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { emailSignIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";
import M from "materialize-css";
import header1 from "../../img/1 Intro.jpg";
import header2 from "../../img/2 Dashboard.PNG";
import header3 from "../../img/3 Profile.PNG";
import header4 from "../../img/4 Timeline.PNG";
import header5 from "../../img/5 Contact.PNG";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  componentDidMount() {
    var elems = document.querySelectorAll(".slider");
    M.Slider.init(elems, {});
  }

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
      <div className="section center container">
        <div className="row">
          <div className="col offset-m2 m8 s12">
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

        <div className="row">
          <div className="col offset-m2 m8 s12">
            <div className="slider">
              <ul className="slides brand-text">
                <li>
                  <img className="slide-img" src={header1} alt="" />
                  <div className="caption center-align">
                    <h3>Developed With</h3>
                    <h5 className="light grey-text text-lighten-3">
                      React - Redux - Firebase
                    </h5>
                  </div>
                </li>
                <li>
                  <img className="slide-img" src={header2} alt="" />
                  <div className="caption black-text left-align">
                    <h3>Intuitive Dashboard</h3>
                    <h5 className="light grey-text text-darken-3">
                      Customize your portfolio sections
                    </h5>
                  </div>
                </li>

                <li>
                  <img className="slide-img" src={header3} alt="" />
                  <div className="caption right-align">
                    <h3>Publish Your Portfolio</h3>
                    <h5 className="light grey-text text-darken-3">
                      Let your employers know
                    </h5>
                  </div>
                </li>

                <li>
                  <img className="slide-img" src={header4} alt="" />
                  <div className="caption left-align black-text">
                    <h3>Your personalized timeline</h3>
                  </div>
                </li>

                <li>
                  <img className="slide-img" src={header5} alt="" />
                  <div className="caption left-align black-text">
                    <h3>Ease of contact</h3>
                  </div>
                </li>
              </ul>
            </div>
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
