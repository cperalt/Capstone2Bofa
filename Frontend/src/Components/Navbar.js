import React from "react";
import "../Styles/Navbar.css";
import logo from "../hohlogoo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img className="hohlogo" src={logo} width="190" alt="a logo" />
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
