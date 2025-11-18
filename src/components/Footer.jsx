import React from 'react';
import './Footer.css';

const Footer = ({ onLogout }) => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <p className='footer-logo'>Netflix Clone</p>

        <div className='footer-links'>
          <a href='#'>Help Center</a>
          <a href='#'>Terms of Use</a>
          <a href='#'>Privacy</a>
          <a href='#'>Cookie Preferences</a>
          <a href='#'>Corporate Information</a>
        </div>

        <div className='footer-bottom'>
          <p>© 2025 Netflix Clone | Designed by Hemalekha</p>
          {onLogout && (
            <button onClick={onLogout} className='logout-btn'>
              Logout
            </button>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
