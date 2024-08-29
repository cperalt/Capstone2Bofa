import "../Styles/Footer.css";
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
  return (
    <div className="footer">
      <div className="sb-footer-section-padding">
        <div className="sb-footer-links">
          <div className="sb-footer-links-div">
            <h4>INFORMATION</h4>
            <a href="/employer">
              <p>Home</p>
            </a>
            <a href="/home">
              <p>Get To Know Us</p>
            </a>
            <a href="/individual">
              <p>Volunter</p>
            </a>
          </div>
          <div className="sb-footer-links-div">
            <h4>RESOURCE</h4>
            <a href="/employer">
              <p>Resources Center</p>
            </a>
          </div>
          <div className="sb-footer-links-div">
            <h4>HELP</h4>
            <a href="/home">
              <p>About</p>
            </a>
            <a href="/volunter">
              <p>Volunteer</p>
            </a>
            <a href="/volunter">
              <p>Get Involved</p>
            </a>

            <a href="/donation">
              <p>Donation</p>
            </a>
          </div>
          <div className="sb-footer-links-div">
            <h4>CONTACT US</h4>
            <div className="socialmedia">
              <a
                href="https://facebook.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <hr></hr>

        <div className="sb-footer-below">
          <div className="sb-footer-copyright">
            <p>@{new Date().getFullYear()} H.O.H All rights reserved</p>
          </div>
          <div className="sb-footer-below-links">
            <a href="/term">
              <div>
                <p>Terms & Conditions</p>
              </div>
            </a>
            <a href="/privacy">
              <div>
                <p>Privacy</p>
              </div>
            </a>
            <a href="/security">
              <div>
                <p>Security</p>
              </div>
            </a>
            <a href="/cookie">
              <div>
                <p>Cookie Declaration</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
