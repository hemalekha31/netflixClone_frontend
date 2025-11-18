import React, { useState } from 'react';
import "./Signin.css";
import { Link, useNavigate } from 'react-router-dom';

const Signin = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    const newError = {};
    if (!form.email) newError.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newError.email = "Invalid email format";

    if (!form.password) newError.password = "Password is required";
    else {
      if (form.password.length < 6) newError.password = "Must be more than 6 characters";
      else if (!/[a-z]/.test(form.password)) newError.password = "Must include at least one lowercase letter";
      else if (!/[A-Z]/.test(form.password)) newError.password = "Must include at least one uppercase letter";
      else if (!/[!@#$%&*]/.test(form.password)) newError.password = "Must include at least one special character (!@#$%&*)";
    }
    return newError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      // Save to localStorage
      localStorage.setItem("userData", JSON.stringify(form));
      localStorage.setItem("isLoggedIn", "true");

      // Update App state
      setIsLoggedIn(true);

      // Clear form
      setForm({ email: "", password: "" });
      setError({});

      // Navigate to homepage
      navigate("/homepage");
    } else {
      setError(validationErrors);
    }
  };

  return (
    <div className='conts'>
      <div className='top-bar'>
        <h3 className='net'>NETFLIX</h3>
      </div>

      <div className='card'>
        <h3>SIGN IN</h3>
        <form onSubmit={handleSubmit}>
          <div className='input-box'>
            <input
              type="email"
              name="email"
              placeholder=" "
              value={form.email}
              onChange={handleChange}
            />
            <label>Email</label>
            {error.email && <p className="error">{error.email}</p>}
          </div>

          <div className='input-box'>
            <input
              type="password"
              name="password"
              placeholder=" "
              value={form.password}
              onChange={handleChange}
            />
            <label>Password</label>
            {error.password && <p className="error">{error.password}</p>}
          </div>

          <div className='checkbox-box'>
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember Me</label>
          </div>

          <button type='submit' className='signin-btn'>Sign In</button>
        </form>

        <p className='signup-text'>
          New to Netflix? <Link to="/log">Sign Up Now</Link>
        </p>

        <p className='recaptcha'>
          This page is protected by Google reCAPTCHA to ensure <br /> you're not a bot.
        </p>
      </div>
    </div>
  );
};

export default Signin;
