import React from 'react';
import '../styles/Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Yash Vardhan singh. All Rights Reserved.</p>
        <div className="social-links">
          <a href="https://github.com/yashvardhan8787" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/yash-vardhan-singh-a22587266/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
