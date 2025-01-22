import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './shop.css'
import new_collections from '../../components/assets/data'

const Shop = () => {
  const [sortBy, setSortBy] = useState('featured')
  const [priceRange, setPriceRange] = useState('all')
  const [selectedGender, setSelectedGender] = useState('all')
  const [selectedSize, setSelectedSize] = useState('all')

  const filterProducts = (products) => {
    return products.filter(item => {
      const priceMatch = (() => {
        switch(priceRange) {
          case 'under-50':
            return item.new_price < 50
          case '50-100':
            return item.new_price >= 50 && item.new_price <= 100
          case 'over-100':
            return item.new_price > 100
          default:
            return true
        }
      })()

      const genderMatch = selectedGender === 'all' || item.gender === selectedGender
      const sizeMatch = selectedSize === 'all' || item.sizes.includes(selectedSize)

      return priceMatch && genderMatch && sizeMatch
    })
  }

  const sortProducts = (products) => {
    switch(sortBy) {
      case 'price-low':
        return [...products].sort((a, b) => a.new_price - b.new_price)
      case 'price-high':
        return [...products].sort((a, b) => b.new_price - a.new_price)
      default:
        return products
    }
  }

  const filteredAndSortedProducts = sortProducts(filterProducts(new_collections))

  return (
    <div className='shop'>
      <div className='shop-header'>
        <h1>Shop All Products</h1>
        <div className='shop-filters'>
          <select value={selectedGender} onChange={(e) => setSelectedGender(e.target.value)}>
            <option value="all">All</option>
            <option value="women">Women</option>
            <option value="men">Men</option>
            <option value="kids">Kids</option>
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
          <div className='shop-product' key={product.id}>
            <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
              <div className='product-image'>
                <img src={product.mainImage} alt={product.name} />
                <div className='product-actions'>
                  <button className='add-to-cart'>Add to Cart</button>
                </div>
              </div>
              <div className='product-details'>
                <h3>{product.name}</h3>
                <p className='price'>${product.new_price.toFixed(2)}</p>
                <p className='available-sizes'>
                  Sizes: {product.sizes.join(', ')}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Shop
