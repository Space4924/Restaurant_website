import React from 'react'
import './call.css'
import { Link } from 'react-router-dom'

const Order = () => {
  return (
    <div className='call'>
        <h1>Your Order is preperaing </h1>
        <br />
        <h3>Thank You</h3>
        <Link to='/'>
            <button className='btn'>Back to Home</button>
        </Link>

    </div>
  )
}

export default Order