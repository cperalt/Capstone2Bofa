import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/Donation.css";

const DonationPage = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [donations, setDonations] = useState([]);
  const [showDonationList, setShowDonationList] = useState(false);

  useEffect(() => {
    if (showDonationList) {
      fetchDonations();
    }
  }, [showDonationList]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/donate", {
        name,
        amount,
        message,
      });
      alert("Donation recorded successfully");
      setName("");
      setAmount("");
      setMessage("");
      setShowDonationList(true);
    } catch (error) {
      console.error("Error:", error);
      alert("Error recording donation");
    }
  };

  const fetchDonations = async () => {
    try {
      const response = await axios.get("http://localhost:3001/donations");
      setDonations(response.data);
    } catch (error) {
      console.error("Error fetching donations:", error);
    }
  };

  return (
    <div className="donation-page">
      <div className="hero-section">
        <h1>Support Our Cause</h1>
        <p>
          Your generosity makes a difference. Please consider making a donation.
        </p>
      </div>
      <div className="donation-container">
        <form className="donation-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
          />
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Donation Amount"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message (optional)"
          />
          <button type="submit">Donate</button>
        </form>

        {showDonationList && (
          <div className="donation-list">
            <h2 className="donation-list-title">Recent Donations</h2>
            <ul>
              {donations.map((donation) => (
                <li key={donation.id} className="donation-item">
                  <div className="donor-info">
                    <span className="donor-name">{donation.name}</span>
                    <span className="donor-amount">${donation.amount}</span>
                  </div>
                  <div className="donor-message">{donation.message}</div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DonationPage;
