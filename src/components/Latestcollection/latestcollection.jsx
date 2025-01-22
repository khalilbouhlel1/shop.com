import React from 'react'
import { Link } from 'react-router-dom'
import './latestcollection.css'
import new_collections from '../assets/data'

const Latestcollection = () => {
  // Duplicate the array three times for smoother infinite scroll
  const duplicatedCollections = [...new_collections, ...new_collections, ...new_collections]

  return (
    <div className='latestcollection'>
      <div className='collection-header'>
        <h1>Latest Collection</h1>
        <p>Explore our latest fashion and accessories</p>
      </div>
      
      <div className='scroll-container'>
        <div className='scroll-content'>
          {duplicatedCollections.map((item) => (
            <div className='collection-item' key={item.id}>
              <Link to={`/product/${item.id}`} style={{ textDecoration: 'none' }}>
                <div className='item-image'>
                  <img src={item.mainImage} alt={item.name} />
                  <div className='item-overlay'>
                    <button className='add-to-cart'>Add to Cart</button>
                  </div>
                </div>
                <div className='item-details'>
                  <h3>{item.name}</h3>
                  <p className='price'>${item.new_price.toFixed(2)}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Latestcollection