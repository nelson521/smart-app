import React from 'react';
import { Link }from 'react-router-dom'
import './Nav.css';

function Nav(props) {
  return(
    <nav className="purple lighten-3">
    <div className="nav-wrapper">
      <a href="/" className="brand-logo"><img src="IMG/decklogo.png"/></a>
      <ul className="right hide-on-med-and-down">
        <Link to="/signup">
          <button className="btn purple">Sign Up</button>
        </Link>
        <Link to="/login">
        <button className="btn purple">Login</button>
        </Link>
        

      </ul>
    </div>
  </nav>
  )
    
  
}

export default Nav; 