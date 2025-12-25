import React, { useState, useEffect } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (loggedIn) {
      navigate("/watch");
    }
  }, [navigate]);

  const handleGetStarted = () => {
    // Save email in localStorage to prefill Signin
    localStorage.setItem("tempEmail", email);
    navigate("/signin");
  };

  return (
    <div className="login-cont">
      <div className="top-bars">
        <h3 className="nets">NETFLIX</h3>
        <div>
          <select name="language" id="lang">
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
          <Link to="/signin">
            <button className="signin">Sign In</button>
          </Link>
        </div>
      </div>
<p style={{ textAlign: "center", fontSize: "12px", color: "#999" }}>
  Demo project only. Not affiliated with Netflix.
</p>

      <div className="cont">
        <h2>
          Unlimited movies, TV <br /> shows and more.
        </h2>
        <p className="pay">Starts at ₹149. Cancel anytime.</p>
        <p className="mem">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="input-boxs">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="get-btn" onClick={handleGetStarted}>
            Get Started &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
