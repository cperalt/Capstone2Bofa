import React from "react";
import "../Styles/Menu.css";
import { Link, NavLink } from "react-router-dom";

function Menu() {
  return (
    <>
      <div className="Navbars">
        <ul className="NavbarWrappers">
          <li className="NavbarElement">
            <NavLink className="link" to="/">
              Home
            </NavLink>
          </li>
          <li className="NavbarElement">
            <NavLink className="link" to="/volunteer">
              Volunteer
            </NavLink>
          </li>
          <li className="NavbarElement">
            <NavLink className="link" to="/donation">
              Donation
            </NavLink>
          </li>
          <li className="NavbarElement">
            <NavLink className="link" to="/about">
              About
            </NavLink>
          </li>
          <li className="NavbarElement">
            <NavLink className="link" to="/contact">
              Contact
            </NavLink>
          </li>
          <li className="NavbarElement">
            <NavLink className="link" to="/sign-in">
              Sign In
            </NavLink>
          </li>
          <li className="Navbutton">
            <NavLink className="linkbtn" to="/sign-up">
              Sign Up
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Menu;
