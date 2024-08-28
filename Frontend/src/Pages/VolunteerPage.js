import React from 'react';
import '../Styles/Volunteer.css'; 
import volunteerMatchImage from '../volunimg2.png';

const VolunteerPage = () => {
  return (
    <div className="volunteer-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Make a Difference Today</h1>
          <p>Find volunteer opportunities that match your passion and location.</p>
        </div>
      </section>

      {/* VolunteerMatch Section */}
      <section className="volunteer-match">
        <div className="volunteer-match-content">
          <div className="volunteer-match-image">
          <img src={volunteerMatchImage} alt="Volunteer" />
          </div>
          <div className="volunteer-match-text">
            <h2>Hands on Heroes transforms volunteering</h2>
            <p>Hands on Heroes helps you effect positive change. You get volunteers matched with the right cause at the right moment. You get a larger number of highly qualified volunteers because you're matched with people who are both passionate about and committed to your cause.</p>
            <p>And because volunteers are often interested in contributing their money as well as their time, we make it easy for them to donate to your cause.</p>
            <p>Our software solution automates workflow and simplifies repetitive tasks such as posting and reposting volunteer opportunities. It's fast, easy-to-use and effective.</p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <h2>Explore by Category</h2>
        <div className="category-cards">
          <div className="card">
            <h3>Education</h3>
            <p>Empower the next generation by volunteering in educational programs.</p>
          </div>
          <div className="card">
            <h3>Health</h3>
            <p>Contribute to health and wellness initiatives in your community.</p>
          </div>
          <div className="card">
            <h3>Disaster Relief</h3>
            <p>Provide support and relief during emergencies and natural disasters.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VolunteerPage;
