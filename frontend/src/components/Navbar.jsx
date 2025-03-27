import React from 'react';
import { assets } from '../assets/assets_frontend/assets.js';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
    console.log("Navbar is rendering");

  return (
    <nav>
      <img src= { assets.logo} alt="Logo" />
      <ul>
        <li>
          <NavLink to="/">HOME</NavLink>
          <hr />
        </li>
        <li>
          <NavLink to="/all-doctor">All DOCTOR</NavLink>
          <hr />
        </li>
        <li>
          <NavLink to="/about">ABOUT</NavLink>
          <hr />
        </li>
        <li>
          <NavLink to="/contact">CONTACT</NavLink>
          <hr />
        </li>
      </ul>
      <div>
        <button>CREATE ACCOUNT</button>
      </div>
    </nav>
  );
};

export default Navbar;
