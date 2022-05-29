import React from 'react'
import './call.css'
import { Link } from 'react-router-dom'

const Call = () => {
  return (
    <div className='call'>
        <h1>Waiter will reach out to You Soon</h1>
        <br />
        <h3>Thank You</h3>
        <Link to='/'>
            <button className='btn'>Back to Home</button>
        </Link>

    </div>
  )
}

export default Call