import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import Register from "./components/auth/Register";
import CreateProject from "./components/projects/CreateProject";
import ManageProjects from "./components/projects/ManageProjects";
import ManageEmployments from "./components/employments/ManageEmployments";
import ManageProfile from "./components/profile/ManageProfile";

const App = props => {
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
            <Route path="/manage_projects" component={ManageProjects} />
            <Route path="/manage_employments" component={ManageEmployments} />
            <Route path="/manage_education" />
            <Route path="/manage_profile" component={ManageProfile} />
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
