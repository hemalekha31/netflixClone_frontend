import React, { useState, useEffect } from 'react';
import "./Signin.css";
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Signin = () => {
  const location = useLocation();
  const navigate = useNavigate(); 
  const passedEmail = location.state?.email || "";

  const [form, setForm] = useState({ email: passedEmail, password: "" });
  const [error, setError] = useState({});

  const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const validation = () => {
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

  const handle = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSub = (e) => {
    e.preventDefault();
    const validationError = validation();

    if (Object.keys(validationError).length === 0) {
      saveToLocalStorage("userData", form);
      localStorage.setItem("isLoggedIn", "true");

      setForm({ email: "", password: "" });
      setError({});

      navigate("/watch");
    } else {
      setError(validationError);
    }
  };

  return (
    <div className='conts'>
      <div className='top-bar'>
        <h3 className='net'>NETFLIX</h3>
      </div>

      <div className='card'>
        <h3>SIGN IN</h3>
        <form onSubmit={handleSub}>
          <div className='input-box'>
            <input
              type="email"
              id="email"
              name="email"
              placeholder=" "
              value={form.email}
              onChange={handle}
            />
            <label htmlFor="email">Email</label>
            {error.email && <p className="error">{error.email}</p>}
          </div>

          <div className='input-box'>
            <input
              type="password"
              id="password"
              name="password"
              placeholder=" "
              value={form.password}
              onChange={handle}
            />
            <label htmlFor="password">Password</label>
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
