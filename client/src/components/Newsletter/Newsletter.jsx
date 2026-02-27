import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className="newsletter">
      <h2>Subscribe to our Newsletter</h2>
      <p>Get the latest updates and offers.</p>
      <input type="email" placeholder="Enter your email" />
      <button>Subscribe</button>
    </div>
  )
}

export default Newsletter