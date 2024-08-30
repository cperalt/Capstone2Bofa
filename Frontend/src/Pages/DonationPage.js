import React, { useState } from "react";
import "../Styles/Donation.css";

const DonationPage = () => {
  const [donationAmount, setDonationAmount] = useState(0);
  const [donorInfo, setDonorInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    donationCategory: "General Fund",
    company: "NA",
    paymentMethod: "Credit Card",
    comments: "",
  });

  const handleDonationAmountChange = (amount) => {
    setDonationAmount(amount);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDonorInfo({
      ...donorInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Donation Submitted:", donorInfo, "Amount:", donationAmount);
  };

  return (
    <div className="donation-page-container">
      <div className="donation-page-hero-section">
        <div className="overlay">
          <h1>DONATE TO HANDS ON HEROES</h1>
          <p className="donation-page-bold-goal">BE PART OF OUR BOLD GOAL</p>
        </div>
      </div>

      <div className="donation-page-info-box">
        <p className="info-box-title">
          YOUR SUPPORT WILL DRIVE MEANINGFUL CHANGE THROUGHOUT OUR COMMUNITIES
        </p>
        <p className="info-box-description">
          Our bold goal is to empower communities by connecting passionate
          volunteers with impactful projects in education and disaster relief.
          Your donation to HandsOn Heroes helps us expand our reach, supporting
          individuals and families through meaningful volunteer experiences and
          critical aid.
          <br />
          <br />
          With each contribution, you play a vital role in fostering community
          engagement, enhancing educational initiatives, and providing disaster
          relief. As we continue to grow beyond Charlotte, your support helps us
          extend our impact across various states, making a difference where
          it's needed most. Join us in creating lasting change—donate to HandsOn
          Heroes today and help us make a significant impact in communities far
          and wide!
        </p>
      </div>

      <img
        src="https://www.unitedwayofyc.org/wp-content/uploads/happy-family-2000x1200.jpg"
        alt="Donation Banner"
        className="donation-page-banner"
      />

      <form onSubmit={handleSubmit} className="donation-page-form">
        <div className="donation-page-amount-options">
          <label>Donation Amount*</label>
          {[35, 50, 100, 1000, 5000].map((amount) => (
            <button
              key={amount}
              type="button"
              className={donationAmount === amount ? "active" : ""}
              onClick={() => handleDonationAmountChange(amount)}
            >
              ${amount}
            </button>
          ))}
          <input
            type="number"
            placeholder="Other"
            value={donationAmount > 5000 ? donationAmount : ""}
            onChange={(e) => handleDonationAmountChange(Number(e.target.value))}
          />
        </div>

        <div className="donation-page-donor-information">
          <label>Donor Information</label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name*"
            value={donorInfo.firstName}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name*"
            value={donorInfo.lastName}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={donorInfo.email}
            onChange={handleInputChange}
            required
          />
          <select
            name="donationCategory"
            value={donorInfo.donationCategory}
            onChange={handleInputChange}
            required
          >
            <option value="General Fund">General Fund</option>
            <option value="Memorial Gift">Memorial Gift</option>
            <option value="Honorarium">Honorarium</option>
            <option value="Sponsorship">Sponsorship</option>
          </select>
          <input
            type="text"
            name="company"
            placeholder="Company (if applicable)"
            value={donorInfo.company}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="donation-page-payment-options">
          <label>Payment Options</label>
          <select
            name="paymentMethod"
            value={donorInfo.paymentMethod}
            onChange={handleInputChange}
            required
          >
            <option value="Credit Card">
              Pay with Credit Card ($10 minimum)
            </option>
            <option value="Check">Send Payment By Check</option>
          </select>
          <p>
            *Please send check to Lancest Rd 4323, SC, PO Box 925 Rock Hill, SC
            27567
          </p>
        </div>

        <div className="donation-page-comments">
          <label>Comments (Optional)</label>
          <textarea
            name="comments"
            placeholder="If you have any questions please contact the Hand's On Hero's office..."
            value={donorInfo.comments}
            onChange={handleInputChange}
          />
        </div>

        <div className="donation-page-consent">
          <input type="checkbox" required />
          <span>
            By submitting, I agree to receive communications from Hand's On
            Hero's of Meck County, NC.
          </span>
        </div>

        <div className="donation-page-submit-section">
          <p>Total Donation Amount: ${donationAmount}</p>
          <button type="submit">Donate Now</button>
        </div>
      </form>
    </div>
  );
};

export default DonationPage;
