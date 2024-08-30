import React from 'react';
import "../Styles/Home.css";

function HeroSection() {
  return (
    <div>
      {/* Existing Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-text">
            <h2>Discover Your Impact</h2>
            <h1>
              Hands On Heroes: <span className="highlight">Your Path to Making a Difference</span> One Meaningful Contribution at a <span className="highlight">Time</span>.
            </h1>
            <div className="hero-buttons">
              <a href="#" className="learn-more-btn">Learn More</a>
              <a href="#" className="donate-now-btn">Donate Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* New Section */}
      <section className="section">
        <h2 className="section-title">Offering a helping hand...</h2>
        <div className="cards-container">
          <div className="card">
            <img src="https://www.unitedwayofyc.org/wp-content/uploads/united-way-of-york-county-give-1200x1200.jpg" alt="Fund the Cause" />
            <div className="card-overlay">
              <div className="card-content">
                <h3>GIVE.</h3>
                <p>Fund the Cause</p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="https://www.unitedwayofyc.org/wp-content/uploads/united-way-of-york-county-advocate-1200x1200.jpg" alt="Become an Ambassador" />
            <div className="card-overlay">
              <div className="card-content">
                <h3>JOIN.</h3>
                <p>Sign up! Join our organization</p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="https://www.unitedwayofyc.org/wp-content/uploads/united-way-volunteers.jpg" alt="Opportunities to Help" />
            <div className="card-overlay">
              <div className="card-content">
                <h3>VOLUNTEER.</h3>
                <p>Opportunities to Help</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us-section">
        <div className="about-us-container">
          <div className="about-us-text">
            <h2>ABOUT US</h2>
            <h3>WHAT EXACTLY DO WE DO?</h3>
            <p>
              At HandsOn Heroes, based in Charlotte, we are dedicated to empowering individuals through meaningful volunteer experiences, fostering community engagement, and promoting social responsibility. We connect passionate volunteers with impactful projects focused on education and disaster relief. Our platform matches volunteers with <a href="#">opportunities</a> to support educational initiatives, from tutoring and mentoring to organizing workshops.
            </p>
            <p>
              In addition, we mobilize volunteers to assist with disaster relief efforts, providing critical support and aid in times of crisis. While we currently serve the Charlotte area, we have plans to expand our reach and make a difference in communities across other states in the near future.
            </p>
            <a href="#" className="our-work-btn">OUR WORK</a>
          </div>
          <div className="about-us-map">
            <img src="https://unitedwaygreaterclt.org/wp-content/uploads/2022/11/Stocksy_txp68303131zDY300_Large_2908519-sm.png" alt="Map" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
