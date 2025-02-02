import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './latestcollection.css';

const ProductCard = ({ product }) => (
  <Link to={`/product/${product._id}`} className="product-link">
    <div className='product-card'>
      <div className='product-image-wrapper'>
        <img 
          src={product.image[0]} 
          alt={product.name}
          loading="lazy"
        />
        <div className='product-badges'>
          <span className='new-badge'>New</span>
          {product.discount && <span className='discount-badge'>{product.discount}% OFF</span>}
        </div>
        <div className='hover-actions'>
          <button className='action-btn view-btn'>Quick View</button>
          <button className='action-btn cart-btn'>Add to Cart</button>
        </div>
      </div>
      <div className='product-info'>
        <div className='product-category'>{product.category}</div>
        <h3 className='product-name'>{product.name}</h3>
        <div className='product-brand'>{product.mark}</div>
        <div className='product-price'>
          <span className='current-price'>${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className='original-price'>${product.originalPrice.toFixed(2)}</span>
          )}
        </div>
        <div className='product-sizes'>
          {product.sizes.map((size, idx) => (
            <span key={idx} className='size-chip'>{size.size}</span>
          ))}
        </div>
      </div>
    </div>
  </Link>
);

const Latestcollection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchLatestProducts();
  }, []);

  const fetchLatestProducts = async () => {
    try {
      const response = await axios.get('http://localhost:7000/api/products/list-products');
      const latestProducts = response.data.products
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 8);
      setProducts(latestProducts);
      setLoading(false);
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to fetch latest products');
      setLoading(false);
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // Auto-scroll every 5 seconds
    return () => clearInterval(timer);
  }, [products.length]);

  if (loading) return <div className="loading">Loading latest collection...</div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className='latestcollection'>
      <div className='collection-header'>
        <h1>Latest Collection</h1>
        <p>Explore our latest fashion and accessories</p>
      </div>
      
      <div className='collection-container'>
        <button className='nav-button prev' onClick={prevSlide}>&lt;</button>
        <div className='collection-grid'>
          {products.map((product, index) => {
            const position = index - currentIndex;
            return (
              <div 
                className={`collection-item ${Math.abs(position) <= 2 ? 'visible' : ''}`}
                key={product._id}
                style={{
                  transform: `translateX(${position * 100}%)`,
                  opacity: Math.abs(position) <= 2 ? 1 : 0,
                  zIndex: Math.abs(position) === 0 ? 2 : 1
                }}
              >
                <ProductCard product={product} />
              </div>
            );
          })}
        </div>
        <button className='nav-button next' onClick={nextSlide}>&gt;</button>
      </div>

      <div className='collection-dots'>
        {products.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Latestcollection;