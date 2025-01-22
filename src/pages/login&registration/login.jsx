import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './login.css'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login data:', formData)
  }

  return (
    <div className='login-container'>
      <div className='login-box'>
        <h2>Welcome Back</h2>
        <p className='subtitle'>Please enter your details</p>
        
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className='form-group'>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className='form-options'>
            <label className='remember-me'>
              <input type="checkbox" /> Remember me
            </label>
            <Link to="/forgot-password" className='forgot-password'>
              Forgot password?
            </Link>
          </div>

          <button type="submit" className='signin-button'>
            Sign In
          </button>
        </form>

        <div className='divider'>
          <span>OR</span>
        </div>

        <button className='google-login'>
          Sign in with Google
        </button>

        <p className='register-link'>
          Don't have an account? {' '}
          <Link to="/register">Sign up</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
