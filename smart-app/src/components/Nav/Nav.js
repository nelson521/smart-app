import React from 'react';
import './Nav.css';

function Nav(props) {
  return(
    <nav className="purple lighten-3">
    <div className="nav-wrapper">
      <a href="/" className="brand-logo"><img src="IMG/decklogo.png"/></a>
      <ul className="right hide-on-med-and-down">
        <li><a href="">Sign Up</a></li>
        <li><a href="">Login</a></li>
      </ul>
    </div>
  </nav>
  )
    
  
}

export default Nav; 