import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar.js";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import Register from "./components/auth/Register.js";
import CreateProject from "./components/projects/CreateProject.js";

const App = (props) => {
  const auth = props.auth;
  if (auth.isLoaded) {
    return (
      <BrowserRouter>
        <div>
          <Navbar />

          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/signin" component={SignIn} />
            <Route path="/register" component={Register} />
            <Route path="/create_project" component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  } else {
    return <div className="container center">Loading App...</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(App);
