import React, { useState } from 'react';
import { assets } from '../assets/assets_frontend/assets.js';

import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
    console.log("Navbar is rendering");
    const navigate =useNavigate();

    const[showMenu, setShowMenu]=useState(false)
    const[token, setToken] = useState(true)


  return (
    <nav className='flex items-center justify-betwewn text-sm py-4 mb-5 border-b border-b-gray-400'>
        
      <img className='w-44 cursor-ppointer' src= { assets.logo} alt="Logo" />
      <ul className='hidden md:flex items-start gap-5 font-medium '>
        <li className='py-1' >
          <NavLink to="/">HOME</NavLink>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-aut hidden'/>
        </li>
        <li  className='py-1'>
          <NavLink to="/all-doctor">All DOCTOR</NavLink>
          <hr  className='border-none outline-none h-0.5 bg-primary w-3/5 m-aut hidden'/>
        </li>
        <li  className='py-1'>
          <NavLink to="/about">ABOUT</NavLink>
          <hr  className='border-none outline-none h-0.5 bg-primary w-3/5 m-aut hidden'/>
        </li>
        <li  className='py-1'>
          <NavLink to="/contact">CONTACT</NavLink>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-aut hidden' />
        </li>
      </ul>
      <div className='flex items-center gap-4'>
        {
            token 
            ?<div className='flex items-center gap-2 cursor-pointer group relative:'>
                <img className='w-8 rounded-full' src={assets.profile_pic} alt=''/>
                <img className='w-2.5' src={assets.dropdown_icon} alt=''/>
            </div>

       
        :<button onClick={()=>navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block '>CREATE ACCOUNT</button>
        }
        </div>
    </nav>
  );
};

export default Navbar;
