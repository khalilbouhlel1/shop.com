import React from 'react';
import { useCart } from '../../context/CartContext';
import './CartItem.css';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { _id, name, price, quantity, size, image } = item;

  return (
    <div className="cart-item">
      <img src={image} alt={name} className="cart-item-image" />
      <div className="cart-item-details">
        <h3>{name}</h3>
        <p>Size: {size}</p>
        <p>Price: ${price}</p>
        <div className="quantity-controls">
          <button 
            onClick={() => updateQuantity(_id, quantity - 1)}
            disabled={quantity <= 1}
          >
            -
          </button>
          <span>{quantity}</span>
          <button 
            onClick={() => updateQuantity(_id, quantity + 1)}
          >
            +
          </button>
        </div>
      </div>
      <button 
        className="remove-btn"
        onClick={() => removeFromCart(_id)}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem; 