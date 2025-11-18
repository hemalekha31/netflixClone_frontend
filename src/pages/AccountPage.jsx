import React from "react";
import "./AccountPage.css";

const AccountPage = () => {
  const userdata = JSON.parse(localStorage.getItem("userData") || "{}");
  const email = userdata?.email || "user@example.com";
  const maskedEmail = email.replace(/^(.).*(.@.*)$/, "$1***$2");

  const memberSince = "August 2025";
  const nextPayment = "23 November 2025";
  const plan = "Basic plan";

  return (
    <div className="account-container">
      
      <aside className="sidebar">
        <h1 className="netflix-logo">NETFLIX</h1>
        <ul>
          <li className="active">🏠 Overview</li>
          <li>💳 Membership</li>
          <li>🛡️ Security</li>
          <li>💻 Devices</li>
          <li>👤 Profiles</li>
        </ul>
      </aside>

      <main className="account-main">
        <h1>Account</h1>
        <p className="subtext">Membership details</p>

        <div className="membership-box">
          <div className="member-tag">Member since {memberSince}</div>
          <h3>{plan}</h3>
          <p>Next payment: {nextPayment}</p>
          <p>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Google_Pay_Logo.svg/1200px-Google_Pay_Logo.svg.png"
              alt="Google Pay"
              className="gpay-logo"
            />
            {maskedEmail}
          </p>
          <hr />
          <p className="manage-link">Manage membership &gt;</p>
        </div>

        <h3>Quick links</h3>
        <div className="quick-links">
          <div className="quick-item">Change plan &gt;</div>
          <div className="quick-item">Manage payment method &gt;</div>
          <div className="quick-item">Manage access and devices &gt;</div>
        </div>
      </main>
    </div>
  );
};

export default AccountPage;
