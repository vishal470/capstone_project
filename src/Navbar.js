import React from "react";
import Vishal from './Vishal.jpg';
import "./Navbar.css"
import Logo from './hit.png'


export default function Navbar() {
  return (
    <div className="main">

      <nav class="navbar">
        <div>
          <a href="https://www.hitbullseye.com/" target="_blank"><img className="img2" src={Logo} alt="React Logo" /></a>
        </div>
        <div>
          <h1>Calculator</h1>
        </div>
        <div>
          <a href="https://github.com/vishal470" target="_blank"><img className="img1" src={Vishal} alt="React Logo" /></a>
        </div>
      </nav>
    </div>
  );
}
