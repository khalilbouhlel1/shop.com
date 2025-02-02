import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './shop.css'
import axios from 'axios'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'

const Shop = () => {
  const [sortBy, setSortBy] = useState('featured')
  const [priceRange, setPriceRange] = useState('all')
  const [selectedGender, setSelectedGender] = useState('all')
  const [selectedSize, setSelectedSize] = useState('all')
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:7000/api/products/list-products');
      setProducts(response.data.products);
      setLoading(false);
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to fetch products');
      setLoading(false);
    }
  };

  const filterProducts = (products) => {
    return products.filter(item => {
      const priceMatch = (() => {
        switch(priceRange) {
          case 'under-50':
            return item.price < 50
          case '50-100':
            return item.price >= 50 && item.price <= 100
          case 'over-100':
            return item.price > 100
          default:
            return true
        }
      })()

      const genderMatch = selectedGender === 'all' || item.category === selectedGender
      const sizeMatch = selectedSize === 'all' || item.sizes.some(s => s.size === selectedSize)

      return priceMatch && genderMatch && sizeMatch
    })
  }

  const sortProducts = (products) => {
    switch(sortBy) {
      case 'price-low':
        return [...products].sort((a, b) => a.price - b.price)
      case 'price-high':
        return [...products].sort((a, b) => b.price - a.price)
      case 'newest':
        return [...products].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      default:
        return products
    }
  }

  
  if (loading) return <LoadingSpinner/>;
  if (error) return <div className="error-message">{error}</div>;

  const filteredAndSortedProducts = sortProducts(filterProducts(products))

  return (
    <div className='shop'>
      <div className='shop-header'>
        <h1>Shop All Products</h1>
        <div className='shop-filters'>
          <select value={selectedGender} onChange={(e) => setSelectedGender(e.target.value)}>
            <option value="all">All Categories</option>
            <option value="shirts">Shirts</option>
            <option value="pants">Pants</option>
            <option value="shoes">Shoes</option>
            <option value="accessories">Accessories</option>
          </select>
          
          <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
            <option value="all">All Sizes</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>

          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="featured">Featured</option>
            <option value="newest">Newest First</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>

          <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
            <option value="all">All Prices</option>
            <option value="under-50">Under 50dt</option>
            <option value="50-100">50dt - 100dt</option>
            <option value="over-100">Over 100dt</option>
          </select>
        </div>
      </div>

      <div className='shop-products'>
        {filteredAndSortedProducts.map(product => (
          <div className='shop-product' key={product._id}>
            <Link to={`/product/${product._id}`}>
              <div className='product-image'>
                <img src={product.image[0]} alt={product.name} />
                <div className='product-actions'>
                  <button className='add-to-cart'>Add to Cart</button>
                </div>
              </div>
              <div className='product-details'>
                <h3>{product.name}</h3>
                <p className='price'>${product.price}</p>
                <p className='brand'>{product.mark}</p>
                <div className='available-sizes'>
                  {product.sizes.map((size, index) => (
                    <span key={index} className="size-badge">
                      {size.size}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Shop
