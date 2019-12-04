import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <div>
      <ul className="right">
        <li>
          <NavLink to="/register">
            <i className="fa fa-user-plus nav-icon" aria-hidden="true"></i>
            Register
          </NavLink>
        </li>
        <li>
          <NavLink to="/signin">
            <i className="fa fa-sign-in nav-icon" aria-hidden="true"></i>
            Sign In
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SignedOutLinks;
