import React, { useState } from 'react';
import { assets } from '../assets/assets_frontend/assets.js';

import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
    console.log("Navbar is rendering");
    const navigate =useNavigate();

    const[showMenu, setShowMenu]=useState(false)
    const[token, setToken] = useState(true)


  return (
    <nav className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
        
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
            ?<div className='relative group cursor-pointer'>
              <div className='flex item-center gap-2'>
                 <img className='w-8 rounded-full' src={assets.profile_pic} alt=''/>
                 <img className='w-2.5' src={assets.dropdown_icon} alt=''/>
               </div>
                <div className='absolut right-0  mt-2 w-48 bg-white shadow-md rounded-lg  hidden group-hover:block'>
                  <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>

                 
                   <p onClick={()=>navigate('myprofile')} className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>My Profile </p>
                    <p onClick={()=>navigate('myappointment')} className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>My Appointment</p>
                    <p onClick={()=>setToken(false)} className='px-4 py-2 hover:bg-red-100 text-red-600 cursor-pointer'>Logout </p>
                    </div>
                </div>
            </div>

       
        :<button onClick={()=>navigate('/login')} 
        className='bg-primary text-blue-800 px-8 py-3 rounded-full font-light hidden md:block '>CREATE ACCOUNT</button>
        }
        </div>
    </nav>
  );
};

export default Navbar;
