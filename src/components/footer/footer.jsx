import {React,useState} from 'react'
import './footer.css'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube,FaTiktok, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:7000/api/subscription/subscribe', { email });
      setMessage(response.data.message);
      setEmail('');
    } catch (error) {
      console.error('Subscription error:', error);
      if (error.code === 'ERR_NETWORK') {
        setMessage('Unable to connect to server. Please try again later.');
      } else {
        setMessage(error.response?.data?.message || 'Something went wrong');
      }
    }
  };
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-section'>
          <h3>About Shop.com</h3>
          <p>Your ultimate destination for fashion and lifestyle. Discover the latest trends and shop premium quality products.</p>
          <div className='social-icons'>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          </div>
        </div>

        <div className='footer-section'>
          <h3>Help & Support</h3>
          <ul>
            <li><Link to="/about">Shipping Info</Link></li>
            <li><Link to="/about">Returns</Link></li>
            <li><Link to="/about">How to Order</Link></li>
            <li><Link to="/about">Track Order</Link></li>
            <li><Link to="/about">Size Guide</Link></li>
          </ul>
        </div>

        <div className='footer-section'>
          <h3>Customer Service</h3>
          <ul>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/">Loyalty Program</Link></li>
            <li><Link to="/">FAQ</Link></li>
          </ul>
        </div>

        <div className='footer-section'>
          <h3>Contact Info</h3>
          <div className='contact-info'>
            <p>Email: support@shop.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: 123 Fashion Street, NY 10001</p>
          </div>
          <div className='newsletter'>
            <h4>Subscribe to our newsletter</h4>
            <form onSubmit={handleSubmit} className='newsletter-input'>
              <input 
                type="email" 
                placeholder="Your email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">
                Subscribe
              </button>
            </form>
            {message && (
              <div className={`message ${message.includes('error') ? 'error' : 'success'}`}>
                {message}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className='footer-bottom'>
        <div className='footer-bottom-content'>
          <p>&copy; 2024 Shop.com. All rights reserved.</p>
          <div className='footer-links'>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/sitemap">Sitemap</Link>
            <Link to="/Dashboard">Admin</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer