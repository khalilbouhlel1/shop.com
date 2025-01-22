import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-page">
      <h1>About Shop.com</h1>
      <p>Welcome to Shop.com, your number one source for all things fashion. We're dedicated to giving you the very best of clothing, with a focus on dependability, customer service, and uniqueness.</p>
      
      <section className="about-section">
        <h2>Shipping Info</h2>
        <p>We offer free shipping on all orders over $50. Orders are processed within 2-3 business days and typically arrive within 5-7 business days.</p>
      </section>
      
      <section className="about-section">
        <h2>Returns</h2>
        <p>If you're not completely satisfied with your purchase, you can return it within 30 days for a full refund. Items must be in their original condition.</p>
      </section>
      
      <section className="about-section">
        <h2>How to Order</h2>
        <p>Ordering from Shop.com is easy! Simply browse our collections, select your desired items, choose your size, and click 'Add to Cart'. When you're ready, proceed to checkout.</p>
      </section>
      
      <section className="about-section">
        <h2>Track Order</h2>
        <p>Once your order has shipped, you will receive an email with tracking information. You can also track your order status in your account on our website.</p>
      </section>
      
      <section className="about-section">
        <h2>Size Guide</h2>
        <p>We provide a detailed size guide on each product page to help you choose the right size. If you're unsure, feel free to contact our customer service for assistance.</p>
      </section>
    </div>
  );
};

export default About;
