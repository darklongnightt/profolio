import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Dashboard from "./components/dashboard/Dashboard";
import SignIn from "./components/auth/SignIn";
import Register from "./components/auth/Register";
import ManageProfile from "./components/profile/ManageProfile";
import MainPage from "./components/publishings/MainPage";

const App = props => {
  const auth = props.auth;
  if (auth.isLoaded) {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route path="/dashboard/:action" component={Dashboard} />
            <Route path="/signin" component={SignIn} />
            <Route path="/register" component={Register} />
            <Route path="/manage_profile" component={ManageProfile} />
            <Route path="/publishings/:id" component={MainPage} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
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
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(App);
