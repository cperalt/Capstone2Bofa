import React from "react";
import "../Styles/Navbar.css";
import logo from "../hohlogoo.png";

const Navbar = () => {
  return (
    <nav className="navbar" aria-label="Main Navigation">
      <a href="/" aria-label="Homepage">
        <img className="hohlogo" src={logo} width="190" alt="HOH Logo" />
      </a>
      <div>
        <ul className="menu_list">
          <li className="nav-item home">
            <a href="/" aria-label="Home">
              HOME
            </a>
          </li>
          <li className="nav-item work">
            <a href="/volunteer" aria-label="Volunteer">
              VOLUNTEER
            </a>
          </li>
          <li className="nav-item services">
            <a href="/donation" aria-label="Donation">
              DONATION
            </a>
          </li>
          <li className="nav-item services">
            <a href="/contact" aria-label="Contact">
              CONTACT
            </a>
          </li>
          <li className="nav-item register">
            <a href="/register" aria-label="Register">
              REGISTER
            </a>
          </li>
          <li className="nav-item sign-in">
            <a href="/login" aria-label="Sign In">
              SIGN IN
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
