import React from 'react';
import { Link } from 'react-router-dom';
function Body() {
  return (
    <div className="container center purple lighten-3 z-depth-4">
      <h1 className="white-text">Welcome to Hit The Deck</h1>
      <h3 className="white-text">A website that can help you learn a lot of random facts.</h3>
      <div>
        

        <Link to={"/cardflip"} className="btn lg purple darken-4">Learn Here</Link>
        
        <button className="btn lg purple darken-4">Test Yourself</button>

      </div>
    </div>
      )
    }
    
export default Body; 