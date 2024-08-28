import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import "../Styles/Navbar.css";
import Menu from "./Menu";

function Navbar({ clicked, isClicked }) {
  const handleClicked = () => {
    isClicked(!clicked);
    console.log("clicked");
  };

  return (
    <div className="Nav">
      <ul className="NavbarWrapper">
        <li className="NavLogo">
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            HOH
          </Link>
        </li>
        <li className="NavElements">
          <NavLink className="Link" to="/" exact>
            Home
          </NavLink>
        </li>
        <li className="NavElements">
          <NavLink className="Link" to="/volunteer">
            Volunteer
          </NavLink>
        </li>
        <li className="NavElements">
          <NavLink className="Link" to="/donation">
            Donation
          </NavLink>
        </li>
        <li className="NavElements">
          <NavLink className="Link" to="/about">
            About
          </NavLink>
        </li>
        <li className="NavElements">
          <NavLink className="Link" to="/contact">
            Contact
          </NavLink>
        </li>
        <li className="NavButton">
          <NavLink className="Link" to="/sign-up">
            Sign Up
          </NavLink>
        </li>
        <li
          className="NavElements"
          style={{ float: "right", margin: "-8px 2px 1px 2px" }}
        >
          <NavLink className="Link" to="/sign-in">
            Sign In
          </NavLink>
        </li>
      </ul>
      {!clicked ? (
        <GiHamburgerMenu onClick={handleClicked} className="Icon" />
      ) : (
        <ImCross onClick={handleClicked} className="Icon" />
      )}
    </div>
  );
}

export default Navbar;
