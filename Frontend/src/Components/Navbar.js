import React from "react";
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img
        src="https://www.compassus.com/wp-content/uploads/2023/01/How-to-Become-a-Hospice-Volunteer-Logo-e1672963939224-300x239.png"
        width="150"
        alt="a logo"
      />
      <div>
        <ul className="menu_list">
          <li className="nav-item home">
            <a href="/">HOME</a>
          </li>
          <li className="nav-item work">
            <a href="/volunter">VOLUNTEER</a>
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
