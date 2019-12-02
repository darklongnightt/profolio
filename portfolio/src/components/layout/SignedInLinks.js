import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to="/create_project">New Project</NavLink></li>
        <li><NavLink to="/">Sign Out</NavLink></li>
        <li><NavLink to="/" className="btn btn-floating blue lighten-2">XK</NavLink></li>
      </ul>
    </div>
  );
};

export default SignedInLinks;
