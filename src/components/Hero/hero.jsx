import React from 'react';
import { Link } from 'react-router-dom';
import './hero.css';

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Welcome to Shop.com</h1>
        <p>Discover unique products from small businesses</p>
        <Link to="/shop" className="cta-button">
          Browse Collection
        </Link>
      </div>
    </div>
  );
};

export default Hero;