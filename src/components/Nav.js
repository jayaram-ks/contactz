import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
   
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className='container-fluid'>
    <Link className="navbar-brand mx-5" to="/">Private Contacts</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
      <ul className="navbar-nav mx-5">
        <li className="nav-item active">
          <Link className="nav-link" to="/">Home </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/favourite">Favourites</Link>
        </li>
       
      </ul>
    
    </div>
  </nav>
  
  )
}

export default Nav