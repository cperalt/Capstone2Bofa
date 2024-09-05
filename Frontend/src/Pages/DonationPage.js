import React, { useState } from "react";
import "../Styles/Donation.css";

const DonationPage = () => {
  const [donationAmount, setDonationAmount] = useState("");
  const [donorInfo, setDonorInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    donationCategory: "General Fund",
    company: "",
    paymentMethod: "Credit Card",
    comments: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

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

  //establishing of the post request to send data to DB enpoint

  


    setDonationAmount("");
    setDonorInfo({
      firstName: "",
      lastName: "",
      email: "",
      donationCategory: "General Fund",
      company: "",
      paymentMethod: "Credit Card",
      comments: "",
    });

    setSuccessMessage("Thank you for your donation!");
    setTimeout(() => {
      setSuccessMessage("");
    }, 5000);
  };

  return (
    <div className="donation-page-container">
      <header className="donation-page-hero-section">
        <div className="overlay">
          <h1>Donate to Hands On Heroes</h1>
          <p className="donation-page-bold-goal">Be Part of Our Bold Goal</p>
        </div>
      </header>

      <section className="donation-page-info-box">
        <h2 className="info-box-title">
          Your Support Will Drive Meaningful Change Throughout Our Communities
        </h2>
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
      </section>

      <img
        src="https://www.unitedwayofyc.org/wp-content/uploads/happy-family-2000x1200.jpg"
        alt="Happy family embracing each other"
        className="donation-page-banner"
      />

      <form onSubmit={handleSubmit} className="donation-page-form">
        <fieldset className="donation-page-amount-options">
          <legend>Donation Amount*</legend>
          {[10, 25, 50, 100, 250, 500, 1000, 2500, 5000].map((amount) => (
            <button
              key={amount}
              type="button"
              aria-label={`Donate ${amount} dollars`}
              className={donationAmount === amount ? "active" : ""}
              onClick={() => handleDonationAmountChange(amount)}
            >
              ${amount}
            </button>
          ))}
        </fieldset>

        <fieldset className="donation-page-donor-information">
          <legend>Donor Information</legend>
          <label htmlFor="first-name">First Name*</label>
          <input
            id="first-name"
            type="text"
            name="firstName"
            placeholder="First Name"
            value={donorInfo.firstName}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="last-name">Last Name*</label>
          <input
            id="last-name"
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={donorInfo.lastName}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="email">Email*</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            value={donorInfo.email}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="donation-category">Donation Category*</label>
          <select
            id="donation-category"
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

          <label htmlFor="company">Company (if applicable)</label>
          <input
            id="company"
            type="text"
            name="company"
            placeholder="Company"
            value={donorInfo.company}
            onChange={handleInputChange}
          />
        </fieldset>

        <fieldset className="donation-page-payment-options">
          <legend></legend>
          <label htmlFor="payment-method">Payment Method*</label>
          <select
            id="payment-method"
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
            *Please send check to 123 Volunteer Lane, Suite 100, Charlotte, NC
            28202
          </p>

          {donorInfo.paymentMethod === "Credit Card" && (
            <div className="credit-card-form">
              <label htmlFor="card-number">Card Number*</label>
              <input
                id="card-number"
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                required
              />

              <label htmlFor="card-expiry">Expiry Date*</label>
              <input
                id="card-expiry"
                type="text"
                name="cardExpiry"
                placeholder="MM/YY"
                required
              />

              <label htmlFor="card-cvc">CVC*</label>
              <input
                id="card-cvc"
                type="text"
                name="cardCvc"
                placeholder="CVC"
                required
              />
            </div>
          )}
        </fieldset>

        <fieldset className="donation-page-comments">
          <legend></legend>
          <label htmlFor="comments">Comments</label>
          <textarea
            id="comments"
            name="comments"
            placeholder="If you have any questions please contact the HandsOn Heroes office..."
            value={donorInfo.comments}
            onChange={handleInputChange}
          />
        </fieldset>

        <fieldset className="donation-page-consent">
          <label>
            <input type="checkbox" required />
            By submitting, I agree to receive communications from HandsOn Heroes
            of Meck County, NC.
          </label>
        </fieldset>

        <div className="donation-page-submit-section">
          <p>Total Donation Amount: ${donationAmount}</p>
          <button type="submit">Donate Now</button>
        </div>
      </form>

      {successMessage && (
        <div className="success-message" role="alert" aria-live="polite">
          {successMessage}
        </div>
      )}
    </div>
  );
};

export default DonationPage;
