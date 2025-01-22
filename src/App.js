import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Hero from './components/Hero/hero'
import Latestcollection from './components/Latestcollection/latestcollection'
import Footer from './components/footer/footer'
import Shop from './pages/shop/shop'
import Cart from './pages/cart/cart'
import Login from './pages/login&registration/login'
import Register from './pages/login&registration/register'
import SingleProduct from './pages/singleproduct/singleproduct'
import About from './pages/about/about'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Latestcollection />
          </>
        } />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<SingleProduct />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App