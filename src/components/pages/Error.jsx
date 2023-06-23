import React from 'react';
import { Link } from 'react-router-dom';



const Error = () => {
  return (
    <div className='error'>
      <h1> <span>Error</span>: 404</h1>
      <h5>Coming soon!</h5>
      <Link className='error__btn' to={'/home'}>Go back</Link>
    </div>
  )
}

export default Error
