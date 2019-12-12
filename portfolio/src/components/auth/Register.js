import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { emailRegister } from "../../store/actions/authActions";
import M from "materialize-css";
import header1 from "../../img/1 Intro.jpg";
import header2 from "../../img/2 Dashboard.PNG";
import header3 from "../../img/3 Profile.PNG";
import header4 from "../../img/4 Timeline.PNG";
import header5 from "../../img/5 Contact.PNG";

class Register extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    error: ""
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
    if (auth.uid) return <Redirect to="/dashboard/registered" />;
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
                    <label htmlFor="lastName">Last Name</label>
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
                <button className="btn z-depth-0 blue darken-2 form-btn waves-effect waves-light">
                  Register
                </button>
              </div>

              <span className="grey-text">
                Already a member? <Link to="/signin">Sign In</Link>
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
