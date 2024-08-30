import "../Styles/Footer.css";
import "../Styles/Newsletter.css";
import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from "axios"; // Import axios for making HTTP requests

function Footer() {
  const [email, setEmail] = useState(""); // State to store email input
  const [message, setMessage] = useState(""); // State to store success/error messages

  const handleSubscribe = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/subscribe", {
        email,
      }); // Send POST request to server
      setMessage(response.data.message); // Set success message
      setEmail(""); // Clear email input
    } catch (error) {
      setMessage("Subscription failed. Please try again."); // Set error message
    }
  };

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
              <p>Volunteer</p>
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
            <a href="/volunteer">
              <p>Volunteer</p>
            </a>
            <a href="/volunteer">
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

        {/* Newsletter Section */}
        <div className="newsletter-section">
          <h4>Subscribe to Our Newsletter</h4>
          <form onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state on input change
            />
            <button className="submit-button" type="submit">
              Subscribe
            </button>
          </form>
          {message && <p className="message">{message}</p>}{" "}
          {/* Display success/error message */}
        </div>

        <hr />

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
