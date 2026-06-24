import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h3>Gori Herbals</h3>
          <p>Pure • Natural • Better • Organic</p>
          <p>Nature's superfood for vitality & nutrition.</p>
        </div>
        <div className="footer-links">
          <h4>Shop</h4>
          <ul>
            <li><a href="#">Hair Care</a></li>
            <li><a href="#">Skin Care</a></li>
            <li><a href="#">Wellness</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>About</h4>
          <ul>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Ingredients</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Customer Care: 7568029094</p>
          <p>Email: umeshdadhichdr@gmail.com</p>
          <p>Address: U 11/288 Azad Nagar, Bhilwara</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Gori Herbals. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
