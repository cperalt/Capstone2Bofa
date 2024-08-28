import "../Styles/Footer.css";
import React from "react";
import "../Styles/Footer.css"; // Assuming you have a separate CSS file for styling

const Footer = () => {
  return (
    <div className="pg-footer">
      <footer className="footer">
        <svg
          className="footer-wave-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <path
            className="footer-wave-path"
            d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"
          ></path>
        </svg>
        <div className="footer-content">
          <div className="footer-content-column">
            <div className="footer-logo">
              <a className="footer-logo-link" href="#">
                <span className="hidden-link-text">LOGO</span>
                <h1>HOH</h1>
              </a>
            </div>
            <div className="footer-menu">
              <h2 className="footer-menu-name">Get Started</h2>
              <ul id="menu-get-started" className="footer-menu-list">
                <li className="menu-item">
                  <a href="/">Home</a>
                </li>
                <li className="menu-item">
                  <a href="/volunteer">Volunteer</a>
                </li>
                <li className="menu-item">
                  <a href="/donation">Donation</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-content-column">
            <div className="footer-menu">
              <h2 className="footer-menu-name">Company</h2>
              <ul id="menu-company" className="footer-menu-list">
                <li className="menu-item">
                  <a href="/contact">Contact</a>
                </li>
                <li className="menu-item">
                  <a href="/about">About</a>
                </li>
              </ul>
            </div>
            <div className="footer-menu">
              <h2 className="footer-menu-name">Legal</h2>
              <ul id="menu-legal" className="footer-menu-list">
                <li className="menu-item">
                  <a href="#">Privacy Notice</a>
                </li>
                <li className="menu-item">
                  <a href="#">Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-content-column">
            <div className="footer-menu">
              <h2 className="footer-menu-name">Quick Links</h2>
              <ul id="menu-quick-links" className="footer-menu-list">
                <li className="menu-item">
                  <a target="_blank" rel="noopener noreferrer" href="#">
                    Support Center
                  </a>
                </li>
                <li className="menu-item">
                  <a target="_blank" rel="noopener noreferrer" href="#">
                    Service Status
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#">Security</a>
                </li>
                <li className="menu-item">
                  <a href="#">Blog</a>
                </li>
                <li className="menu-item">
                  <a href="#">Customers</a>
                </li>
                <li className="menu-item">
                  <a href="#">Reviews</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-content-column">
            <div className="footer-call-to-action">
              <h2 className="footer-call-to-action-title">Let's Chat</h2>
              <p className="footer-call-to-action-description">
                Have a support question?
              </p>
              <a
                className="footer-call-to-action-button button"
                href="#"
                target="_self"
              >
                Get in Touch
              </a>
            </div>
            <div className="footer-call-to-action">
              <h2 className="footer-call-to-action-title">You Call Us</h2>
              <p className="footer-call-to-action-link-wrapper">
                <a
                  className="footer-call-to-action-link"
                  href="tel:0124-64XXXX"
                  target="_self"
                >
                  0124-64XXXX
                </a>
              </p>
            </div>
          </div>
          <div className="footer-social-links">
            <svg
              className="footer-social-amoeba-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 236 54"
            >
              <path
                className="footer-social-amoeba-path"
                d="M223.06,43.32c-.77-7.2,1.87-28.47-20-32.53C187.78,8,180.41,18,178.32,20.7s-5.63,10.1-4.07,16.7-.13,15.23-4.06,15.91-8.75-2.9-6.89-7S167.41,36,167.15,33a18.93,18.93,0,0,0-2.64-8.53c-3.44-5.5-8-11.19-19.12-11.19a21.64,21.64,0,0,0-18.31,9.18c-2.08,2.7-5.66,9.6-4.07,16.69s.64,14.32-6.11,13.9S108.35,46.5,112,36.54s-1.89-21.24-4-23.94S96.34,0,85.23,0,57.46,8.84,56.49,24.56s6.92,20.79,7,24.59c.07,2.75-6.43,4.16-12.92,2.38s-4-10.75-3.46-12.38c1.85-6.6-2-14-4.08-16.69a21.62,21.62,0,0,0-18.3-9.18C13.62,13.28,9.06,19,5.62,24.47A18.81,18.81,0,0,0,3,33a21.85,21.85,0,0,0,1.58,9.08,16.58,16.58,0,0,1,1.06,5A6.75,6.75,0,0,1,0,54H236C235.47,54,223.83,50.52,223.06,43.32Z"
              ></path>
            </svg>
            <a className="footer-social-link linkedin" href="#" target="_blank">
              <span className="hidden-link-text">Linkedin</span>
              <svg
                className="footer-social-icon-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
              >
                <path
                  className="footer-social-icon-path"
                  d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"
                ></path>
              </svg>
            </a>
            <a className="footer-social-link twitter" href="#" target="_blank">
              <span className="hidden-link-text">Twitter</span>
              <svg
                className="footer-social-icon-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
              >
                <path
                  className="footer-social-icon-path"
                  d="M23.148,9.032c-0.83,0.369-1.717,0.618-2.652,0.732c0.954-0.572,1.688-1.48,2.034-2.558c-0.892,0.528-1.882,0.912-2.932,1.121c-0.844-0.898-2.048-1.46-3.381-1.46c-2.557,0-4.632,2.074-4.632,4.632c0,0.362,0.042,0.716,0.122,1.06c-3.85-0.193-7.27-2.037-9.571-4.83c-0.4,0.686-0.628,1.485-0.628,2.338c0,1.614,0.82,3.04,2.066,3.877c-0.761-0.024-1.478-0.233-2.104-0.577c-0.052,0.019-0.101,0.039-0.153,0.039c-0.037,0-0.073-0.002-0.108-0.004c0.073,2.283,1.655,4.166,3.882,4.594c-0.345,0.095-0.708,0.146-1.079,0.146c-0.264,0-0.521-0.026-0.777-0.074c0.522,1.627,2.038,2.812,3.832,2.841c-1.406,1.103-3.175,1.762-5.107,1.762c-0.332,0-0.661-0.02-0.986-0.058c1.825,1.166,3.98,1.844,6.306,1.844c7.556,0,11.707-6.26,11.707-11.707c0-0.179-0.003-0.358-0.011-0.535C22.024,10.554,22.624,9.812,23.148,9.032z"
                ></path>
              </svg>
            </a>
            <a className="footer-social-link facebook" href="#" target="_blank">
              <span className="hidden-link-text">Facebook</span>
              <svg
                className="footer-social-icon-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
              >
                <path
                  className="footer-social-icon-path"
                  d="M19.5,6.5h-3.5c-1.4,0-2.5,1.1-2.5,2.5v3h-2.5c-0.3,0-0.5,0.2-0.5,0.5v2.5c0,0.3,0.2,0.5,0.5,0.5h2.5v7.5c0,0.3,0.2,0.5,0.5,0.5h2.5c0.3,0,0.5-0.2,0.5-0.5v-7.5h2.5c0.3,0,0.5-0.2,0.5-0.5v-2.5c0-0.3-0.2-0.5-0.5-0.5h-2.5v-1c0-0.7,0.6-1.5,1.5-1.5h2.5c0.3,0,0.5-0.2,0.5-0.5v-2.5C20,6.7,19.8,6.5,19.5,6.5z"
                ></path>
              </svg>
            </a>
            <a className="footer-social-link github" href="#" target="_blank">
              <span className="hidden-link-text">GitHub</span>
              <svg
                className="footer-social-icon-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
              >
                <path
                  className="footer-social-icon-path"
                  d="M15,1.5c-7.6,0-13.8,6.1-13.8,13.8c0,6.1,4.1,11.3,9.7,13.1c0.7,0.1,0.9-0.3,0.9-0.7c0-0.4-0.1-1.5-0.1-2.7c-4,0.9-4.8-1.9-4.8-1.9c-0.6-1.4-1.5-1.7-1.5-1.7c-1.2-0.8,0.1-0.8,0.1-0.8c1.3,0.1,2,1.4,2,1.4c1.1,1.9,2.8,1.4,3.4,1.1c0-1.4,0.4-2.3,0.8-2.9c-3-0.3-6.2-1.5-6.2-6.5c0-1.4,0.5-2.6,1.4-3.5c-0.1-0.3-0.6-1.7,0.1-3.5c0,0,1.1-0.4,3.6,1.4c1.1-0.3,2.3-0.5,3.4-0.5c1.2,0,2.3,0.2,3.4,0.5c2.5-1.8,3.6-1.4,3.6-1.4c0.7,1.8,0.2,3.2,0.1,3.5c0.9,0.9,1.4,2.1,1.4,3.5c0,5,3.2,6.2,6.2,6.5c0.4,0.6,0.8,1.4,0.8,2.9c0,2.5-0.1,4.5-0.1,5.2c0,0.5,0.2,0.9,0.9,0.7c5.6-1.7,9.7-7,9.7-13.1C28.8,7.6,22.6,1.5,15,1.5z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
