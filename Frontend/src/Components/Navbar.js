import React from "react";
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img
        src="https://files.slack.com/files-tmb/T5VCY49B3-F07KDLZQ2TV-40c8b6546d/hohlogoo_480.png"
        width="150"
        alt="a logo"
      />
      <div>
        <ul className="menu_list">
          <li className="nav-item home">
            <a href="/">HOME</a>
          </li>
          <li className="nav-item work">
            <a href="/volunteer">VOLUNTEER</a>
          </li>
          <li className="nav-item services">
            <a href="/donation">DONATION</a>
          </li>
          <li className="nav-item services">
            <a href="/contact">CONTACT</a>
          </li>
          <li className="nav-item register">
            <a href="/Register">REGISTER</a>
          </li>
          <li className="nav-item sign-in">
            <a href="/Login">SIGN IN</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
