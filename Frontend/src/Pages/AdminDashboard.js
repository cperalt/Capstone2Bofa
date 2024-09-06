import React from "react";
import { FaSearch, FaCog } from "react-icons/fa";
import "../Styles/Admin.css";
import chart  from "../2024.png"
import circle  from "../circlegraph.png"
import line  from "../linegraph.png"
import john  from "../johndoe.png"
import donation  from "../donationgraph.png"

// Sample Volunteer Data
const invoices = [
  { id: "#065499", customer: "Aurélien Salomon", date: "04 Sep 2020", cause: "Education", amount: "$100"},
  { id: "#005455", customer: "Manuel Rovira", date: "09 Sep 2020", cause: "Health", amount: "$250" },
  { id: "#003904", customer: "Lebron James", date: "21 Jan 2021", cause: "Disaster", amount: "$100" },
  { id: "#092933", customer: "Carl Robins", date: "06 Mar 2021", cause: "Health", amount: "$10" },
  { id: "#009475", customer: "John Doe", date: "16 Apr 2022", cause: "Disaster", amount: "$5000" },
];

function AdminDashboard() {
  return (
    <div className="adminpage">
      <div className="container">
        {/* Overview Section */}
        <div className="overview">
            <h3>Total Volunteers</h3>
          <div className="total-sales">
            <img src={chart} alt="Total Volunteers chart" className="chart"/>
          </div>

          <div className="overview-cards">
            <div className="card">
              <h3>Hours Volunteered</h3>
              <img src={circle} alt="circle graph" className="circle"/>
            </div>
            <div className="card">
              <h3>Visitors This Week</h3>
              <img src={line} alt="line graph" className="linegraph"/>
            </div>
            <div className="card">
              <h3>Events Attended</h3>
              <p>Education : 56</p>
              <p>Health : 70</p>
              <p>Disaster Relief : 115</p>
            </div>
            <div className="card">
              <h3>Donation of the Month</h3>
              <img src={john} alt="Donation of the month" className="john"/>
            </div>
          </div>
        </div>

          {/* Sales by Category Section */}
          <div className="sales-category">
            <h3>Donations by Category</h3>
            <img src={donation} alt="donation graph" className="donationgraph" />
            <div className="category-details">
            </div>
          </div>

        {/* Recent Invoices Section */}
        <div className="recent-invoices">
          <h3>Recent Volunteer Donations</h3>
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>ID Customer</th>
                <th>Customer Name</th>
                <th>Date</th>
                <th>Cause</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{invoice.id}</td>
                  <td>{invoice.customer}</td>
                  <td>{invoice.date}</td>
                  <td>{invoice.cause}</td>
                  <td>{invoice.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
