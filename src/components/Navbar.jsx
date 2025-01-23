import React, { useState } from 'react'
import '../styles/Navbar.css'
import Logo from '../assets/Logo.png'

function Navbar() {

  const [active, setactive] = useState(false);


  return (
    <div>
       <nav>
      <div className="logo">
        <h1><img src={Logo} alt="RegisterKaro" /></h1>
      </div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Our Services</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <button className='NavButton'>Talk An Expert</button>
        </li>
      </ul>
      <div className={`${active ? "hamburger hamburger-active" : "hamburger"}`} onClick={() => setactive(!active)}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </nav>
    <div className={`${active? "menubar active" : "menubar"}`}>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Our Services</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <button className='NavButton'>Talk An Expert</button>
        </li>
      </ul>
    </div>
    </div>
  )
}

export default Navbar
