import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar.js";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import Register from "./components/auth/Register.js";
import CreateProject from "./components/projects/CreateProject.js";

function App() {
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
}

export default App;
