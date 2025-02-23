import React from "react";
import "./Navbar.css"; // Ensure Navbar.css is in the same folder
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo"><a href="#home" ><Link to="/"><div className="Logo">LANKA</div></Link></a></div>
        <ul className="nav-links">
          <li><a href="#destination" ><Link to="/Destination">Destination</Link></a></li>
          <li><a href="#accommodation"><Link to="/Accommondation">Accommodation</Link></a></li>
          <li><a href="#about"><Link to="/About">About Sri Lanka</Link></a></li>
          <li><a href="#contact"><Link to="/Contact">Contact</Link></a></li>
        </ul>
        <button className="cta-button">Discover your journey</button>
      </div>
    </nav>
  );
};

export default Navbar;
