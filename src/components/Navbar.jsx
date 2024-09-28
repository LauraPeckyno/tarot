import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbarContainer">
        <div className="leftnav">
        <Link to="/home" className="navItem">Tarot Home</Link>
          <Link to="/one-card" className="navItem">Single-Card Reading</Link>
          <Link to="/three-card" className="navItem">Three-Card Reading</Link>
          <Link to="/learn" className="navItem">Learn More</Link>
          <Link to="/explore" className="navItem">Explore All Cards</Link>
        </div>
        <div className="logo"><img src="https://static.vecteezy.com/system/resources/previews/007/057/839/non_2x/magical-tarot-cards-isolated-on-white-background-esoteric-and-occult-items-for-prediction-hand-drawn-illustration-in-doodle-style-perfect-for-cards-decorations-logo-various-designs-vector.jpg" height="150px"/></div>
      </div>
    </>
  )
}

export default Navbar;