import React from 'react';
import './Nav.css';

function Nav(props) {
  return(
    <nav className="purple lighten-3">
    <div className="nav-wrapper">
      <a href="/" className="brand-logo"><img src="IMG/decklogo.png"/></a>
      <ul className="right hide-on-med-and-down">
        <button className="btn purple">Sign Up</button>
        <button className="btn purple">Login</button>

      </ul>
    </div>
  </nav>
  )
    
  
}

export default Nav; 