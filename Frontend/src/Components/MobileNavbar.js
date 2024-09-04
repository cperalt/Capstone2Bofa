import React, { useState, useEffect } from "react";
import "../Styles/Navbar.css";

const MobileNavbar = () => {
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);

  const handleMobileNavClick = () => {
    setMobileNavIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600) {
        setMobileNavIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="mobile-navbar">
      <img
        src="https://www.compassus.com/wp-content/uploads/2023/01/How-to-Become-a-Hospice-Volunteer-Logo-e1672963939224-300x239.png"
        width="150"
        alt="a logo"
      />
      <img
        className="mobile-navbar-menu-icon"
        src="/menu_icon.svg"
        alt="hamburger menu icon"
        onClick={handleMobileNavClick}
      />
      <div className="mobile-navbar-menu-container">
        <ul
          className={`${
            mobileNavIsOpen
              ? "mobile-navbar-menu-open"
              : "mobile-navbar-menu-closed"
          } mobile-navbar-menu-list`}
        >
          <li className="mobile-navbar-menu-item">
            <a href="/" className="mobile-navbar-menu-link">
              HOME
            </a>
          </li>
          <li className="mobile-navbar-menu-item">
            <a href="/volunteer" className="mobile-navbar-menu-link">
              VOLUNTEER
            </a>
          </li>
          <li className="mobile-navbar-menu-item">
            <a href="/donation" className="mobile-navbar-menu-link">
              DONATION
            </a>
          </li>
          <li className="mobile-navbar-menu-item">
            <a href="/register" className="mobile-navbar-menu-link">
              REGISTER
            </a>
          </li>
          <li className="mobile-navbar-menu-item">
            <a href="/Login" className="mobile-navbar-menu-link">
              LOGIN
            </a>
          </li>
          <li className="mobile-navbar-menu-item">
            <a href="/contact" className="mobile-navbar-menu-link">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNavbar;
