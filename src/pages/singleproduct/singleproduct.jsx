import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import  new_collections from '../../components/assets/data';
import './singleproduct.css';

const SingleProduct = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);
  
  const product = [...new_collections].find(
    (item) => item.id === parseInt(id)
  );

  if (!product) {
    return <div className="single-product">Product not found</div>;
  }

  const handleAddToCart = () => {
   
  };

  return (
    <div className="single-product">
      <div className="product-images">
        <div className="main-image">
          <img 
            src={product.images[selectedImage]} 
            alt={`${product.name} view ${selectedImage + 1}`} 
          />
        </div>
        <div className="thumbnail-images">
          {product.images.map((image, index) => (
            <button 
              key={image}
              className={`thumbnail ${selectedImage === index ? 'selected' : ''}`}
              onClick={() => setSelectedImage(index)}
              aria-label={`Select image ${index + 1}`}
            >
              <img 
                src={image} 
                alt={`${product.name} thumbnail ${index + 1}`} 
              />
            </button>
          ))}
        </div>
      </div>
      
      <div className="product-details">
        <h1>{product.name}</h1>
        
        <div className="product-price">
          {product.old_price && (
            <span className="old-price">${product.old_price}</span>
          )}
          <span className="new-price">${product.new_price}</span>
        </div>

        <div className="size-selector">
          <h3>Select Size</h3>
          <div className="size-options">
            {product.sizes.map((size) => (
              <button
                key={size}
                className={`size-button ${selectedSize === size ? 'selected' : ''} 
                  ${product.availableSizes[size] === 0 ? 'disabled' : ''}`}
                onClick={() => setSelectedSize(size)}
                disabled={product.availableSizes[size] === 0}
              >
                {size}
                <span className="stock-info">
                  ({product.availableSizes[size]} left)
                </span>
              </button>
            ))}
          </div>
        </div>

        <button 
          className="add-to-cart-btn"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>

        <div className="product-info">
          <h3>Product Details</h3>
          <p>Gender: {product.gender}</p>
          {/* Add more product details here */}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
