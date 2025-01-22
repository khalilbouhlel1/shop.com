import React from 'react'
import './hero.css'
import { Link } from 'react-router-dom'
import heroImage from '../assets/clark-street-mercantile-qnKhZJPKFD8-unsplash.jpg'
import { FaChevronDown } from 'react-icons/fa'

const Hero = () => {
  const scrollToLatestCollection = () => {
    const latestCollection = document.querySelector('.latestcollection')
    latestCollection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className='hero'>
      <img src={heroImage} alt="Fashion store interior" />
      <div className='hero-content'>
        <h1>Discover Your Style</h1>
        <p>Explore our curated collection of premium fashion and accessories for every occasion.</p>
        <Link to="/shop">
          <button>Shop Now</button>
        </Link>
      </div>
      <button 
        className='scroll-down' 
        onClick={scrollToLatestCollection}
        onKeyDown={(e) => e.key === 'Enter' && scrollToLatestCollection()}
        tabIndex={0}
        aria-label="Scroll to latest collection"
      >
        <FaChevronDown />
        <span>Explore Latest Collection</span>
      </button>
    </div>
  )
}

export default Hero