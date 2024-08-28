import React from "react";
import "../Styles/Home.css"; // Import the CSS file for HomePage

const HomePage = () => {
  return (
    <section className="home-page">
      <div className="home-page__background">
        <div className="home-page__overlay"></div>
        <div className="home-page__content">
          <h1 className="home-page__title">Explore Our World</h1>
          <p className="home-page__description">
            Dive into our projects, discover new insights, and join our mission
            to make a difference.
          </p>
          <a href="/contact" className="home-page__cta">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
