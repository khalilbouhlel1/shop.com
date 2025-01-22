import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import shopcom from '../assets/shopcom-high-resolution-logo-grayscale-transparent.png'
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && 
          menuRef.current && 
          !menuRef.current.contains(event.target) &&
          !buttonRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    closeMenu();
  };

  return (
    <div className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className='navbar-logo'>
        <Link to="/" onClick={handleLinkClick}>
          <img src={shopcom} alt='logo' />
        </Link>
      </div>
      
      <div className='navbar-search'>
        <input type='text' placeholder='Search products...' />
      </div>

      <button 
        ref={buttonRef}
        className='mobile-menu-icon' 
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div 
        ref={menuRef}
        className={`navbar-links ${isMenuOpen ? 'active' : ''}`}
      >
        <ul>
          <li>
            <Link to="/shop" onClick={handleLinkClick}>Shop</Link>
          </li>
          <li>
            <Link to="/about" onClick={handleLinkClick}>About</Link>
          </li>
        </ul>
      </div>

      <div className={`nav-login-cart ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/login" className="login-button" onClick={handleLinkClick}>
          <button>Login</button>
        </Link>
        <Link to="/cart" className="cart-icon-container" onClick={handleLinkClick}>
          <FaShoppingCart />
          <div className='cart-count'>
            <span>0</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar