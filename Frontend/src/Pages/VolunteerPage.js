import React from 'react';
import '../Styles/Volunteer.css'; 
import volunteerMatchImage from '../volunimg2.png';
import graduation from '../graduation.png';
import disaster from '../flooded-house.png';
import healthcare from '../healthcare.png';

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
            <p>The power of collaboration truly makes a difference. Together, we must commit our time, energy, resources, knowledge, and passion to make change happen. Hands on Heroes helps you effect positive change. We get volunteers matched with the right cause at the right moment. We get a larger number of highly qualified volunteers because you're matched with people who are both passionate about and committed to your cause.</p>
            <p>And because volunteers are often interested in contributing their money as well as their time, we make it easy for you to donate to your cause.</p>
          </div>
        </div>
      </section>

            {/* Three Steps Section */}
            <section className="three-steps">
        <h2>Join the largest volunteer network in three steps</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-description">
            <p>Create a</p>
              <p>personal</p>
              <p>profile</p>
            </div>
          </div>
          <div className="step-arrow">→</div>
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-description">
            <p>Choose </p>
              <p>your</p>
              <p>cause</p>
            </div>
          </div>
          <div className="step-arrow">→</div>
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-description">
            <p>Find / Claim</p>
              <p>your</p>
              <p>organization</p>
            </div>
          </div>
          <div className="step-arrow">→</div>
          <div className="step-result">
            <p>You're</p>
            <p>ready to</p>
            <p>volunteer!</p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <h2>Explore by Category</h2>
        <div className="category-cards">
          <div className="card">
          <img src={graduation} alt="Education Icon" />
            <h3>Education</h3>
            <p>Empower the next generation by volunteering in educational programs.</p>
          </div>
          <div className="card">
          <img src={healthcare} alt="Healthcare Icon" />
            <h3>Health</h3>
            <p>Contribute to health and wellness initiatives in your community.</p>
          </div>
          <div className="card">
          <img src={disaster} alt="Disaster relief icon" />
            <h3>Disaster Relief</h3>
            <p>Provide support and relief during emergencies and natural disasters.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VolunteerPage;
