import React from "react";
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img
        src="https://www.freeiconspng.com/thumbs/volunteer-icon/volunteer-icon-10.png"
        width="150"
        alt="a logo"
      />
      <div>
        <ul className="menu_list">
          <li className="nav-item home">
            <a href="/">Home</a>
          </li>
          <li className="nav-item work">
            <a href="/volunteer">Volunteer</a>
          </li>
          <li className="nav-item services">
            <a href="/donation">Donation</a>
          </li>
          <li className="nav-item services">
            <a href="/contact">Contact</a>
          </li>
          <li className="nav-item register">
            <a href="/Register">Register</a>
          </li>
          <li className="nav-item sign-in">
            <a href="/Login">Sign In</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
