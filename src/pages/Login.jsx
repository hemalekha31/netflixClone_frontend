import React, { useState, useEffect } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    console.log("isLoggedIn:", loggedIn);

    if (loggedIn) {
      navigate("/watch");
    }
  }, [navigate]);

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
            name="email"
            id="email"
            className="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Link to="/signin" state={{ email }}>
            <button className="get-btn">Get Started &gt;</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
