import React from 'react';
import "../Styles/Home.css";
function HeroSection() {
  return (
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
  );
}
function App() {
  return (
    <div>
      {/* <Header /> */}
      <HeroSection />
    </div>
  );
}
export default App;